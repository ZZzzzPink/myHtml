<template>
  <div class="headerBox">
    <div class="flex_box">
      <div class="logoBox">
        <img class="logo" src="https://pinia.vuejs.org/logo.svg" width="125" height="125" />

        <div class="text">
          <h1>Hi hello !</h1>
          <h2>这是我搭建的服务器项目</h2>
          <h2>目前功能正在完善中</h2>
        </div>
      </div>

      <div class="videoBox">
        <video class="videoPlay"
          src="https://assets.mixkit.co/videos/preview/mixkit-seagulls-on-the-boardwalk-with-the-sea-in-the-background-19179-large.mp4"
          autoplay muted playsinline loop></video>
      </div>
    </div>


    <div class="two_box">
      ww
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';


</script>

<style lang="scss" scoped>
.headerBox {
  height: 100%;
  // padding-bottom: 5px;  
  box-sizing: border-box;
  background-image: url('https://api.dujin.org/pic/ghibli/qyqx');
  background-attachment:fixed;
  .flex_box {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;


    .logoBox {
      display: flex;
      align-items: center;
      
      .logo {
        background-color:yellow;
        background: inherit;
      }
    }


    .videoPlay {
      width: 600px;
      height: 600px;
    }
  }



  .two_box{
    height: 100vh;
    
  }
}
</style>