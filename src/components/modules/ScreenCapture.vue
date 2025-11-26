<template>
  <div class="screen-capture-module">
    <el-button 
      type="primary" 
      :loading="isCapturing"
      @click="handleCapture"
    >
      {{ isCapturing ? '生成中...' : '截取.scr所有内容为图片' }}
    </el-button>
    
    <div 
      class="scr-container" 
      ref="scrContainer" 
      @scroll="onScroll"
    >
      <div class="scr-content">
        <div v-for="item in 100" :key="item" class="scr-item">
          <div class="item-text">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScreenCapture } from '@/composables/useScreenCapture'

const scrContainer = ref(null)
const { isCapturing, captureElement } = useScreenCapture()

/**
 * 处理截图
 */
const handleCapture = () => {
  if (scrContainer.value) {
    captureElement(scrContainer.value, {
      backgroundColor: '#000'
    })
  }
}

/**
 * 滚动事件处理
 */
const onScroll = (e) => {
  console.log('滚动事件:', e.target.scrollTop)
}
</script>

<style lang="scss" scoped>
.screen-capture-module {
  margin: 20px 0;
}

.scr-container {
  height: 10vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 10px;
}

.scr-content {
  min-height: 100vh;
  padding: 10px;
}

.scr-item {
  padding: 5px 0;
}

.item-text {
  color: #36D;
  font-size: 16px;
}
</style>