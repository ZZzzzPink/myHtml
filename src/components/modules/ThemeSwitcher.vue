<template>
  <section class="theme-switcher-section">
    <h3 class="section-title">🎨 主题切换</h3>
    <div class="theme-content">
      <div class="color-picker-wrapper">
        <color-picker 
          v-model:pureColor="pureColor" 
          @pureColorChange="handleThemeChange" 
        />
      </div>
      <div class="theme-info">
        <p>当前主题颜色: <span class="color-value">{{ pureColor || '默认' }}</span></p>
        <p>当前计数: <span class="count-value">{{ count }}</span></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'
import { useTheme } from '@/composables/useTheme'

const { count } = storeToRefs(useCounterStore())
const { pureColor, handleThemeChange, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<style lang="scss" scoped>
.theme-switcher-section {
  margin: 30px 0;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.section-title {
  color: var(--theme-color, #409EFF);
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
}

.theme-content {
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
}

.color-picker-wrapper {
  flex-shrink: 0;
}

.theme-info {
  flex: 1;
  
  p {
    margin: 10px 0;
    font-size: 16px;
    color: #606266;
  }
  
  .color-value {
    display: inline-block;
    padding: 4px 12px;
    background-color: var(--theme-color, #409EFF);
    color: white;
    border-radius: 4px;
    font-weight: bold;
  }
  
  .count-value {
    display: inline-block;
    padding: 4px 12px;
    background-color: #67C23A;
    color: white;
    border-radius: 4px;
    font-weight: bold;
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .theme-content {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>