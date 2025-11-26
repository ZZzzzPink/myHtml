
# 🚀 index.vue 重构实施指南 - 完整版

## 📑 目录
1. [重构前准备](#重构前准备)
2. [详细实施步骤](#详细实施步骤)
3. [代码示例](#代码示例)
4. [CSS优化方案](#css优化方案)
5. [测试验证清单](#测试验证清单)
6. [注意事项](#注意事项)

---

## 🔍 重构前准备

### 1. 创建备份
```bash
# 在项目根目录执行
cp src/views/index.vue src/views/index.vue.backup
```

### 2. 创建新目录结构
```bash
mkdir -p src/composables
mkdir -p src/constants
mkdir -p src/components/modules
mkdir -p src/components/ui
```

### 3. 确认依赖包
确保以下包已安装:
- `html2canvas` - 截图功能
- `@galacean/effects` - 动画效果
- `video.js` - 视频播放
- `@vue-office/docx` - 文档预览

---

## 📝 详细实施步骤

### Step 1: 创建 Composables (可复用逻辑层)

#### 文件 1: `src/composables/useTheme.js`
```javascript
import { ref } from 'vue'
import { PiniaTest } from '@/stores/PiniaTest'

/**
 * 主题管理组合式函数
 * @returns {Object} { pureColor, handleThemeChange, initTheme }
 */
export function useTheme() {
  const Store = PiniaTest()
  const pureColor = ref(null)

  /**
   * 切换主题颜色
   * @param {string} color - 颜色值
   */
  const handleThemeChange = (color) => {
    document.documentElement.style.setProperty('--theme-color', color || pureColor.value)
    Store.themeColor = color || pureColor.value
  }

  /**
   * 初始化主题
   */
  const initTheme = () => {
    pureColor.value = Store.themeColor
    if (pureColor.value) {
      handleThemeChange(pureColor.value)
    }
  }

  return {
    pureColor,
    handleThemeChange,
    initTheme
  }
}
```

#### 文件 2: `src/composables/useLazyLoad.js`
```javascript
import { onMounted, onUnmounted } from 'vue'

/**
 * 图片懒加载组合式函数
 * @param {string} selector - 图片选择器,默认 '.img-item'
 * @returns {Object} { initLazyLoadObserver }
 */
export function useLazyLoad(selector = '.img-item') {
  let observer = null

  /**
   * 初始化懒加载观察者
   */
  const initLazyLoadObserver = () => {
    const images = document.querySelectorAll(selector)
    
    if (!images.length) {
      console.warn(`未找到匹配的图片元素: ${selector}`)
      return
    }

    observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            const src = img.dataset.src
            
            if (src) {
              img.src = src
              img.classList.add('loaded')
            }
            
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '50px', // 提前50px开始加载
        threshold: 0.01
      }
    )

    images.forEach(item => observer.observe(item))
  }

  /**
   * 清理观察者
   */
  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    initLazyLoadObserver,
    cleanup
  }
}
```

#### 文件 3: `src/composables/useFileSystem.js`
```javascript
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

/**
 * 文件系统操作组合式函数
 * @returns {Object} { filesContent, previewFile, handleChooseFiles }
 */
export function useFileSystem() {
  const filesContent = ref('')
  const previewFile = ref(null)

  /**
   * 选择文件夹并读取内容
   */
  const handleChooseFiles = async () => {
    // 检查浏览器兼容性
    if (!window.showDirectoryPicker) {
      ElMessage.error('当前浏览器不支持目录选择功能')
      return
    }

    try {
      const handle = await window.showDirectoryPicker()
      await openFiles(handle)

      // 查找第一个文件
      let fileHandle = null
      for (const child of handle.children) {
        if (child.kind === 'file') {
          fileHandle = child
          break
        }
      }

      if (!fileHandle) {
        ElMessage.warning('未找到任何文件')
        return
      }

      const file = await fileHandle.getFile()

      // 仅支持文本文件
      if (!file.type.startsWith('text/')) {
        ElMessage.warning('仅支持文本文件')
        return
      }

      // 读取文件内容
      const reader = new FileReader()
      reader.readAsText(file)

      reader.onload = (e) => {
        filesContent.value = e.target.result
        ElMessage.success('文件读取成功')
      }

      reader.onerror = (e) => {
        console.error('文件读取失败:', e.target.error)
        ElMessage.error('文件读取失败,请检查文件格式')
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        ElMessage.error('目录选择失败: ' + error.message)
      }
    }
  }

  /**
   * 递归打开文件夹
   * @param {FileSystemHandle} filePaths - 文件路径句柄
   */
  const openFiles = async (filePaths) => {
    if (!filePaths.kind || filePaths.kind === 'file') {
      return
    }

    const entries = await filePaths.values()
    filePaths.children = []

    for await (const entry of entries) {
      filePaths.children.push(entry)
      await openFiles(entry)
    }
  }

  return {
    filesContent,
    previewFile,
    handleChooseFiles
  }
}
```

#### 文件 4: `src/composables/useScreenCapture.js`
```javascript
import { ref } from 'vue'
import html2canvas from 'html2canvas'
import { ElMessage } from 'element-plus'

/**
 * 屏幕截图组合式函数
 * @returns {Object} { isCapturing, captureElement }
 */
export function useScreenCapture() {
  const isCapturing = ref(false)

  /**
   * 截取指定元素为图片
   * @param {HTMLElement} element - 要截取的DOM元素
   * @param {Object} options - 配置选项
   */
  const captureElement = async (element, options = {}) => {
    if (!element) {
      ElMessage.error('未找到要截取的元素')
      return
    }

    if (isCapturing.value) {
      ElMessage.warning('正在生成图片,请稍候...')
      return
    }

    try {
      isCapturing.value = true
      ElMessage.info('正在生成图片,请稍候...')

      // 保存原始样式
      const originalStyles = {
        overflow: element.style.overflow,
        height: element.style.height,
        maxHeight: element.style.maxHeight
      }

      // 临时移除滚动和高度限制
      element.style.overflow = 'visible'
      element.style.height = 'auto'
      element.style.maxHeight = 'none'

      // 截图配置
      const defaultOptions = {
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scale: 2,
        logging: false,
        scrollY: -window.scrollY,
        scrollX: -window.scrollX,
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      }

      const canvas = await html2canvas(element, { 
        ...defaultOptions, 
        ...options 
      })

      // 恢复原始样式
      Object.keys(originalStyles).forEach(key => {
        element.style[key] = originalStyles[key]
      })

      // 下载图片
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `screenshot-${Date.now()}.png`
        link.click()
        URL.revokeObjectURL(url)

        ElMessage.success('图片生成成功!')
        isCapturing.value = false
      }, 'image/png')

    } catch (error) {
      console.error('截图失败:', error)
      ElMessage.error('截图失败: ' + error.message)
      isCapturing.value = false
    }
  }

  return {
    isCapturing,
    captureElement
  }
}
```

#### 文件 5: `src/composables/useVideoPlayer.js`
```javascript
import { ref, onMounted, onUnmounted } from 'vue'
import videojs from 'video.js'

/**
 * 视频播放器组合式函数
 * @returns {Object} { playerOptions, initPlayer, destroyPlayer }
 */
export function useVideoPlayer() {
  let player = null

  const playerOptions = ref({
    playbackRates: [0.5, 1.0, 1.5, 2.0],
    autoplay: false,
    muted: true,
    loop: false,
    controls: true,
    preload: 'auto',
    language: 'zh-CN',
    aspectRatio: '16:9',
    fluid: true,
    sources: [{
      type: 'video/mp4',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4'
    }],
    poster: '',
    notSupportedMessage: '此视频暂无法播放,请稍后再试',
    controlBar: {
      timeDivider: true,
      durationDisplay: true,
      remainingTimeDisplay: true,
      fullscreenToggle: true
    }
  })

  /**
   * 初始化播放器
   * @param {string} elementId - 视频元素ID
   * @param {Object} options - 配置选项
   */
  const initPlayer = (elementId, options = {}) => {
    try {
      player = videojs(elementId, {
        ...playerOptions.value,
        ...options
      })

      console.log('视频播放器初始化成功')
    } catch (error) {
      console.error('视频播放器初始化失败:', error)
    }
  }

  /**
   * 销毁播放器
   */
  const destroyPlayer = () => {
    if (player) {
      player.dispose()
      player = null
    }
  }

  onUnmounted(() => {
    destroyPlayer()
  })

  return {
    playerOptions,
    initPlayer,
    destroyPlayer
  }
}
```

---

### Step 2: 创建常量配置文件

#### 文件: `src/constants/mockData.js`
```javascript
/**
 * 树形选择器模拟数据
 */
export const treeData = [
  {
    value: "1",
    label: "Level one 1",
    children: [
      {
        value: "1-1",
        label: "Level two 1-1",
        children: [
          {
            value: "1-1-1",
            label: "Level three 1-1-1",
          },
        ],
      },
    ],
  },
  {
    value: "2",
    label: "Level one 2",
    children: [
      {
        value: "2-1",
        label: "Level two 2-1",
        children: [
          {
            value: "2-1-1",
            label: "Level three 2-1-1",
          },
        ],
      },
      {
        value: "2-2",
        label: "Level two 2-2",
        children: [
          {
            value: "2-2-1",
            label: "Level three 2-2-1",
          },
        ],
      },
    ],
  },
  {
    value: "3",
    label: "Level one 3",
    children: [
      {
        value: "3-1",
        label: "Level two 3-1",
        children: [
          {
            value: "3-1-1",
            label: "Level three 3-1-1",
          },
        ],
      },
      {
        value: "3-2",
        label: "Level two 3-2",
        children: [
          {
            value: "3-2-1",
            label: "Level three 3-2-1",
          },
        ],
      },
    ],
  },
]

/**
 * 轮播图图片数据
 */
export const carouselImages = [
  {
    src: 'https://bing.img.run/uhd.php',
    alt: 'Bing图片1'
  },
  {
    src: 'https://bing.img.run/rand_uhd.php',
    alt: 'Bing随机图片'
  },
  {
    src: 'https://api.dujin.org/pic/ghibli/qyqx',
    alt: '吉卜力图片1'
  },
  {
    src: 'https://api.dujin.org/pic/ghibli',
    alt: '吉卜力图片2'
  }
]
```

---

### Step 3: 创建独立组件

#### 组件 1: `src/components/modules/ScreenCapture.vue`
```vue
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
```

#### 组件 2: `src/components/modules/VideoPlayerSection.vue`
```vue
<template>
  <div class="video-player-section">
    <h3 class="section-title">视频播放器</h3>
    
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
        id="playerVideoJs" 
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
  initPlayer('playerVideoJs', {
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
}

.native-player,
.videojs-player {
  margin: 20px 0;
  
  h4 {
    color: #666;
    margin-bottom: 10px;
  }
}

