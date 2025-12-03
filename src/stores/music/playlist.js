import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePlaylistStore = defineStore('playlist', () => {
  // 状态
  const playList = ref([])
  const currentIndex = ref(-1)
  const favoriteList = ref([])
  const searchHistory = ref([])

  // 计算属性
  const currentSong = computed(() => {
    return currentIndex.value >= 0 ? playList.value[currentIndex.value] : null
  })

  const hasNext = computed(() => {
    return currentIndex.value < playList.value.length - 1
  })

  const hasPrevious = computed(() => {
    return currentIndex.value > 0
  })

  // 方法
  const addToPlaylist = (songs) => {
    const songsArray = Array.isArray(songs) ? songs : [songs]
    playList.value.push(...songsArray)
  }

  const removeFromPlaylist = (index) => {
    if (index >= 0 && index < playList.value.length) {
      playList.value.splice(index, 1)
      if (index < currentIndex.value) {
        currentIndex.value--
      }
    }
  }

  const clearPlaylist = () => {
    playList.value = []
    currentIndex.value = -1
  }

  const playAtIndex = (index) => {
    if (index >= 0 && index < playList.value.length) {
      currentIndex.value = index
    }
  }

  const playNext = () => {
    if (hasNext.value) {
      currentIndex.value++
    }
  }

  const playPrevious = () => {
    if (hasPrevious.value) {
      currentIndex.value--
    }
  }

  const addToFavorites = (song) => {
    if (!favoriteList.value.find(s => s.id === song.id)) {
      favoriteList.value.push(song)
    }
  }

  const removeFromFavorites = (songId) => {
    const index = favoriteList.value.findIndex(s => s.id === songId)
    if (index >= 0) {
      favoriteList.value.splice(index, 1)
    }
  }

  const addToSearchHistory = (keyword) => {
    if (keyword && 
        typeof keyword === 'string' && 
        keyword.trim().length > 0 && 
        !searchHistory.value.includes(keyword.trim())) {
      const trimmedKeyword = keyword.trim()
      searchHistory.value.unshift(trimmedKeyword)
      if (searchHistory.value.length > 20) {
        searchHistory.value = searchHistory.value.slice(0, 20)
      }
    }
  }

  const clearSearchHistory = () => {
    searchHistory.value = []
  }

  return {
    playList,
    currentIndex,
    favoriteList,
    searchHistory,
    currentSong,
    hasNext,
    hasPrevious,
    addToPlaylist,
    removeFromPlaylist,
    clearPlaylist,
    playAtIndex,
    playNext,
    playPrevious,
    addToFavorites,
    removeFromFavorites,
    addToSearchHistory,
    clearSearchHistory
  }
}, {
  persist: {
    key: 'music-playlist',
    storage: localStorage,
    paths: ['favoriteList', 'searchHistory']
  }
})