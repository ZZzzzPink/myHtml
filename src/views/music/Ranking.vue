<template>
  <div class="music-ranking">
    <div class="header">
      <el-button 
        circle 
        @click="$router.back()"
        class="back-btn"
      >
        <el-icon><ArrowLeft /></el-icon>
      </el-button>
      <div class="title-section">
        <h2>
          <el-icon class="title-icon"><TrendCharts /></el-icon>
          音乐排行榜
        </h2>
      </div>
      <div class="placeholder"></div>
    </div>

    <!-- 平台选择器 -->
    <div class="platform-selector">
      <el-radio-group v-model="selectedPlatform" size="large" @change="loadTopLists">
        <el-radio-button value="netease">
          <el-icon><Headset /></el-icon>
          网易云
        </el-radio-button>
        <el-radio-button value="kuwo">
          <el-icon><Headset /></el-icon>
          酷我
        </el-radio-button>
        <el-radio-button value="qq">
          <el-icon><Headset /></el-icon>
          QQ音乐
        </el-radio-button>
      </el-radio-group>
    </div>

    <!-- 加载状态 -->
    <div v-if="loadingLists" class="loading">
      <el-icon class="is-loading" :size="40" color="#409eff">
        <Loading />
      </el-icon>
      <p>加载中...</p>
    </div>

    <!-- 排行榜列表 -->
    <div v-else-if="topLists.length > 0" class="ranking-lists">
      <div 
        v-for="(list, index) in topLists" 
        :key="list.id"
        @click="selectTopList(list)"
        class="ranking-card"
        :class="{ active: selectedList?.id === list.id }"
      >
        <div class="rank-number">{{ index + 1 }}</div>
        <div class="list-info">
          <h3>{{ list.name }}</h3>
          <p class="update-time">{{ list.updateFrequency || '定期更新' }}</p>
        </div>
        <el-icon class="arrow-icon"><ArrowRight /></el-icon>
      </div>
    </div>

    <div v-else class="no-data">
      <p>😔 暂无排行榜数据</p>
    </div>

    <!-- 排行榜歌曲弹窗 -->
    <el-dialog
      v-model="dialogVisible"
      :title="selectedList?.name || '排行榜'"
      width="90%"
      :style="{ maxWidth: '600px' }"
      @close="handleDialogClose"
    >
      <div v-if="loadingSongs" class="loading-songs">
        <el-icon class="is-loading" :size="30" color="#409eff">
          <Loading />
        </el-icon>
        <p>加载歌曲中...</p>
      </div>

      <div v-else-if="songs.length > 0" class="songs-list">
        <div 
          v-for="(song, index) in songs" 
          :key="song.id"
          @click="playSong(song)"
          class="song-item"
        >
          <div class="song-rank" :class="getRankClass(index)">
            {{ index + 1 }}
          </div>
          <img :src="song.pic || '/favicon.ico'" :alt="song.name" class="song-cover" />
          <div class="song-info">
            <p class="song-name">{{ song.name }}</p>
            <p class="song-artist">{{ song.artist }}</p>
          </div>
          <el-button 
            circle 
            @click.stop="addToPlaylist(song)"
            class="add-btn"
          >
            <el-icon><Plus /></el-icon>
          </el-button>
        </div>
      </div>

      <div v-else class="no-songs">
        <p>暂无歌曲数据</p>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ArrowLeft, ArrowRight, TrendCharts, Headset, Loading, Plus } from '@element-plus/icons-vue'
import { rankingApi } from '@/api/music/ranking'
import { playerApi } from '@/api/music/player'
import { usePlayerStore } from '@/stores/music/player'
import { usePlaylistStore } from '@/stores/music/playlist'
import { ElMessage } from 'element-plus'

const router = useRouter()
const playerStore = usePlayerStore()
const playlistStore = usePlaylistStore()

const selectedPlatform = ref('netease')
const topLists = ref([])
const loadingLists = ref(false)

const dialogVisible = ref(false)
const selectedList = ref(null)
const songs = ref([])
const loadingSongs = ref(false)

// 加载排行榜列表
const loadTopLists = async () => {
  try {
    loadingLists.value = true
    topLists.value = []
    
    const response = await rankingApi.getTopLists(selectedPlatform.value)
    if (response.code === 200 && response.data?.list) {
      topLists.value = response.data.list
    }
  } catch (error) {
    console.error('加载排行榜失败:', error)
    ElMessage.error('加载排行榜失败，请稍后重试')
  } finally {
    loadingLists.value = false
  }
}

// 选择排行榜
const selectTopList = async (list) => {
  selectedList.value = list
  dialogVisible.value = true
  
  try {
    loadingSongs.value = true
    songs.value = []
    
    const response = await rankingApi.getTopListSongs(selectedPlatform.value, list.id)
    if (response.code === 200 && response.data?.list) {
      songs.value = response.data.list.map(song => ({
        ...song,
        source: selectedPlatform.value
      }))
    }
  } catch (error) {
    console.error('加载排行榜歌曲失败:', error)
    ElMessage.error('加载歌曲失败，请稍后重试')
  } finally {
    loadingSongs.value = false
  }
}

// 播放歌曲
const playSong = async (song) => {
  try {
    const urlResponse = await playerApi.getMusicUrl(song.source, song.id)
    const songWithUrl = { ...song, url: urlResponse.data }

    playerStore.setCurrentSong(songWithUrl)
    playlistStore.addToPlaylist([songWithUrl])
    playlistStore.playAtIndex(playlistStore.playList.length - 1)

    setTimeout(() => playerStore.play(), 100)
    dialogVisible.value = false
    router.push('/music/player')
  } catch (error) {
    console.error('播放失败:', error)
    ElMessage.error('播放失败，请稍后重试')
  }
}

// 添加到播放列表
const addToPlaylist = async (song) => {
  try {
    const urlResponse = await playerApi.getMusicUrl(song.source, song.id)
    const songWithUrl = { ...song, url: urlResponse.data }
    playlistStore.addToPlaylist([songWithUrl])
    ElMessage.success('已添加到播放列表')
  } catch (error) {
    console.error('添加失败:', error)
    ElMessage.error('添加失败，请稍后重试')
  }
}

// 获取排名样式
const getRankClass = (index) => {
  if (index === 0) return 'rank-1'
  if (index === 1) return 'rank-2'
  if (index === 2) return 'rank-3'
  return ''
}

// 关闭弹窗
const handleDialogClose = () => {
  selectedList.value = null
  songs.value = []
}

onMounted(() => {
  loadTopLists()
})
</script>

<style scoped>
.music-ranking {
  padding: 20px;
  padding-bottom: 100px;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 16px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.back-btn {
  flex-shrink: 0;
}

.title-section {
  flex: 1;
  display: flex;
  justify-content: center;
}

.title-section h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #303133;
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-icon {
  font-size: 22px;
  color: #409eff;
}

.placeholder {
  width: 32px;
  flex-shrink: 0;
}

.platform-selector {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.platform-selector :deep(.el-radio-button) {
  margin: 0 5px;
}

.platform-selector :deep(.el-radio-button__inner) {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 24px;
}

.loading {
  text-align: center;
  padding: 60px 20px;
}

.loading p {
  margin-top: 20px;
  font-size: 14px;
  color: #909399;
}

.ranking-lists {
  
}

.ranking-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
}

.ranking-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.ranking-card.active {
  border: 2px solid #409eff;
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.2);
}

.rank-number {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #409eff 0%, #3a8ee6 100%);
  color: white;
  border-radius: 12px;
  font-size: 20px;
  font-weight: 700;
  flex-shrink: 0;
}

.list-info {
  flex: 1;
  min-width: 0;
}

.list-info h3 {
  margin: 0 0 6px 0;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.update-time {
  margin: 0;
  font-size: 13px;
  color: #909399;
}

.arrow-icon {
  font-size: 20px;
  color: #c0c4cc;
  flex-shrink: 0;
}

.no-data {
  text-align: center;
  padding: 60px 20px;
  color: #909399;
  font-size: 16px;
}

/* 弹窗内歌曲列表样式 */
.loading-songs {
  text-align: center;
  padding: 40px 20px;
}

.loading-songs p {
  margin-top: 16px;
  font-size: 14px;
  color: #909399;
}

.songs-list {
  max-height: 60vh;
  overflow-y: auto;
}

.song-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  gap: 12px;
}

.song-item:hover {
  background: #f5f7fa;
}

.song-rank {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: #606266;
  flex-shrink: 0;
}

.song-rank.rank-1 {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
  color: #fff;
}

.song-rank.rank-2 {
  background: linear-gradient(135deg, #c0c0c0 0%, #e8e8e8 100%);
  color: #fff;
}

.song-rank.rank-3 {
  background: linear-gradient(135deg, #cd7f32 0%, #e9a966 100%);
  color: #fff;
}

.song-cover {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}

.song-info {
  flex: 1;
  min-width: 0;
}

.song-name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-artist {
  margin: 0;
  font-size: 13px;
  color: #909399;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.add-btn {
  flex-shrink: 0;
}

.no-songs {
  text-align: center;
  padding: 40px 20px;
  color: #909399;
  font-size: 14px;
}

@media (max-width: 768px) {
  .music-ranking {
    padding: 16px;
    padding-bottom: 80px;
  }

  .header {
    margin-bottom: 24px;
    padding: 14px 16px;
  }

  .title-section h2 {
    font-size: 18px;
  }

  .title-icon {
    font-size: 20px;
  }

  .placeholder {
    width: 28px;
  }

  .platform-selector {
    padding: 16px;
    margin-bottom: 24px;
  }

  .platform-selector :deep(.el-radio-button__inner) {
    padding: 10px 18px;
    font-size: 14px;
  }

  .ranking-lists {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .ranking-card {
    padding: 16px;
  }

  .rank-number {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }

  .list-info h3 {
    font-size: 15px;
  }

  .update-time {
    font-size: 12px;
  }

  .song-rank {
    width: 28px;
    height: 28px;
    font-size: 13px;
  }

  .song-cover {
    width: 45px;
    height: 45px;
  }

  .song-name {
    font-size: 13px;
  }

  .song-artist {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .music-ranking {
    padding: 12px;
    padding-bottom: 70px;
  }

  .header {
    margin-bottom: 20px;
    padding: 12px 14px;
  }

  .title-section h2 {
    font-size: 17px;
  }

  .title-icon {
    font-size: 19px;
  }

  .placeholder {
    width: 24px;
  }

  .platform-selector {
    padding: 14px;
    margin-bottom: 20px;
  }

  .platform-selector :deep(.el-radio-button__inner) {
    padding: 8px 14px;
    font-size: 13px;
  }

  .ranking-card {
    padding: 14px;
    gap: 12px;
  }

  .rank-number {
    width: 38px;
    height: 38px;
    font-size: 16px;
  }

  .list-info h3 {
    font-size: 14px;
  }

  .update-time {
    font-size: 11px;
  }

  .song-item {
    padding: 10px;
    gap: 10px;
  }

  .song-rank {
    width: 26px;
    height: 26px;
    font-size: 12px;
  }

  .song-cover {
    width: 42px;
    height: 42px;
  }
}
</style>