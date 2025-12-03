<template>
  <div class="music-search">
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
          <el-icon class="title-icon"><Search /></el-icon>
          搜索音乐
        </h2>
      </div>
      <div class="placeholder"></div>
    </div>

    <SearchBox @search="handleSearch" />

    <div v-if="loading" class="loading">
      <div class="spinner"></div>
      <p>搜索中...</p>
    </div>

    <div v-else-if="searchResults.length > 0" class="results">
      <h3>搜索结果 ({{ searchResults.length }})</h3>
      <div class="song-list">
        <div v-for="song in searchResults" :key="song.id" @click="playSong(song)" class="song-item">
          <img :src="song.pic || '/favicon.ico'" :alt="song.name" class="song-cover" />
          <div class="song-info">
            <p class="song-name">{{ song.name }}</p>
            <p class="song-artist">{{ song.artist }}</p>
            <p class="song-platform">{{ getPlatformName(song.source) }}</p>
          </div>
          <button @click.stop="addToPlaylist(song)" class="add-btn">+</button>
        </div>
      </div>
    </div>

    <div v-else-if="searched && !loading" class="no-results">
      <p>😔 没有找到相关歌曲</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ArrowLeft, Search } from '@element-plus/icons-vue'
import SearchBox from '@/components/music/Search/SearchBox.vue'
import { searchApi } from '@/api/music/search'
import { playerApi } from '@/api/music/player'
import { usePlayerStore } from '@/stores/music/player'
import { usePlaylistStore } from '@/stores/music/playlist'

const router = useRouter()
const route = useRoute()
const playerStore = usePlayerStore()
const playlistStore = usePlaylistStore()

const searchResults = ref([])
const loading = ref(false)
const searched = ref(false)

const handleSearch = async ({ keyword, platform }) => {
  try {
    loading.value = true
    searched.value = true
    searchResults.value = []

    const response = await searchApi.search(platform, keyword)
    response.data.results.forEach(async (song) => {
      song.source = platform
    })
    searchResults.value = response.data.results || []
  } catch (error) {
    console.error('搜索失败:', error)
  } finally {
    loading.value = false
  }
}

const playSong = async (song) => {
  try {
    const urlResponse = await playerApi.getMusicUrl(song.source, song.id)
    const songWithUrl = { ...song, url: urlResponse.data }

    playerStore.setCurrentSong(songWithUrl)
    playlistStore.addToPlaylist([songWithUrl])
    playlistStore.playAtIndex(playlistStore.playList.length - 1)

    setTimeout(() => playerStore.play(), 100)
    router.push('/music/player')
  } catch (error) {
    console.error('播放失败:', error)
  }
}

const addToPlaylist = async (song) => {
  try {
    const urlResponse = await playerApi.getMusicUrl(song.source, song.id)
    const songWithUrl = { ...song, url: urlResponse.data }
    playlistStore.addToPlaylist([songWithUrl])
  } catch (error) {
    console.error('添加失败:', error)
  }
}

const getPlatformName = (source) => {
  const platforms = {
    netease: '网易云',
    kuwo: '酷我',
    qq: 'QQ音乐'
  }
  return platforms[source] || source
}

if (route.query.keyword && route.query.platform) {
  handleSearch({
    keyword: route.query.keyword,
    platform: route.query.platform
  })
}
</script>

<style scoped>
.music-search {
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

.loading {
  text-align: center;
  padding: 60px 20px;
}

.spinner {
  width: 50px;
  height: 50px;
  margin: 0 auto 20px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.results h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color: #333;
}

.song-list {
  width: 100%;
}

.song-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
}

.song-item:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
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
  max-width: calc(100% - 120px);
}

.song-name {
  margin: 0 0 5px 0;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.song-artist {
  margin: 0 0 3px 0;
  font-size: 14px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.song-platform {
  margin: 0;
  font-size: 12px;
  color: #999;
}

.add-btn {
  width: 36px;
  height: 36px;
  border: 2px solid #667eea;
  background: white;
  border-radius: 50%;
  color: #667eea;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s;
}

.add-btn:hover {
  background: #667eea;
  color: white;
}

.no-results {
  text-align: center;
  padding: 60px 20px;
  color: #999;
  font-size: 16px;
}

@media (max-width: 768px) {
  .music-search {
    padding: 16px;
    padding-bottom: 80px;
    overflow-x: hidden;
  }

  .song-info {
    max-width: calc(100% - 100px);
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

  .loading {
    padding: 50px 16px;
  }

  .spinner {
    width: 45px;
    height: 45px;
  }

  .results h3 {
    font-size: 18px;
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

  .song-platform {
    font-size: 11px;
  }

  .add-btn {
    width: 34px;
    height: 34px;
    font-size: 18px;
  }

  .no-results {
    padding: 50px 16px;
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .music-search {
    padding: 12px;
    padding-bottom: 70px;
    overflow-x: hidden;
  }

  .song-info {
    max-width: calc(100% - 90px);
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

  .loading {
    padding: 40px 12px;
  }

  .spinner {
    width: 40px;
    height: 40px;
  }

  .results h3 {
    font-size: 17px;
  }

  .song-item {
    padding: 8px;
  }

  .song-cover {
    width: 50px;
    height: 50px;
    margin-right: 12px;
  }

  .song-name {
    font-size: 14px;
  }

  .song-artist {
    font-size: 12px;
  }

  .song-platform {
    font-size: 10px;
  }

  .add-btn {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }

  .no-results {
    padding: 40px 12px;
    font-size: 14px;
  }
}
</style>