<template>
  <section class="tree-selector-section">
    <h3 class="section-title">🌲 树形选择器</h3>
    <div class="tree-content">
      <el-tree-select 
        ref="elTree" 
        v-model="value" 
        :data="treeData"
        check-strictly 
        :render-after-expand="false"
        :props="{ value: 'label', label: 'label' }" 
        node-key="value"
        @node-click="handleTreeNodeClick"
        placeholder="请选择节点"
        class="tree-select"
      />
      <el-button 
        type="success" 
        @click="handleDownload"
        class="download-btn"
      >
        下载测试
      </el-button>
    </div>
    <div v-if="value" class="selected-info">
      已选择: <span class="selected-value">{{ value }}</span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { treeData } from '@/constants/mockData'

const value = ref(null)
const elTree = ref(null)

/**
 * 处理树节点点击事件
 */
const handleTreeNodeClick = () => {
  setTimeout(() => {
    const selectedKey = elTree.value.getCurrentKey()
    console.log('选中的节点:', selectedKey)
  }, 100)
}

/**
 * 下载文件
 */
const handleDownload = () => {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = 'https://down.vmaxcloud.com.cn/apk/%E6%B5%8B%E8%AF%95223.zip'
  link.download = '测试223.zip'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<style lang="scss" scoped>
.tree-selector-section {
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

.tree-content {
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
}

.tree-select {
  min-width: 240px;
  flex: 1;
}

.download-btn {
  flex-shrink: 0;
}

.selected-info {
  margin-top: 15px;
  padding: 10px;
  background-color: #f0f9ff;
  border-left: 4px solid #409EFF;
  border-radius: 4px;
  
  .selected-value {
    color: #409EFF;
    font-weight: bold;
  }
}
</style>