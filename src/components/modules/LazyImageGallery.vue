<template>
  <section class="lazy-gallery-section">
    <h3 class="section-title">🖼️ 图片懒加载</h3>
    <div class="img-box">
      <img 
        v-for="item in 20" 
        :key="item"
        class="img-item" 
        data-src="https://bing.img.run/rand.php"
        src=""
        :alt="'图片' + item"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { useLazyLoad } from '@/composables/useLazyLoad'

const { initLazyLoadObserver } = useLazyLoad('.img-item')

onMounted(() => {
  initLazyLoadObserver()
})
</script>

<style lang="scss" scoped>
.lazy-gallery-section {
  margin: 30px 0;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 8px;
}

.section-title {
  color: var(--theme-color, #409EFF);
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}

.img-box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.img-item {
  width: 70%;
  height: 100px;
  background-color: #f5f7fa;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  object-fit: cover;
  transition: opacity 0.3s ease;
  
  &.loaded {
    opacity: 1;
  }
  
  &:not(.loaded) {
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .img-item {
    width: 90%;
  }
}
</style>