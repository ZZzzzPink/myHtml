<template>
  <section class="file-selector-section">
    <h3 class="section-title">📁 文件操作</h3>
    <div class="file-content">
      <el-button type="primary" @click="handleChooseFiles">
        选择文件夹
      </el-button>
      
      <div v-if="filesContent !== ''" class="file-display">
        <h4>文件内容:</h4>
        <pre class="file-text">{{ filesContent }}</pre>
      </div>
      
      <div v-if="previewFile" class="file-preview">
        <h4>文件预览:</h4>
        <vue-office-docx :src="previewFile" class="docx-preview" />
        <iframe 
          v-if="previewFile" 
          :src="previewFile" 
          class="iframe-preview"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import VueOfficeDocx from '@vue-office/docx'
import { useFileSystem } from '@/composables/useFileSystem'

const { filesContent, previewFile, handleChooseFiles } = useFileSystem()
</script>

<style lang="scss" scoped>
.file-selector-section {
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

.file-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.file-display {
  h4 {
    color: #606266;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .file-text {
    padding: 15px;
    background-color: #f5f7fa;
    border-radius: 4px;
    max-height: 300px;
    overflow-y: auto;
    font-size: 12px;
    line-height: 1.5;
  }
}

.file-preview {
  h4 {
    color: #606266;
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .docx-preview {
    height: 500px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  
  .iframe-preview {
    width: 300px;
    height: 300px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    margin-top: 10px;
  }
}
</style>