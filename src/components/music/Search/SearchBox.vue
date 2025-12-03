<template>
  <div class="search-box">
    <el-input v-model="searchKeyword" @keyup.enter="handleSearch" @input="handleInput" placeholder="搜索歌曲、歌手（至少2个字符）"
      size="large" class="search-input">
      <template #append>
        <el-button @click="handleSearch" :loading="loading" type="primary" :icon="Search">
          搜索
        </el-button>
      </template>
    </el-input>

    <!-- 平台选择 -->
    <div class="platform-selector">
      <span class="platform-label">选择平台</span>
      <el-radio-group v-model="selectedPlatform" size="default">
        <el-radio-button @click="tabSelect()" label="netease">
          <el-icon>
            <Headset />
          </el-icon>
          网易云
        </el-radio-button>
        <el-radio-button @click="tabSelect()" label="kuwo">
          <el-icon>
            <Headset />
          </el-icon>
          酷我
        </el-radio-button>
        <el-radio-button @click="tabSelect()" label="qq">
          <el-icon>
            <Headset />
          </el-icon>
          QQ音乐
        </el-radio-button>
      </el-radio-group>
    </div>

    <!-- 搜索历史 -->
    <div v-if="showHistory && playlistStore.searchHistory.length > 0" class="search-history">
      <div class="history-header">
        <span class="history-title">
          <el-icon>
            <Clock />
          </el-icon>
          搜索历史
        </span>
        <el-button @click="clearHistory" size="small" text :icon="Delete">清除</el-button>
      </div>
      <div class="history-tags">
        <el-tag v-for="keyword in playlistStore.searchHistory" :key="keyword" @click="selectHistory(keyword)"
          class="history-tag" effect="plain" round>
          {{ keyword }}
        </el-tag>
      </div>
    </div>

    <!-- 错误提示 -->
    <el-alert v-if="error" :title="error" type="error" :closable="false" show-icon class="error-alert" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePlaylistStore } from '@/stores/music/playlist'
import { Search, Headset, Clock, Delete } from '@element-plus/icons-vue'

const emit = defineEmits(['search'])

const playlistStore = usePlaylistStore()

const searchKeyword = ref('')
const selectedPlatform = ref('netease')
const showHistory = ref(true)
const error = ref('')
const loading = ref(false)

const handleInput = () => {
  error.value = ''
  showHistory.value = searchKeyword.value.length === 0
}

const handleSearch = async () => {
  try {
    error.value = ''
    loading.value = true

    // 验证关键词
    if (!searchKeyword.value.trim()) {
      error.value = '请输入搜索关键词'
      return
    }

    if (searchKeyword.value.trim().length < 2) {
      error.value = '搜索关键词至少需要2个字符'
      return
    }

    // 添加到搜索历史
    playlistStore.addToSearchHistory(searchKeyword.value)

    // 触发搜索事件
    emit('search', {
      keyword: searchKeyword.value.trim(),
      platform: selectedPlatform.value
    })
    showHistory.value = false

  } catch (err) {
    error.value = err.message || '搜索失败'
  } finally {
    loading.value = false
  }
}

const tabSelect = () => {
  if (!searchKeyword.value.trim()) {
    return
  }
  handleSearch()
}

const selectHistory = (keyword) => {
  searchKeyword.value = keyword
  handleSearch()
}

const clearHistory = () => {
  playlistStore.clearSearchHistory()
}
</script>

<style scoped>
.search-box {
  margin-bottom: 24px;
}

.search-input {
  margin-bottom: 16px;
}

.platform-selector {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;
  background: #f5f7fa;
  border-radius: 8px;
  flex-wrap: nowrap;
}

.platform-label {
  font-size: 14px;
  color: #606266;
  font-weight: 500;
  white-space: nowrap;
}

.search-history {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e4e7ed;
  margin-bottom: 16px;
}

.history-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.history-title {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #606266;
  font-weight: 500;
}

.history-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.history-tag {
  cursor: pointer;
  transition: all 0.3s;
}

.history-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(64, 158, 255, 0.2);
}

.error-alert {
  margin-top: 12px;
}

@media (max-width: 768px) {
  .platform-selector {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .platform-label {
    margin-bottom: 4px;
  }

  :deep(.el-radio-group) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

}
</style>