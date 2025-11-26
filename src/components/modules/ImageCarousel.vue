<template>
  <section class="image-carousel-section">
    <h3 class="section-title">🖼️ 图片轮播</h3>
    <el-carousel 
      :interval="4000" 
      type="card" 
      height="400px"
      arrow="always"
    >
      <el-carousel-item 
        v-for="(item, index) in images" 
        :key="index"
      >
        <img 
          :src="item.src" 
          :alt="item.alt"
          class="carousel-image"
          @error="handleImageError"
        />
        <div class="image-caption">{{ item.alt }}</div>
      </el-carousel-item>
    </el-carousel>
  </section>
</template>

<script setup>
import { carouselImages } from '@/constants/mockData'

const images = carouselImages

/**
 * 处理图片加载错误
 */
const handleImageError = (e) => {
  console.error('图片加载失败:', e.target.src)
  e.target.src = 'https://via.placeholder.com/800x400?text=图片加载失败'
}
</script>

<style lang="scss" scoped>
.image-carousel-section {
  margin: 30px 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
}

.section-title {
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
  font-size: 14px;
}

:deep(.el-carousel__item) {
  overflow: hidden;
  border-radius: 8px;
  
  &:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  &:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>