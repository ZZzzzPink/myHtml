
# 📋 index.vue 模块化重构方案 B - 详细计划

> **目标**: 在不影响现有功能的前提下,将混乱的单文件组件重构为模块化、可维护的代码结构

---

## 📊 一、现状分析

### 当前问题
- ✗ 503行代码全部集中在单个文件
- ✗ 包含10+个不相关的功能模块
- ✗ CSS样式重复定义(如 `.testP`、`.container` 等)
- ✗ 变量命名不规范(`prvFile`、`scrContainer`)
- ✗ 硬编码数据(157-226行树形数据)
- ✗ 缺少功能注释和文档

### 功能模块清单
| 模块 | 行数范围 | 复杂度 | 是否可独立 |
|------|---------|--------|-----------|
| 截图功能 | 3, 442-502 | 中 | ✅ 是 |
| 视频播放器(原生) | 11-12 | 低 | ✅ 是 |
| 视频播放器(video.js) | 76-79, 228-250, 375-383 | 中 | ✅ 是 |
| Pixelium按钮组 | 14-21 | 低 | ✅ 是 |
| 路由导航按钮 | 22-25, 58-63 | 低 | ❌ 否 |
| 主题切换 | 27-30, 143, 342-346 | 低 | ✅ 是 |
| 文件选择器 | 33-40, 253-328 | 高 | ✅ 是 |
| defineExpose组件测试 | 43-55 | 低 | ❌ 否(测试用) |
| 列表操作 | 66-74, 149-153, 330-333 | 低 | ❌ 否 |
| 树形选择器 | 82-87, 155-226, 335-340 | 中 | ✅ 是 |
| 轮播图 | 90-99 | 低 | ✅ 是 |
| 粘性布局测试 | 102-108 | 低 | ❌ 否(测试用) |
| 图片懒加载 | 111-117, 389-402 | 中 | ✅ 是 |
| 动画效果 | 2, 147, 351-368 | 中 | ✅ 是 |

---

## 🎯 二、重构策略

### 核心原则
1. **渐进式重构** - 分步骤实施,每步都可独立验证
2. **保持功能完整** - 所有现有功能必须正常工作
3. **提升可维护性** - 代码结构清晰,易于理解和修改
4. **遵循Vue最佳实践** - 组件化、组合式API、单一职责

### 重构范围
- ✅ **需要拆分**: 视频播放器、文件选择器、主题切换、树形选择器、轮播图、图片懒加载、截图功能、动画效果
- ❌ **保留在主页**: 路由导航、列表操作、测试用组件(defineExpose、粘性布局)

---

## 📦 三、新的文件结构

```
src/
├── views/
│   └── index.vue (重构后: ~200行)
├── components/
│   ├── defineExpose.vue (已存在)
│   ├── modules/                    # 新增: 功能模块组件目录
│   │   ├── ScreenCapture.vue       # 截图功能
│   │   ├── VideoPlayerSection.vue  # 视频播放区域
│   │   ├── ThemeSwitcher.vue       # 主题切换器
│   │   ├── FileSelector.vue        # 文件选择器
│   │   ├── TreeSelector.vue        # 树形选择器
│   │   ├── ImageCarousel.vue       # 轮播图
│   │   ├── LazyImageGallery.vue    # 懒加载图片画廊
│   │   └── WinAnimation.vue        # 胜利动画效果
│   └── ui/                         # 新增: UI组件目录
│       └── PixeliumButtons.vue     # Pixelium按钮组
├── composables/                    # 新增: 组合式函数目录
│   ├── useTheme.js                 # 主题管理
│   ├── useFileSystem.js            # 文件系统操作
│   ├── useLazyLoad.js              # 图片懒加载
│   ├── useScreenCapture.js         # 截图功能
│   └── useVideoPlayer.js           # 视频播放器配置
└── constants/                      # 新增: 常量配置目录
    └── mockData.js                 # 模拟数据(树形数据等)
```

---

## 🔧 四、详细实施步骤

### Step 1: 创建 Composables (可复用逻辑)

#### 1.1 创建 `src/composables/useTheme.js`
**功能**: 主题颜色管理
```javascript
// 提取行: 143, 342-346
export function useTheme() {
  const pureColor = ref(null)
  
  const handleThemeChange = (color) => {
    document.documentElement.style.setProperty('--theme-color', color)
    Store.themeColor = color
  }
  
  return { pureColor, handleThemeChange }
}
```

#### 1.2 创建 `src/composables/useLazyLoad.js`
**功能**: 图片懒加载逻辑
```javascript
// 提取行: 389-402
export function useLazyLoad() {
  const initLazyLoadObserver = () => {
    const images = document.querySelectorAll('.img-item')
    const observer = new IntersectionObserver((entries, observer) => {
      // ... 懒加载逻辑
    })
    images.forEach(item => observer.observe(item))
  }
  
  return { initLazyLoadObserver }
}
```

#### 1.3 创建 `src/composables/useFileSystem.js`
**功能**: 文件系统操作
```javascript
// 提取行: 253-328
export function useFileSystem() {
  const filesContent = ref('')
  const handleChooseFiles = async () => { /* ... */ }
  const openFiles = async (filePaths) => { /* ... */ }
  
  return { filesContent, handleChooseFiles }
}
```

#### 1.4 创建 `src/composables/useScreenCapture.js`
**功能**: 屏幕截图
```javascript
// 提取行: 442-502
export function useScreenCapture() {
  const captureElement = async (element) => { /* ... */ }
  
  return { captureElement }
}
```

#### 1.5 创建 `src/composables/useVideoPlayer.js`
**功能**: 视频播放器配置
```javascript
// 提取行: 228-250, 375-383
export function useVideoPlayer() {
  const playerOptions = ref({ /* ... */ })
  const initPlayer = (elementId) => { /* ... */ }
  
  return { playerOptions, initPlayer }
}
```

---

### Step 2: 创建常量配置文件

#### 2.1 创建 `src/constants/mockData.js`
```javascript
// 提取行: 157-226
export const treeData = [
  {
    value: "1",
    label: "Level one 1",
    children: [...]
  },
  // ... 其他数据
]
```

---

### Step 3: 创建独立组件

#### 3.1 创建 `src/components/modules/ScreenCapture.vue`
**职责**: 截图功能UI和逻辑封装
```vue
<template>
  <div class="screen-capture">
    <el-button type="primary" @click="handleCapture">
      截取.scr所有内容为图片
    </el-button>
    <div class="scr" ref="scrContainer" @scroll="onScroll">
      <!-- 滚动内容 -->
    </div>
  </div>
</template>

<script setup>
import { useScreenCapture } from '@/composables/useScreenCapture'
// 提取行: 3-10, 146, 442-502
</script>
```

#### 3.2 创建 `src/components/modules/VideoPlayerSection.vue`
**职责**: 视频播放器区域
```vue
<template>
  <div class="video-section">
    <!-- 原生视频播放器 -->
    <video controls playsinline src="..."></video>
    
    <!-- video.js播放器 -->
    <video-player :options="playerOptions" />
  </div>
</template>

<script setup>
import { useVideoPlayer } from '@/composables/useVideoPlayer'
// 提取行: 11-12, 76-79, 228-250
</script>
```

#### 3.3 创建 `src/components/modules/ThemeSwitcher.vue`
**职责**: 主题颜色切换
```vue
<template>
  <div class="theme-switcher">
    <color-picker 
      v-model:pureColor="pureColor" 
      @pureColorChange="handleThemeChange" 
    />
    <p>当前计数: {{ count }}</p>
  </div>
</template>

<script setup>
import { useTheme } from '@/composables/useTheme'
// 提取行: 27-30, 143, 342-346
</script>
```

#### 3.4 创建 `src/components/modules/FileSelector.vue`
**职责**: 文件/文件夹选择和预览
```vue
<template>
  <div class="file-selector">
    <el-button type="primary" @click="handleChooseFiles">
      选择文件夹
    </el-button>
    <block v-if="filesContent !== ''">{{ filesContent }}</block>
    <vue-office-docx :src="prvFile" />
    <iframe v-if="prvFile" :src="prvFile"></iframe>
  </div>
</template>

<script setup>
import { useFileSystem } from '@/composables/useFileSystem'
// 提取行: 33-40, 144, 145, 253-328
</script>
```

#### 3.5 创建 `src/components/modules/TreeSelector.vue`
**职责**: 树形选择器
```vue
<template>
  <div class="tree-selector">
    <el-tree-select 
      ref="elTree" 
      v-model="value" 
      :data="treeData"
      @node-click="handleTreeNodeClick"
    />
    <el-button type="success" @click="handleDownload">
      下载测试
    </el-button>
  </div>
</template>

<script setup>
import { treeData } from '@/constants/mockData'
// 提取行: 82-87, 155-226, 335-340, 434-441
</script>
```

#### 3.6 创建 `src/components/modules/ImageCarousel.vue`
**职责**: 图片轮播展示
```vue
<template>
  <div class="carousel-section">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <img :src="item.src" :alt="item.alt" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
// 提取行: 90-99
const images = [
  { src: 'https://bing.img.run/uhd.php', alt: 'Bing图片1' },
  // ...
]
</script>
```

#### 3.7 创建 `src/components/modules/LazyImageGallery.vue`
**职责**: 懒加载图片画廊
```vue
<template>
  <div class="lazy-gallery">
    <div class="img-box">
      <img 
        v-for="item in 20" 
        :key="item"
        class="img-item" 
        data-src="https://bing.img.run/rand.php"
        :alt="'图片' + item"
      />
    </div>
  </div>
</template>

<script setup>
import { useLazyLoad } from '@/composables/useLazyLoad'
// 提取行: 111-117, 389-402
</script>
```

#### 3.8 创建 `src/components/modules/WinAnimation.vue`
**职责**: 胜利动画效果
```vue
<template>
  <div 
    v-if="isShowWinAnimate" 
    id="successContainer" 
    class="win-animation"
  ></div>
</template>

<script setup>
import { Player } from "@galacean/effects"
// 提取行: 2, 147, 351-368
</script>
```

#### 3.9 创建 `src/components/ui/PixeliumButtons.vue`
**职责**: Pixelium UI按钮组展示
```vue
<template>
  <px-space>
    <px-button>Primary</px-button>
    <px-button theme="success">Success</px-button>
    <px-button theme="warning">Warning</px-button>
    <px-button theme="danger">Danger</px-button>
    <px-button theme="info">Info</px-button>
    <px-button theme="sakura">Sakura</px-button>
  </px-space>
</template>

<script setup>
// 提取行: 14-21
</script>
```

---

### Step 4: 重构主页面 `src/views/index.vue`

#### 重构后的结构 (~200行)
```vue
<template>
  <div class="index-page">
    <!-- 动画效果 -->
    <WinAnimation />
    
    <!-- 截图功能 -->
    <ScreenCapture />
    
    <!-- Pixelium UI按钮组 -->
    <PixeliumButtons />
    
    <!-- 路由导航区 -->
    <section class="navigation-section">
      <el-button @click="$router.push('/vueUse')">vueUse</el-button>
      <el-button @click="$router.push('/videoRecorder')">屏幕录制</el-button>
      <el-button @click="$router.push('/cameraRecorder')">摄像头录制</el-button>
      <el-button @click="$router.push('/esign')">电子签名</el-button>
      <RouterLink to="/progressBar">圆形进度条</RouterLink>
      <button @click="navigateWithQuery">query路由</button>
      <button @click="navigateWithParams">params路由</button>
      <button @click="() => router.push('/luckyDraw')">抽奖</button>
    </section>
    
    <!-- 主题切换 -->
    <ThemeSwitcher />
    
    <!-- 文件操作 -->
    <FileSelector />
    
    <!-- 组件测试 (defineExpose) -->
    <section class="component-test">
      <comPone ref="defineExposeTest" title="组件测试">
        <h4>插槽内容</h4>
        <template 