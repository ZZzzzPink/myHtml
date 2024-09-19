<template>
  <div class="headerBox">
    <div class="flex_box">
      <div class="logoBox">
        <img class="logo" src="https://pinia.vuejs.org/logo.svg" width="125" height="125" />

        <div class="text">
          <h1>Hi hello !</h1>
          <h2>这是我搭建的服务器项目  {{ ' ' }}</h2>
          <h2>目前功能正在完善中</h2>
        </div>
      </div>
      <video v-if="videoUrl !== ''" preload id="video" class="video_q" playsinline autoplay :src="videoUrl"
        tabindex="-1" muted="muted"></video>
      <div class="videoBox">
        <video class="videoPlay"
          src="../assets/video/mixkit-foamy-wave-surface-on-a-shoreline-from-above-34108-hd-ready.mp4" autoplay muted
          playsinline loop></video>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';

const videoUrlArr = reactive(['https://cdn.pixabay.com/video/2020/09/15/49981-459802291_large.mp4', 'https://cdn.pixabay.com/video/2018/06/09/16685-274413239_large.mp4', 'https://cdn.pixabay.com/video/2016/11/21/6514-192584879_large.mp4', 'https://cdn.pixabay.com/video/2024/03/30/206272_large.mp4', 'https://cdn.pixabay.com/video/2023/06/30/169443-841382814_large.mp4', 'https://cdn.pixabay.com/video/2021/08/29/86746-594416971_large.mp4'])
const videoUrl = ref(videoUrlArr[0])



onMounted(function () {
  let video = document.getElementById('video')

  // 15、ended：播放结束
  video.addEventListener('ended', function (e) {
    videoUrl.value = ''
    videoUrl.value = videoUrlArr[Math.floor(Math.random() * 5)]
  })

})

</script>

<style lang="scss" scoped>
.headerBox {
  height: 100%;
  // padding-bottom: 5px;  
  box-sizing: border-box;
  // background-image: url('https://api.dujin.org/pic/ghibli/qyqx');
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // 禁止选择文字
  user-select: none;
  // 图片禁止拖动
  -webkit-user-drag: none;

  .flex_box {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;


    .logoBox {
      display: flex;
      align-items: center;

      .text {
        background: linear-gradient(to right, #00ff00,#00f2ff, #007bff);
        /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
        -webkit-background-clip: text;
        /*将设置的背景颜色限制在文字中*/
        -webkit-text-fill-color: transparent;
        /*给文字设置成透明*/
        animation: ani 3s infinite ease-in-out;
      }

      @keyframes ani {
      0% {
        background-position: 250px 200px;
      }

      100% {
        background-position: 850px 400px;

      }
    }

      .logo {
        background-color: yellow;
        background: inherit;
      }
    }


    .videoPlay {
      width: 600px;
      height: 600px;
    }
  }
}
</style>