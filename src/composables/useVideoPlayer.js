import { ref, onUnmounted } from 'vue'
import videojs from 'video.js'

/**
 * 视频播放器组合式函数
 * @returns {Object} { playerOptions, initPlayer, destroyPlayer }
 */
export function useVideoPlayer() {
  let player = null

  const playerOptions = ref({
    playbackRates: [0.5, 1.0, 1.5, 2.0],
    autoplay: false,
    muted: true,
    loop: false,
    controls: true,
    preload: 'auto',
    language: 'zh-CN',
    aspectRatio: '16:9',
    fluid: true,
    sources: [{
      type: 'video/mp4',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4'
    }],
    poster: '',
    notSupportedMessage: '此视频暂无法播放,请稍后再试',
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: true,
      fullscreenToggle: true
    }
  })

  /**
   * 初始化播放器
   * @param {string} elementId - 视频元素ID
   * @param {Object} options - 配置选项
   */
  const initPlayer = (elementId, options = {}) => {
    try {
      player = videojs(elementId, {
        ...playerOptions.value,
        ...options
      })

      console.log('视频播放器初始化成功')
      return player
    } catch (error) {
      console.error('视频播放器初始化失败:', error)
      return null
    }
  }

  /**
   * 销毁播放器
   */
  const destroyPlayer = () => {
    if (player) {
      player.dispose()
      player = null
    }
  }

  onUnmounted(() => {
    destroyPlayer()
  })

  return {
    playerOptions,
    initPlayer,
    destroyPlayer
  }
}