<template>
  <div class="music-player-page">
    <div class="header">
      <el-button @click="$router.back()" circle :icon="ArrowLeft" class="back-btn" />
      <div class="header-title">
        <el-icon :size="24" color="#409eff"><Headset /></el-icon>
        <h2>正在播放</h2>
      </div>
      <div class="header-spacer"></div>
    </div>
    
    <div v-if="playerStore.currentSong" class="player-container">
      <MusicPlayer @currentTimeUpdate="handleCurrentTimeUpdate"/>
      
      <div class="tabs">
        <button 
          @click="activeTab = 'playlist'" 
          class="tab-btn"
          :class="{ active: activeTab === 'playlist' }"
        >
          播放列表 ({{ playlistStore.playList.length }})
        </button>
        <button 
          @click="activeTab = 'lyrics'" 
          class="tab-btn"
          :class="{ active: activeTab === 'lyrics' }"
        >
          歌词
        </button>
      </div>
      
      <div v-if="activeTab === 'playlist'" class="playlist-panel">
        <div v-if="playlistStore.playList.length === 0" class="empty">
          <p>播放列表为空</p>
        </div>
        <div v-else class="playlist">
          <div
            v-for="(song, index) in playlistStore.playList"
            :key="song.id || index"
            @click="playSongAtIndex(index)"
            class="playlist-item"
            :class="{ active: playlistStore.currentIndex === index }"
          >
            <span class="index">{{ index + 1 }}</span>
            <img :src="song.pic || '/favicon.ico'" :alt="song.name" class="song-thumb" />
            <div class="song-detail">
              <p class="name">{{ song.name }}</p>
              <p class="artist">{{ song.artist }}</p>
            </div>
            <button @click.stop="downloadSong(song)" class="download-song-btn" title="下载歌曲"><el-icon><Download /></el-icon></button>
            <button @click.stop="removeSong(index)" class="remove-btn">×</button>
          </div>
        </div>
      </div>
      
      <div v-if="activeTab === 'lyrics'" class="lyrics-panel" ref="lyricsContainer">
        <div v-if="parsedLyrics.length > 0" class="lyrics-content">
          <p 
            v-for="(line, index) in parsedLyrics" 
            :key="index" 
            :ref="el => { if(index === currentLyricIndex) currentLyricEl = el }"
            class="lyric-line"
            :class="{ active: index === currentLyricIndex }"
          >
            {{ line.text }}
          </p>
        </div>
        <div v-else class="empty">
          <p>暂无歌词</p>
        </div>
      </div>
    </div>
    
    <div v-else class="empty-player">
      <p>🎵</p>
      <p>暂无播放内容</p>
      <button @click="$router.push('/music/search')" class="search-btn">
        去搜索音乐
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import MusicPlayer from '@/components/music/Player/MusicPlayer.vue'
import { usePlayerStore } from '@/stores/music/player'
import { usePlaylistStore } from '@/stores/music/playlist'
import { playerApi } from '@/api/music/player'
import { parseLyrics, getCurrentLyricIndex } from '@/utils/music/lyricParser'
import { ArrowLeft, Headset, Download } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const router = useRouter()
const playerStore = usePlayerStore()
const playlistStore = usePlaylistStore()

const activeTab = ref('playlist')
const lyrics = ref('')
const parsedLyrics = ref([])
const currentLyricIndex = ref(-1)
const lyricsContainer = ref(null)
const currentLyricEl = ref(null)

const playModeText = computed(() => {
  const modes = {
    sequence: '🔁 顺序播放',
    random: '🔀 随机播放',
    single: '🔂 单曲循环'
  }
  return modes[playerStore.playMode] || '顺序播放'
})

const playSongAtIndex = (index) => {
  playlistStore.playAtIndex(index)
  const song = playlistStore.currentSong
  if (song) {
    playerStore.setCurrentSong(song)
    setTimeout(() => playerStore.play(), 100)
  }
}

const removeSong = (index) => {
  playlistStore.removeFromPlaylist(index)
}

const togglePlayMode = () => {
  const modes = ['sequence', 'random', 'single']
  const currentIndex = modes.indexOf(playerStore.playMode)
  const nextIndex = (currentIndex + 1) % modes.length
  playerStore.setPlayMode(modes[nextIndex])
}

const downloadSong = async (song) => {
  if (!song || !song.source || !song.id) {
    ElMessage.warning('歌曲信息不完整')
    return
  }
  
  try {
    ElMessage.info('正在准备下载...')
    
    // 构建下载URL - 直接使用API的URL端点
    const downloadUrl = `https://music-dl.sayqz.com/api/?source=${song.source}&id=${song.id}&type=url&br=320k`
    
    // 创建隐藏的iframe来触发下载
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = downloadUrl
    document.body.appendChild(iframe)
    
    // 3秒后移除iframe
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 3000)
    
    ElMessage.success('下载已开始')
  } catch (error) {
    console.error('下载失败:', error)
    ElMessage.error('下载失败，请稍后重试')
  }
}

const loadLyrics = async () => {
  if (!playerStore.currentSong) return
  
  try {
    const response = await playerApi.getLyrics(
        playerStore.currentSong.source,
        playerStore.currentSong.id
    )
    lyrics.value = response || ''
    parsedLyrics.value = parseLyrics(response)
  } catch (error) {
    console.error('加载歌词失败:', error)
    lyrics.value = ''
    parsedLyrics.value = []
  }
}

const handleCurrentTimeUpdate = (currentTime) => {
  if (parsedLyrics.value.length === 0) return
  
  const newIndex = getCurrentLyricIndex(parsedLyrics.value, currentTime)
  if (newIndex !== currentLyricIndex.value) {
    currentLyricIndex.value = newIndex
    scrollToCurrentLyric()
  }
}

const scrollToCurrentLyric = () => {
  nextTick(() => {
    if (currentLyricEl.value && lyricsContainer.value) {
      const container = lyricsContainer.value
      const element = currentLyricEl.value
      
      const containerHeight = container.clientHeight
      const elementTop = element.offsetTop
      const elementHeight = element.clientHeight
      
      const scrollTo = elementTop - (containerHeight / 2) + (elementHeight / 2)
      
      container.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      })
    }
  })
}

// 监听当前歌曲变化，加载歌词
watch(() => playerStore.currentSong, (newSong) => {
  if (newSong) {
    loadLyrics()
    currentLyricIndex.value = -1
  }
}, { immediate: true })
</script>

<style scoped>
.music-player-page {
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.back-btn {
  width: 40px !important;
  height: 40px !important;
}

.header-title {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  justify-content: center;
}

.header-title h2 {
  margin: 0;
  font-size: 20px;
  color: #303133;
  font-weight: 600;
}

.header-spacer {
  width: 40px;
}

.player-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  overflow: hidden;
}

.tabs {
  display: flex;
  gap: 10px;
  background: white;
  padding: 10px;
  border-radius: 8px;
}

.tab-btn {
  flex: 1;
  padding: 12px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #666;
  transition: all 0.3s;
}

.tab-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.playlist-panel, .lyrics-panel {
  background: white;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth;
}

.lyrics-panel {
  padding: 0;
  position: relative;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.lyrics-panel::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.playlist {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.playlist-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s;
}

.playlist-item:hover {
  background: #f8f9fa;
}

.playlist-item.active {
  background: #f0f9ff;
  border-left: 3px solid #409eff;
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.1);
}

.playlist-item.active .song-detail .name {
  color: #409eff;
  font-weight: 600;
}

.playlist-item.active .index {
  color: #409eff;
  font-weight: 600;
}

.index {
  width: 30px;
  font-size: 14px;
  color: #999;
  text-align: center;
}

.song-thumb {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  margin: 0 10px;
  object-fit: cover;
}

.song-detail {
  flex: 1;
  min-width: 0;
}

.song-detail .name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-detail .artist {
  margin: 0;
  font-size: 12px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.download-song-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #f0f0f0;
  border-radius: 50%;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.download-song-btn:hover {
  background: #667eea;
  color: white;
  transform: scale(1.1);
}

.remove-btn {
  width: 28px;
  height: 28px;
  border: none;
  background: #f0f0f0;
  border-radius: 50%;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.remove-btn:hover {
  background: #ff4d4f;
  color: white;
}

.lyrics-content {
  padding: 20px 20px 250px 20px;
  min-height: 100%;
}

.lyric-line {
  margin: 0 0 20px 0;
  font-size: 16px;
  line-height: 1.8;
  color: #999;
  text-align: center;
  transition: all 0.3s;
}

.lyric-line.active {
  color: #667eea;
  font-size: 18px;
  font-weight: 600;
  transform: scale(1.05);
}

.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  color: #999;
  font-size: 14px;
}

.mode-btn,
.download-btn {
  padding: 10px 24px;
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.mode-btn:hover,
.download-btn:hover:not(:disabled) {
  border-color: #667eea;
  color: #667eea;
}

.download-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.empty-player {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
}

.empty-player p:first-child {
  font-size: 80px;
  margin: 0 0 20px 0;
}

.empty-player p:last-of-type {
  font-size: 18px;
  color: #999;
  margin: 0 0 30px 0;
}

.search-btn {
  padding: 12px 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.search-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .music-player-page {
    padding: 16px;
    padding-bottom: 100px;
  }

  .header {
    margin-bottom: 20px;
  }

  .header h2 {
    font-size: 22px;
  }

  .back-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
  
  .tabs {
    padding: 8px;
    gap: 8px;
  }

  .tab-btn {
    padding: 10px;
    font-size: 13px;
  }
  
  .playlist-panel, .lyrics-panel {
    padding: 16px;
  }

  .playlist-item {
    padding: 8px;
  }

  .song-thumb {
    width: 35px;
    height: 35px;
  }

  .song-detail .name {
    font-size: 13px;
  }

  .song-detail .artist {
    font-size: 11px;
  }

  .download-song-btn {
    width: 28px;
    height: 28px;
    font-size: 14px;
    margin-right: 6px;
  }

  .remove-btn {
    width: 24px;
    height: 24px;
    font-size: 18px;
  }

  .lyric-line {
    font-size: 15px;
    margin-bottom: 16px;
  }

  .lyric-line.active {
    font-size: 17px;
  }

  .action-buttons {
    gap: 8px;
  }

  .mode-btn,
  .download-btn {
    padding: 8px 18px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .music-player-page {
    padding: 12px;
    padding-bottom: 90px;
  }

  .header {
    gap: 10px;
    margin-bottom: 16px;
  }

  .header h2 {
    font-size: 20px;
  }

  .back-btn {
    padding: 6px 10px;
    font-size: 12px;
  }

  .tabs {
    padding: 6px;
  }

  .tab-btn {
    padding: 8px;
    font-size: 12px;
  }

  .playlist-panel, .lyrics-panel {
    padding: 12px;
  }

  .playlist-item {
    padding: 6px;
  }

  .index {
    width: 24px;
    font-size: 12px;
  }

  .song-thumb {
    width: 32px;
    height: 32px;
    margin: 0 8px;
  }

  .song-detail .name {
    font-size: 12px;
  }

  .song-detail .artist {
    font-size: 10px;
  }

  .download-song-btn {
    width: 26px;
    height: 26px;
    font-size: 13px;
    margin-right: 4px;
  }

  .remove-btn {
    width: 22px;
    height: 22px;
    font-size: 16px;
  }

  .lyrics-content {
    padding: 20px 12px 250px 12px;
  }

  .lyric-line {
    font-size: 14px;
    margin-bottom: 14px;
  }

  .lyric-line.active {
    font-size: 16px;
  }

  .action-buttons {
    gap: 6px;
  }

  .mode-btn,
  .download-btn {
    padding: 8px 16px;
    font-size: 12px;
  }
}
</style>