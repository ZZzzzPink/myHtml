# VideoRecorder.vue 组件分析文档

## 一、概述

VideoRecorder.vue 是一个功能完整的视频录制组件，支持 PC 端屏幕录制和移动端摄像头录制。该组件基于 Vue 3 Composition API 开发，使用 Web Media APIs 实现媒体捕获和录制功能。

## 二、技术栈

- **Vue 3**：使用 Composition API 和 `<script setup>` 语法
- **Element Plus**：提供 UI 组件（按钮、选择器、开关、提示等）
- **Web Media APIs**：
  - `getDisplayMedia()`：屏幕捕获
  - `getUserMedia()`：摄像头/麦克风访问
  - `MediaRecorder`：媒体录制
- **SCSS**：样式预处理器
- **Vue Router**：路由管理

## 三、整体架构

### 3.1 组件结构

```
VideoRecorder.vue
├── Template（模板层）
│   ├── 设备提示（移动设备专属）
│   ├── 视频预览区域
│   │   ├── 实时预览（video标签）
│   │   ├── 录制回放（video标签）
│   │   └── 空状态提示
│   ├── 录制信息显示
│   ├── 控制按钮组
│   └── 录制选项配置
├── Script（逻辑层）
│   ├── 设备检测
│   ├── 状态管理
│   ├── PC端录制逻辑
│   ├── 移动端录制逻辑
│   ├── 媒体录制器管理
│   └── 工具函数
└── Style（样式层）
    ├── 响应式布局
    ├── 动画效果
    └── 主题样式
```

### 3.2 核心状态管理

```javascript
// 设备相关
const isMobile = ref(false)              // 是否为移动设备

// 媒体流相关
const stream = ref(null)                 // 当前媒体流
const videoPreview = ref(null)           // 预览视频元素
const recordedVideoPlayer = ref(null)    // 回放视频元素

// 录制相关
const mediaRecorder = ref(null)          // MediaRecorder实例
const recordedChunks = ref([])           // 录制数据块
const recordedVideo = ref(null)          // 录制完成的视频URL
const isRecording = ref(false)           // 录制状态
const recordingTime = ref(0)             // 录制时长

// 配置相关
const recordSource = ref('screen')       // PC端录制源
const videoQuality = ref('1080')         // 视频质量
const audioEnabled = ref(true)           // 音频开关
const cameraFacing = ref('user')         // 移动端摄像头朝向
```

## 四、核心功能实现

### 4.1 设备检测

```javascript
const checkMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'windows phone', 'mobile']
    isMobile.value = mobileKeywords.some(keyword => userAgent.includes(keyword)) || 
                     window.innerWidth <= 768
}
```

**实现原理**：
- User-Agent 字符串检测
- 屏幕宽度辅助判断（768px 断点）
- 双重检测确保准确性

### 4.2 PC端屏幕录制

#### 4.2.1 获取屏幕流

```javascript
const displayMediaOptions = {
    video: {
        cursor: "always",                          // 显示鼠标光标
        displaySurface: recordSource.value,        // 录制源类型
        width: { ideal: parseInt(videoQuality.value) * 16 / 9 },
        height: { ideal: parseInt(videoQuality.value) },
        frameRate: { ideal: 30, max: 60 }          // 帧率范围
    },
    audio: audioEnabled.value                      // 系统音频
}

stream.value = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
```

#### 4.2.2 监听停止事件

```javascript
// 监听用户点击浏览器的停止共享按钮
stream.value.getVideoTracks()[0].onended = () => {
    if (isRecording.value) {
        stopRecording()
    }
}
```

### 4.3 移动端摄像头录制

```javascript
const constraints = {
    video: {
        facingMode: cameraFacing.value,            // 摄像头朝向
        width: { ideal: parseInt(videoQuality.value) * 16 / 9 },
        height: { ideal: parseInt(videoQuality.value) },
        frameRate: { ideal: 30 }
    },
    audio: audioEnabled.value
}

stream.value = await navigator.mediaDevices.getUserMedia(constraints)
```

**移动端特点**：
- 使用 `facingMode` 控制前后摄像头
- 无法录制系统音频，只能录制麦克风

### 4.4 MediaRecorder 实现

#### 4.4.1 初始化配置

```javascript
const options = {
    mimeType: 'video/webm;codecs=vp9',
    videoBitsPerSecond: 根据质量动态调整
}

// 码率配置
2K (1440p): 8,000,000 bps (8 Mbps)
1080p: 5,000,000 bps (5 Mbps)
720p: 2,500,000 bps (2.5 Mbps)
480p: 1,000,000 bps (1 Mbps)
```

#### 4.4.2 编码格式兼容性

```javascript
// 检查浏览器支持的 MIME 类型
if (!MediaRecorder.isTypeSupported(options.mimeType)) {
    if (MediaRecorder.isTypeSupported('video/webm')) {
        options.mimeType = 'video/webm'
    } else if (MediaRecorder.isTypeSupported('video/mp4')) {
        options.mimeType = 'video/mp4'
    }
}
```

#### 4.4.3 数据收集机制

```javascript
recordedChunks.value = []
mediaRecorder.value = new MediaRecorder(stream.value, options)

mediaRecorder.value.ondataavailable = (event) => {
    if (event.data.size > 0) {
        recordedChunks.value.push(event.data)
    }
}

// 使用 timeslice 参数（100ms）定期收集数据
mediaRecorder.value.start(100)
```

#### 4.4.4 视频生成

```javascript
mediaRecorder.value.onstop = () => {
    const mimeType = mediaRecorder.value.mimeType || 'video/webm'
    const blob = new Blob(recordedChunks.value, { type: mimeType })
    recordedVideo.value = URL.createObjectURL(blob)
    stopStream()
}
```

### 4.5 录制计时器

```javascript
recordingTimer = setInterval(() => {
    recordingTime.value++
}, 1000)

const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}
```

## 五、错误处理机制

### 5.1 错误类型分类

```javascript
const handleRecordingError = (error) => {
    if (error.name === 'NotAllowedError') {
        ElMessage.error('用户拒绝了屏幕共享请求')
    } else if (error.name === 'NotFoundError') {
        ElMessage.error('未找到可录制的屏幕')
    } else if (error.name === 'NotSupportedError') {
        if (isMobile.value) {
            ElMessage.warning('当前浏览器不支持屏幕录制，请尝试Canvas捕获方式')
        } else {
            ElMessage.error('当前浏览器不支持屏幕录制')
        }
    } else if (error.name === 'NotReadableError') {
        ElMessage.error('屏幕正在被其他应用使用')
    } else {
        ElMessage.error('录制失败: ' + error.message)
    }
}
```

### 5.2 常见错误场景

1. **权限拒绝**：用户未授权访问摄像头/屏幕
2. **设备未找到**：没有可用的录制设备
3. **不支持**：浏览器版本过低或不支持该API
4. **设备占用**：设备被其他应用使用
5. **约束不满足**：请求的参数过于严格

## 六、视频下载功能

```javascript
const downloadVideo = () => {
    if (recordedVideo.value) {
        const a = document.createElement('a')
        a.href = recordedVideo.value
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
        const ext = mediaRecorder.value?.mimeType?.includes('mp4') ? 'mp4' : 'webm'
        a.download = `screen_recording_${timestamp}.${ext}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        ElMessage.success('视频下载已开始')
    }
}
```

**实现细节**：
- 动态创建下载链接
- 自动生成时间戳文件名
- 根据MIME类型确定文件扩展名

## 七、资源管理

### 7.1 组件卸载时的清理

```javascript
onBeforeUnmount(() => {
    stopStream()                    // 停止媒体流
    if (recordingTimer) {           // 清理定时器
        clearInterval(recordingTimer)
    }
    if (recordedVideo.value) {      // 释放Blob URL
        URL.revokeObjectURL(recordedVideo.value)
    }
})
```

### 7.2 停止媒体流

```javascript
const stopStream = () => {
    if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop())
        stream.value = null
        if (videoPreview.value) {
            videoPreview.value.srcObject = null
        }
    }
}
```

## 八、UI/UX 设计

### 8.1 响应式设计

- **PC端**：横向布局，最大宽度1200px
- **移动端**：纵向布局，按钮全宽显示
- **断点**：768px

### 8.2 状态反馈

1. **视觉反馈**：
   - 录制中红色呼吸灯动画
   - 按钮状态切换
   - 实时预览/回放切换

2. **消息提示**：
   - 成功：绿色提示
   - 警告：橙色提示
   - 错误：红色提示

### 8.3 动画效果

```scss
@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.6;
        transform: scale(1.1);
    }
}
```

## 九、安全性和性能优化

### 9.1 安全特性

1. **用户主动触发**：必须在用户交互后才能开始录制
2. **HTTPS要求**：必须在安全环境下运行
3. **权限控制**：浏览器原生权限管理
4. **明确授权**：用户必须明确同意才能访问设备

### 9.2 性能优化

1. **分块收集**：使用timeslice避免内存溢出
2. **码率控制**：根据分辨率动态调整码率
3. **及时释放**：组件卸载时清理所有资源
4. **格式降级**：自动选择最佳编码格式

## 十、浏览器兼容性

| 功能 | Chrome | Firefox | Edge | Safari |
|------|--------|---------|------|--------|
| getDisplayMedia | 72+ | 66+ | 79+ | 13+ |
| getUserMedia | 53+ | 36+ | 12+ | 11+ |
| MediaRecorder | 47+ | 25+ | 14+ | 14.1+ |

## 十一、可扩展性建议

1. **功能扩展**：
   - 添加视频滤镜效果
   - 支持实时标注
   - 集成直播推流
   - 添加视频编辑功能

2. **技术优化**：
   - 使用 WebWorker 处理视频数据
   - 实现视频压缩算法
   - 添加断点续传功能
   - 支持多种视频格式输出

3. **集成扩展**：
   - 云存储服务集成
   - AI 视频分析
   - 实时协作功能
   - 视频模板系统

## 十二、总结

VideoRecorder.vue 组件展示了现代 Web API 的强大能力，通过纯前端技术实现了专业级的视频录制功能。其模块化的设计、完善的错误处理、良好的用户体验，使其成为一个优秀的视频录制解决方案。该组件不仅功能完整，而且具有良好的可维护性和扩展性，为各种视频录制场景提供了灵活的技术支持。