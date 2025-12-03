<template>
  <div v-if="playerStore.currentSong" class="global-player" :class="{ hidden: hideOnPlayerPage }">
    <audio
      ref="audioRef"
      :src="playerStore.currentSong?.url"
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleSongEnd"
      preload="metadata"
    />
    
    <div class="player-content">
      <div class="song-info-section" @click="goToPlayer">
        <img 
          :src="playerStore.currentSong?.pic || '/favicon.ico'" 
          :alt="playerStore.currentSong?.name" 
          class="song-cover" 
        />
        <div class="song-details">
          <p class="song-name">{{ playerStore.currentSong?.name }}</p>
          <p class="song-artist">{{ playerStore.currentSong?.artist }}</p>
        </div>
      </div>
      
      <div class="controls-section">
        <el-button @click="handlePrevious" :disabled="!playlistStore.hasPrevious" title="上一首" circle text class="control-btn">
          <el-icon><DArrowLeft /></el-icon>
        </el-button>
        <el-button @click="togglePlay" circle type="primary" class="play-btn">
          <el-icon><VideoPause v-if="playerStore.isPlaying" /><VideoPlay v-else /></el-icon>
        </el-button>
        <el-button @click="handleNext" :disabled="!playlistStore.hasNext" title="下一首" circle text class="control-btn">
          <el-icon><DArrowRight /></el-icon>
        </el-button>
      </div>
      
      <div class="progress-section">
        <span class="time">{{ formatTime(playerStore.currentTime) }}</span>
        <el-slider v-model="sliderValue" @input="handleSliderInput" :show-tooltip="false" class="progress-slider" />
        <span class="time">{{ formatTime(playerStore.duration) }}</span>
      </div>
      
      <div class="actions-section">
        <el-button @click="togglePlayMode" :title="playModeText" circle text class="icon-btn">
          <el-icon><Refresh v-if="playerStore.playMode === 'sequence'" /><Sort v-else-if="playerStore.playMode === 'random'" /><RefreshRight v-else /></el-icon>
        </el-button>
        <el-button @click="downloadCurrentSong" title="下载歌曲" circle text class="icon-btn">
          <el-icon><Download /></el-icon>
        </el-button>
        <div class="volume-control">
          <el-button @click="playerStore.toggleMute" title="静音/取消静音" circle text class="volume-icon">
            <el-icon><Mute v-if="playerStore.isMuted" /><Microphone v-else /></el-icon>
          </el-button>
          <el-slider v-model="volumeValue" @input="handleVolumeSliderChange" :show-tooltip="false" class="volume-slider" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { usePlayerStore } from '@/stores/music/player'
import { usePlaylistStore } from '@/stores/music/playlist'
import { Refresh, Sort, RefreshRight, DArrowLeft, DArrowRight, VideoPause, VideoPlay, Download, Mute, Microphone } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()
const playerStore = usePlayerStore()
const playlistStore = usePlaylistStore()
const audioRef = ref(null)

const hideOnPlayerPage = computed(() => {
  return route.path === '/music/player'
})

const sliderValue = ref(0)
const isDragging = ref(false)

watch(() => playerStore.progress, (newProgress) => {
  if (!isDragging.value) {
    sliderValue.value = newProgress * 100
  }
})

const volumeValue = computed({
  get: () => playerStore.volume * 100,
  set: () => {}
})

onMounted(() => {
  if (audioRef.value) {
    playerStore.audioElement = audioRef.value
  }
})

watch(audioRef, (newAudio) => {
  if (newAudio) {
    playerStore.audioElement = newAudio
  }
})

const playModeText = computed(() => {
  const texts = {
    sequence: '顺序播放',
    random: '随机播放',
    single: '单曲循环'
  }
  return texts[playerStore.playMode] || '顺序播放'
})

const handleTimeUpdate = () => {
  if (audioRef.value) {
    playerStore.currentTime = audioRef.value.currentTime
  }
}

const handleLoadedMetadata = () => {
  if (audioRef.value) {
    playerStore.duration = audioRef.value.duration
  }
}

const handleSongEnd = () => {
  if (playerStore.playMode === 'single') {
    audioRef.value.currentTime = 0
    audioRef.value.play()
  } else if (playerStore.playMode === 'random') {
    const randomIndex = Math.floor(Math.random() * playlistStore.playList.length)
    playlistStore.playAtIndex(randomIndex)
  } else {
    handleNext()
  }
}

const togglePlay = () => {
  if (!playerStore.currentSong) return
  playerStore.togglePlay()
}

const handleNext = () => {
  playlistStore.playNext()
  const nextSong = playlistStore.currentSong
  if (nextSong) {
    playerStore.setCurrentSong(nextSong)
    setTimeout(() => playerStore.play(), 100)
  }
}

const handlePrevious = () => {
  playlistStore.playPrevious()
  const prevSong = playlistStore.currentSong
  if (prevSong) {
    playerStore.setCurrentSong(prevSong)
    setTimeout(() => playerStore.play(), 100)
  }
}

const handleSliderInput = (value) => {
  isDragging.value = true
  if (audioRef.value) {
    audioRef.value.currentTime = (value / 100) * playerStore.duration
  }
  setTimeout(() => {
    isDragging.value = false
  }, 100)
}

const togglePlayMode = () => {
  const modes = ['sequence', 'random', 'single']
  const currentIndex = modes.indexOf(playerStore.playMode)
  const nextIndex = (currentIndex + 1) % modes.length
  playerStore.setPlayMode(modes[nextIndex])
}

const downloadCurrentSong = async () => {
  const song = playerStore.currentSong
  if (!song || !song.url) return
  
  try {
    const response = await fetch(song.url)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${song.name} - ${song.artist}.mp3`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('下载失败:', error)
    alert('下载失败，请稍后重试')
  }
}

const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

const handleVolumeSliderChange = (value) => {
  playerStore.setVolume(value / 100)
}

const goToPlayer = () => {
  if (router.currentRoute.value.path !== '/music/player') {
    router.push('/music/player')
  }
}

watch(() => playerStore.currentSong, (newSong) => {
  if (newSong && audioRef.value) {
    audioRef.value.load()
  }
})
</script>

<style scoped>
.global-player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  border-top: 1px solid #f0f0f0;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}

.global-player.hidden {
  display: none;
}

.player-content {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 12px 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.song-info-section {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 200px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.song-info-section:hover {
  opacity: 0.7;
}

.song-cover {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.song-details {
  flex: 1;
  min-width: 0;
}

.song-name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #303133;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-artist {
  margin: 0;
  font-size: 12px;
  color: #909399;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.controls-section {
  display: flex;
  align-items: center;
  gap: 6px;
}

.control-btn {
  width: 36px !important;
  height: 36px !important;
}

.play-btn {
  width: 44px !important;
  height: 44px !important;
}

.progress-section {
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 200px;
}

.time {
  font-size: 11px;
  min-width: 35px;
  color: #909399;
  text-align: center;
}

.progress-slider {
  flex: 1;
}

.actions-section {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon-btn {
  width: 36px !important;
  height: 36px !important;
}

.volume-control {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
  background: #f5f7fa;
  border-radius: 20px;
}

.volume-icon {
  width: 32px !important;
  height: 32px !important;
}

.volume-slider {
  width: 80px;
}

@media (max-width: 1024px) {
  .player-content {
    gap: 15px;
    padding: 10px 15px;
  }
  
  .song-info-section {
    min-width: 150px;
  }
  
  .progress-section {
    min-width: 150px;
  }
}

@media (max-width: 768px) {
  .player-content {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: auto auto;
    gap: 8px;
    padding: 10px 12px;
    align-items: center;
  }
  
  .song-info-section {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    min-width: 0;
  }
  
  .song-cover {
    width: 42px;
    height: 42px;
  }
  
  .song-name {
    font-size: 13px;
    margin-bottom: 3px;
  }
  
  .song-artist {
    font-size: 11px;
  }
  
  .controls-section {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    gap: 6px;
  }
  
  .control-btn {
    width: 32px !important;
    height: 32px !important;
  }
  
  .play-btn {
    width: 40px !important;
    height: 40px !important;
  }
  
  .progress-section {
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    gap: 8px;
  }
  
  .time {
    font-size: 10px;
    min-width: 32px;
  }
  
  .actions-section {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-content: flex-end;
    gap: 4px;
  }
  
  .icon-btn {
    width: 32px !important;
    height: 32px !important;
  }
  
  .volume-control {
    padding: 0 6px;
  }
  
  .volume-icon {
    width: 28px !important;
    height: 28px !important;
  }
  
  .volume-slider {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .player-content {
    gap: 6px;
    padding: 8px 10px;
  }
  
  .song-cover {
    width: 38px;
    height: 38px;
  }
  
  .song-name {
    font-size: 12px;
  }
  
  .song-artist {
    font-size: 10px;
  }
  
  .controls-section {
    gap: 4px;
  }
  
  .control-btn {
    width: 30px !important;
    height: 30px !important;
  }
  
  .play-btn {
    width: 36px !important;
    height: 36px !important;
  }
  
  .progress-section {
    gap: 6px;
  }
  
  .time {
    font-size: 9px;
    min-width: 30px;
  }
  
  .actions-section {
    gap: 2px;
  }
  
  .icon-btn {
    width: 30px !important;
    height: 30px !important;
  }
  
  .volume-icon {
    width: 26px !important;
    height: 26px !important;
  }
  
  .volume-slider {
    width: 50px;
  }
  
  /* 在小屏幕上隐藏下载按钮 */
  .actions-section > .icon-btn:nth-child(2) {
    display: none;
  }
}
</style>