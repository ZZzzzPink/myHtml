import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePlayerStore = defineStore('player', () => {
  // 状态
  const currentSong = ref(null)
  const isPlaying = ref(false)
  const currentTime = ref(0)
  const duration = ref(0)
  const volume = ref(1)
  const isMuted = ref(false)
  const playMode = ref('sequence') // sequence, random, single
  const audioElement = ref(null)

  // 计算属性
  const progress = computed(() => {
    return duration.value > 0 ? currentTime.value / duration.value : 0
  })

  const isPaused = computed(() => !isPlaying.value)

  // 方法
  const setCurrentSong = (song) => {
    currentSong.value = song
    currentTime.value = 0
  }

  const play = () => {
    if (audioElement.value) {
      audioElement.value.play()
      isPlaying.value = true
    }
  }

  const pause = () => {
    if (audioElement.value) {
      audioElement.value.pause()
      isPlaying.value = false
    }
  }

  const togglePlay = () => {
    isPlaying.value ? pause() : play()
  }

  const setCurrentTime = (time) => {
    if (audioElement.value) {
      audioElement.value.currentTime = time
      currentTime.value = time
    }
  }

  const setVolume = (vol) => {
    if (audioElement.value) {
      audioElement.value.volume = vol
      volume.value = vol
      isMuted.value = vol === 0
    }
  }

  const toggleMute = () => {
    const newMuted = !isMuted.value
    if (audioElement.value) {
      audioElement.value.muted = newMuted
      isMuted.value = newMuted
    }
  }

  const setPlayMode = (mode) => {
    playMode.value = mode
  }

  return {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    playMode,
    audioElement,
    progress,
    isPaused,
    setCurrentSong,
    play,
    pause,
    togglePlay,
    setCurrentTime,
    setVolume,
    toggleMute,
    setPlayMode
  }
}, {
  persist: {
    key: 'music-player',
    storage: localStorage,
    paths: ['volume', 'isMuted', 'playMode']
  }
})