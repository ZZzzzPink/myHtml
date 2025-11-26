<template>
  <div class="video-player-section">
    <h3 class="section-title">🎬 视频播放器</h3>
    
    <!-- 原生视频播放器 -->
    <div class="native-player">
      <h4>原生播放器</h4>
      <video 
        controls 
        playsinline
        class="video-element"
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
      ></video>
    </div>

    <!-- Video.js播放器 -->
    <div class="videojs-player">
      <h4>Video.js播放器</h4>
      <video-player 
        id="playerId" 
        class="vjs-custom-skin" 
        :options="playerOptions" 
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useVideoPlayer } from '@/composables/useVideoPlayer'

const { playerOptions, initPlayer } = useVideoPlayer()

onMounted(() => {
  // 初始化video.js播放器
  initPlayer('playerId', {
    controls: true,
    preload: 'auto',
    autoplay: false,
    fluid: false,
    height: 200,
    width: 300
  })
})
</script>

<style lang="scss" scoped>
.video-player-section {
  margin: 30px 0;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.section-title {
  color: var(--theme-color, #409EFF);
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
}

.native-player,
.videojs-player {
  margin: 20px 0;
  
  h4 {
    color: #666;
    margin-bottom: 10px;
    font-size: 14px;
  }
}

.video-element {
  width: 300px;
  height: 300px;
  background-color: #fff;
}
</style>