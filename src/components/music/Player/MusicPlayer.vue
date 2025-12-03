<template>
    <div class="music-player">
        <div class="player-info">
            <img :src="playerStore.currentSong?.pic || '/favicon.ico'" :alt="playerStore.currentSong?.name || '暂无歌曲'"
                class="album-cover" />
            <div class="song-info">
                <h3>{{ playerStore.currentSong?.name || '暂无播放' }}</h3>
                <p>{{ playerStore.currentSong?.artist || '未知歌手' }}</p>
            </div>
        </div>

        <div class="player-controls">
            <el-button @click="togglePlayMode" circle :title="playModeText" class="control-btn">
                <el-icon>
                    <Refresh v-if="playerStore.playMode === 'sequence'" />
                    <Sort v-else-if="playerStore.playMode === 'random'" />
                    <RefreshRight v-else />
                </el-icon>
            </el-button>
            <el-button @click="handlePrevious" circle :disabled="!playlistStore.hasPrevious" title="上一首"
                class="control-btn">
                <el-icon>
                    <DArrowLeft />
                </el-icon>
            </el-button>
            <el-button @click="togglePlay" circle class="play-btn" type="primary">
                <el-icon :size="20">
                    <VideoPause v-if="playerStore.isPlaying" />
                    <VideoPlay v-else />
                </el-icon>
            </el-button>
            <el-button @click="handleNext" circle :disabled="!playlistStore.hasNext" title="下一首" class="control-btn">
                <el-icon>
                    <DArrowRight />
                </el-icon>
            </el-button>
            <el-button @click="downloadCurrentSong" circle :disabled="!playerStore.currentSong" title="下载"
                class="control-btn">
                <el-icon>
                    <Download />
                </el-icon>
            </el-button>
        </div>

        <div class="progress-container">
            <span class="time">{{ formatTime(playerStore.currentTime) }}</span>
            <el-slider v-model="sliderValue" @input="handleSliderInput" :show-tooltip="false" class="progress-slider" />
            <span class="time">{{ formatTime(playerStore.duration) }}</span>
        </div>

        <div class="volume-control">
            <el-button @click="playerStore.toggleMute" circle title="静音/取消静音" class="volume-btn" text>
                <el-icon>
                    <Mute v-if="playerStore.isMuted" />
                    <Microphone v-else />
                </el-icon>
            </el-button>
            <el-slider v-model="volumeValue" @input="handleVolumeSliderChange" :show-tooltip="false"
                class="volume-slider" />
        </div>
    </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { usePlayerStore } from '@/stores/music/player'
import { usePlaylistStore } from '@/stores/music/playlist'
import { Refresh, Sort, RefreshRight, DArrowLeft, DArrowRight, VideoPause, VideoPlay, Download, Mute, Microphone } from '@element-plus/icons-vue'

const emit = defineEmits(['currentTimeUpdate'])
const playerStore = usePlayerStore()
const playlistStore = usePlaylistStore()

const sliderValue = ref(0)

watch(() => playerStore.progress, (newProgress) => {
    if (!isDragging.value) {
        sliderValue.value = newProgress * 100
    }
})

const isDragging = ref(false)

const volumeValue = computed({
    get: () => playerStore.volume * 100,
    set: () => { }
})

const playModeIcon = computed(() => {
    const icons = {
        sequence: '🔁',
        random: '🔀',
        single: '🔂'
    }
    return icons[playerStore.playMode] || '🔁'
})

const playModeText = computed(() => {
    const texts = {
        sequence: '顺序播放',
        random: '随机播放',
        single: '单曲循环'
    }
    return texts[playerStore.playMode] || '顺序播放'
})

// 监听播放器时间更新，用于歌词同步
watch(() => playerStore.currentTime, (newTime) => {
    emit('currentTimeUpdate', newTime)
})

const togglePlay = () => {
    if (!playerStore.currentSong) {
        console.warn('没有可播放的歌曲')
        return
    }
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
    playerStore.setCurrentTime((value / 100) * playerStore.duration)
    setTimeout(() => {
        isDragging.value = false
    }, 100)
}

const handleVolumeSliderChange = (value) => {
    playerStore.setVolume(value / 100)
}

const formatTime = (seconds) => {
    if (!seconds || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
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

// 不需要监听歌曲变化，GlobalPlayer 会处理
</script>

<style scoped>
.music-player {
    box-sizing: border-box;
    width: 100%;
    padding: 24px;
    background: #fff;
    border-radius: 16px;
    margin: 0 auto;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.player-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.album-cover {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    margin-right: 16px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.song-info h3 {
    margin: 0 0 6px 0;
    font-size: 18px;
    font-weight: 600;
    color: #303133;
}

.song-info p {
    margin: 0;
    font-size: 14px;
    color: #909399;
}

.player-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
}

.control-btn {
    width: 40px;
    height: 40px;
}

.play-btn {
    width: 52px;
    height: 52px;
}

.progress-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
}

.time {
    font-size: 12px;
    min-width: 40px;
    opacity: 0.9;
}

.progress-bar {
    flex: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: white;
    border-radius: 3px;
    transition: width 0.1s;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.volume-control {
    display: flex;
    align-items: center;
    gap: 8px;
}

.volume-btn {
    width: 32px;
    height: 32px;
}

.volume-slider {
    flex: 1;
}

@media (max-width: 768px) {
    .music-player {
        padding: 16px;
        max-width: 100%;
    }

    .player-info {
        margin-bottom: 16px;
    }

    .album-cover {
        width: 70px;
        height: 70px;
    }

    .song-info h3 {
        font-size: 16px;
    }

    .song-info p {
        font-size: 13px;
    }

    .player-controls {
        gap: 10px;
    }

    .control-btn {
        width: 36px;
        height: 36px;
    }

    .play-btn {
        width: 50px;
        height: 50px;
    }

    .control-btn svg {
        width: 18px;
        height: 18px;
    }

    .play-btn svg {
        width: 22px;
        height: 22px;
    }

    .progress-container {
        gap: 8px;
        margin-bottom: 12px;
    }

    .time {
        font-size: 11px;
        min-width: 35px;
    }

    .volume-control {
        gap: 8px;
    }

    .volume-btn {
        padding: 6px 10px;
        font-size: 16px;
    }
}

@media (max-width: 480px) {
    .music-player {
        padding: 12px;
    }

    .player-info {
        margin-bottom: 14px;
    }

    .album-cover {
        width: 60px;
        height: 60px;
        margin-right: 12px;
    }

    .song-info h3 {
        font-size: 15px;
    }

    .song-info p {
        font-size: 12px;
    }

    .player-controls {
        gap: 8px;
    }

    .control-btn {
        width: 34px;
        height: 34px;
    }

    .play-btn {
        width: 46px;
        height: 46px;
    }

    .control-btn svg {
        width: 16px;
        height: 16px;
    }

    .play-btn svg {
        width: 20px;
        height: 20px;
    }

    .progress-container {
        gap: 6px;
    }

    .progress-bar {
        height: 5px;
    }

    .time {
        font-size: 10px;
        min-width: 32px;
    }
}
</style>