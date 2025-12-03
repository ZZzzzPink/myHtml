<template>
  <div class="music-home">
    <div class="header">
      <div class="title-container">
        <el-icon class="music-icon" :size="42"><Headset /></el-icon>
        <div class="title-text">
          <h1>在线音乐播放器</h1>
          <p class="subtitle">
            <el-tag size="small" effect="plain" round>网易云</el-tag>
            <el-tag size="small" effect="plain" round type="success">酷我</el-tag>
            <el-tag size="small" effect="plain" round type="warning">QQ音乐</el-tag>
          </p>
        </div>
      </div>
    </div>
    
    <!-- 搜索组件 -->
    <SearchBox @search="handleSearch" />
    
    <!-- 快速入口 -->
    <div class="quick-actions">
      <button @click="$router.push('/music/search')" class="action-btn search-btn">
        <span class="icon">🔍</span>
        <span>搜索音乐</span>
      </button>
      <button @click="$router.push('/music/player')" class="action-btn player-btn">
        <span class="icon">🎵</span>
        <span>播放器</span>
      </button>
      <button @click="$router.push('/music/ranking')" class="action-btn ranking-btn">
        <span class="icon">🏆</span>
        <span>排行榜</span>
      </button>
    </div>
    
    <!-- 功能介绍 -->
    <div class="features">
      <div class="feature-card">
        <div class="feature-icon">🎼</div>
        <h3>多平台搜索</h3>
        <p>支持网易云、酷我、QQ音乐三大平台</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🎧</div>
        <h3>在线播放</h3>
        <p>流畅的音乐播放体验</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📱</div>
        <h3>多端适配</h3>
        <p>支持PC和移动端访问</p>
      </div>
    </div>
    
    <!-- 最近播放 -->
    <div v-if="playlistStore.playList.length > 0" class="recent-section">
      <h2>播放列表</h2>
      <div class="song-list">
        <div 
          v-for="(song, index) in playlistStore.playList" 
          :key="song.id || index"
          @click="playSong(song, index)"
          class="song-item"
          :class="{ active: playlistStore.currentIndex === index }"
        >
          <img 
            :src="song.pic || '/favicon.ico'" 
            :alt="song.name" 
            class="song-cover" 
          />
          <div class="song-info">
            <p class="song-name">{{ song.name }}</p>
            <p class="song-artist">{{ song.artist }}</p>
          </div>
          <span v-if="playlistStore.currentIndex === index" class="playing-icon">▶</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import SearchBox from '@/components/music/Search/SearchBox.vue'
import { usePlayerStore } from '@/stores/music/player'
import { usePlaylistStore } from '@/stores/music/playlist'
import { Headset } from '@element-plus/icons-vue'

const router = useRouter()
const playerStore = usePlayerStore()
const playlistStore = usePlaylistStore()

const handleSearch = ({ keyword, platform }) => {
  router.push({
    path: '/music/search',
    query: { keyword, platform }
  })
}

const playSong = (song, index) => {
  playlistStore.playAtIndex(index)
  playerStore.setCurrentSong(song)
  setTimeout(() => {
    playerStore.play()
  }, 100)
  router.push('/music/player')
}
</script>

<style scoped>
.music-home {
  padding: 20px;
  padding-bottom: 100px;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 20px;
  background: linear-gradient(135deg, #409eff 0%, #3a8ee6 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(64, 158, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.header::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: pulse-bg 3s ease-in-out infinite;
}

@keyframes pulse-bg {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, -10px);
  }
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  position: relative;
  z-index: 1;
}

.music-icon {
  color: white;
  animation: rotate-icon 3s linear infinite;
}

@keyframes rotate-icon {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.title-text {
  text-align: left;
}

.header h1 {
  margin: 0 0 8px 0;
  font-size: 32px;
  color: white;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.subtitle {
  margin: 0;
  display: flex;
  gap: 6px;
  align-items: center;
}

.subtitle :deep(.el-tag) {
  background: rgba(255,255,255,0.9);
  border: none;
  font-size: 12px;
}

.quick-actions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.action-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 30px 20px;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: white;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.player-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.ranking-btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.action-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.action-btn .icon {
  font-size: 32px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 40px 0;
}

.feature-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.feature-card h3 {
  margin: 0 0 10px 0;
  font-size: 20px;
  color: #333;
}

.feature-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.recent-section {
  margin-top: 40px;
}

.recent-section h2 {
  margin: 0 0 20px 0;
  font-size: 24px;
  color: #333;
}

.song-list {
  display: grid;
  gap: 12px;
}

.song-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.song-item:hover {
  background: #f8f9fa;
  transform: translateX(4px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.song-item.active {
  background: linear-gradient(90deg, #e8f4fd 0%, #fff 100%);
  border: 1px solid #409eff;
  border-left: 4px solid #409eff;
  box-shadow: 0 2px 12px rgba(64, 158, 255, 0.15);
  transform: scale(1.01);
}

.song-item.active .song-name {
  color: #409eff;
  font-weight: 600;
}

.song-item.active .song-cover {
  border: 2px solid #409eff;
}

.song-cover {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  margin-right: 15px;
  object-fit: cover;
}

.song-info {
  flex: 1;
  min-width: 0;
}

.song-name {
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-artist {
  margin: 0;
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.playing-icon {
  color: #409eff;
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  animation: bounce 1s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

@media (max-width: 768px) {
  .music-home {
    padding: 16px;
    padding-bottom: 80px;
  }

  .header {
    margin-bottom: 30px;
  }

  .header h1 {
    font-size: 28px;
  }

  .subtitle {
    font-size: 14px;
  }
  
  .quick-actions {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 30px 0;
  }

  .action-btn {
    padding: 24px 16px;
    font-size: 15px;
  }

  .action-btn .icon {
    font-size: 28px;
  }
  
  .features {
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 30px 0;
  }

  .feature-card {
    padding: 24px;
  }

  .feature-icon {
    font-size: 42px;
  }

  .feature-card h3 {
    font-size: 18px;
  }

  .recent-section h2 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .song-item {
    padding: 10px;
  }

  .song-cover {
    width: 55px;
    height: 55px;
  }

  .song-name {
    font-size: 15px;
  }

  .song-artist {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .music-home {
    padding: 12px;
    padding-bottom: 70px;
  }

  .header {
    margin-bottom: 24px;
  }

  .header h1 {
    font-size: 24px;
  }

  .subtitle {
    font-size: 13px;
  }

  .quick-actions {
    gap: 12px;
    margin: 24px 0;
  }

  .action-btn {
    padding: 20px 12px;
    font-size: 14px;
  }

  .action-btn .icon {
    font-size: 24px;
  }

  .features {
    gap: 12px;
    margin: 24px 0;
  }

  .feature-card {
    padding: 20px;
  }

  .feature-icon {
    font-size: 36px;
    margin-bottom: 12px;
  }

  .feature-card h3 {
    font-size: 17px;
  }

  .feature-card p {
    font-size: 13px;
  }

  .recent-section h2 {
    font-size: 20px;
  }

  .song-item {
    padding: 8px;
  }

  .song-cover {
    width: 50px;
    height: 50px;
  }

  .song-name {
    font-size: 14px;
  }

  .song-artist {
    font-size: 12px;
  }

  .playing-icon {
    font-size: 18px;
  }
}
</style>