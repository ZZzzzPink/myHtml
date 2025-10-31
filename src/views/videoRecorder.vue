<template>
    <div class="video-recorder-container">
        <div class="header">
            <h1>屏幕录制</h1>
            <el-button @click="goBack" type="primary">返回主页</el-button>
        </div>

        <div class="recorder-content">
            <!-- 设备提示 -->
            <div class="device-tip" v-if="isMobile">
                <el-alert title="移动设备录制" type="info" :closable="false" show-icon>
                    <template #default>
                        移动设备将使用摄像头进行录制
                    </template>
                </el-alert>
            </div>

            <!-- 视频预览区域 -->
            <div class="video-preview">
                <video ref="videoPreview" class="preview-video" autoplay muted playsinline
                    v-show="stream && !recordedVideo"></video>

                <video ref="recordedVideoPlayer" class="preview-video" controls playsinline v-show="recordedVideo"
                    :src="recordedVideo"></video>

                <div v-if="!stream && !recordedVideo" class="no-screen">
                    <el-icon :size="64">
                        <Monitor v-if="!isMobile" />
                        <VideoCamera v-else />
                    </el-icon>
                    <p v-if="!isMobile">请点击"开始录制"按钮选择要录制的屏幕</p>
                    <p v-else>请点击"开始录制"按钮开启摄像头录制</p>
                </div>
            </div>

            <!-- 录制信息显示 -->
            <div class="record-info" v-if="isRecording">
                <el-icon class="recording-icon">
                    <VideoCameraFilled />
                </el-icon>
                <span class="recording-text">录制中...</span>
                <span class="record-time">{{ formatTime(recordingTime) }}</span>
            </div>

            <!-- 控制按钮组 -->
            <div class="controls">
                <el-button v-if="!stream && !recordedVideo" type="danger" size="large" @click="startRecording">
                    <el-icon>
                        <VideoCameraFilled />
                    </el-icon>
                    开始录制
                </el-button>

                <template v-if="isRecording">
                    <el-button type="warning" size="large" @click="stopRecording">
                        <el-icon>
                            <VideoPause />
                        </el-icon>
                        停止录制
                    </el-button>
                </template>

                <template v-if="recordedVideo">
                    <el-button type="success" size="large" @click="downloadVideo">
                        <el-icon>
                            <Download />
                        </el-icon>
                        下载视频
                    </el-button>
                    <el-button type="primary" size="large" @click="reRecord">
                        <el-icon>
                            <RefreshRight />
                        </el-icon>
                        重新录制
                    </el-button>
                </template>
            </div>

            <!-- 录制选项 -->
            <div class="settings" v-if="!stream && !recordedVideo">
                <el-card class="settings-card">
                    <template #header>
                        <div class="card-header">
                            <span>录制选项</span>
                        </div>
                    </template>

                    <!-- PC端选项 -->
                    <template v-if="!isMobile">
                        <div class="setting-item">
                            <span>录制内容:</span>
                            <el-radio-group v-model="recordSource">
                                <el-radio label="screen">整个屏幕</el-radio>
                                <el-radio label="window">应用窗口</el-radio>
                                <el-radio label="tab">浏览器标签页</el-radio>
                            </el-radio-group>
                        </div>
                        <div class="setting-item">
                            <span>视频质量:</span>
                            <el-select v-model="videoQuality" placeholder="选择视频质量">
                                <el-option label="标清 (480p)" value="480"></el-option>
                                <el-option label="高清 (720p)" value="720"></el-option>
                                <el-option label="全高清 (1080p)" value="1080"></el-option>
                                <el-option label="2K (1440p)" value="1440"></el-option>
                            </el-select>
                        </div>
                        <div class="setting-item">
                            <span>录制系统音频:</span>
                            <el-switch v-model="audioEnabled"></el-switch>
                        </div>
                    </template>

                    <!-- 移动端选项 -->
                    <template v-else>
                        <div class="setting-item">
                            <span>摄像头:</span>
                            <el-radio-group v-model="cameraFacing">
                                <el-radio label="user">前置</el-radio>
                                <el-radio label="environment">后置</el-radio>
                            </el-radio-group>
                        </div>
                        <div class="setting-item">
                            <span>视频质量:</span>
                            <el-select v-model="videoQuality" placeholder="选择视频质量">
                                <el-option label="标清 (480p)" value="480"></el-option>
                                <el-option label="高清 (720p)" value="720"></el-option>
                                <el-option label="全高清 (1080p)" value="1080"></el-option>
                            </el-select>
                        </div>
                        <div class="setting-item">
                            <span>录制音频:</span>
                            <el-switch v-model="audioEnabled"></el-switch>
                        </div>
                    </template>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
    Monitor,
    VideoCamera,
    VideoCameraFilled,
    VideoPause,
    Download,
    RefreshRight
} from '@element-plus/icons-vue'

const router = useRouter()

// 设备检测
const isMobile = ref(false)

// 视频流和录制相关
const videoPreview = ref(null)
const recordedVideoPlayer = ref(null)
const stream = ref(null)
const mediaRecorder = ref(null)
const recordedChunks = ref([])
const recordedVideo = ref(null)
const isRecording = ref(false)
const recordingTime = ref(0)
let recordingTimer = null

// PC端设置
const recordSource = ref('screen')
const videoQuality = ref('1080')
const audioEnabled = ref(true)

// 移动端设置
const cameraFacing = ref('user')

/** 检测是否为移动设备 */
const checkMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'windows phone', 'mobile']
    isMobile.value = mobileKeywords.some(keyword => userAgent.includes(keyword)) ||
        window.innerWidth <= 768
}

onMounted(() => {
    checkMobileDevice()
})

/** 返回主页 */
const goBack = () => {
    if (isRecording.value) {
        ElMessage.warning('请先停止录制')
        return
    }
    stopStream()
    router.push('/')
}

/** 停止媒体流 */
const stopStream = () => {
    if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop())
        stream.value = null
        if (videoPreview.value) {
            videoPreview.value.srcObject = null
        }
    }
}

/** 开始录制 - PC端或移动端原生API */
const startScreenRecording = async () => {
    try {
        const displayMediaOptions = {
            video: {
                cursor: "always",
                displaySurface: recordSource.value,
                width: { ideal: parseInt(videoQuality.value) * 16 / 9 },
                height: { ideal: parseInt(videoQuality.value) },
                frameRate: { ideal: 30, max: 60 }
            },
            audio: audioEnabled.value
        }

        stream.value = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions)

        if (videoPreview.value) {
            videoPreview.value.srcObject = stream.value
        }

        // 监听用户点击浏览器的停止共享按钮
        stream.value.getVideoTracks()[0].onended = () => {
            if (isRecording.value) {
                stopRecording()
            }
        }

        startMediaRecorder()
        ElMessage.success('屏幕录制已开始')
    } catch (error) {
        console.error('屏幕录制失败:', error)
        handleRecordingError(error)
        stopStream()
    }
}

/** 开始录制 - 移动端摄像头录制 */
const startCameraRecording = async () => {
    try {
        const constraints = {
            video: {
                facingMode: cameraFacing.value,
                width: { ideal: parseInt(videoQuality.value) * 16 / 9 },
                height: { ideal: parseInt(videoQuality.value) },
                frameRate: { ideal: 30 }
            },
            audio: audioEnabled.value
        }

        stream.value = await navigator.mediaDevices.getUserMedia(constraints)

        if (videoPreview.value) {
            videoPreview.value.srcObject = stream.value
        }

        startMediaRecorder()
        ElMessage.success('摄像头录制已开始')
    } catch (error) {
        console.error('摄像头录制失败:', error)
        handleRecordingError(error)
        stopStream()
    }
}

/** 统一的开始录制入口 */
const startRecording = async () => {
    if (isMobile.value) {
        await startCameraRecording()
    } else {
        await startScreenRecording()
    }
}

/** 启动媒体录制器 */
const startMediaRecorder = () => {
    try {
        // iOS 设备优先使用 MP4 格式，VP8 兼容性比 VP9 更好
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
        
        // 优先级列表：MP4 > WebM+VP8 > WebM+VP9
        let mimeType = ''
        
        if (isIOS) {
            // iOS 优先使用 MP4
            if (MediaRecorder.isTypeSupported('video/mp4;codecs=h264')) {
                mimeType = 'video/mp4;codecs=h264'
            } else if (MediaRecorder.isTypeSupported('video/mp4')) {
                mimeType = 'video/mp4'
            } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
                mimeType = 'video/webm;codecs=vp8'
            } else if (MediaRecorder.isTypeSupported('video/webm')) {
                mimeType = 'video/webm'
            }
        } else {
            // 非 iOS 设备，优先级：VP8 > VP9 > H264
            if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
                mimeType = 'video/webm;codecs=vp8'
            } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
                mimeType = 'video/webm;codecs=vp9'
            } else if (MediaRecorder.isTypeSupported('video/mp4;codecs=h264')) {
                mimeType = 'video/mp4;codecs=h264'
            } else if (MediaRecorder.isTypeSupported('video/webm')) {
                mimeType = 'video/webm'
            } else if (MediaRecorder.isTypeSupported('video/mp4')) {
                mimeType = 'video/mp4'
            }
        }
        
        const options = {
            mimeType: mimeType,
            videoBitsPerSecond: parseInt(videoQuality.value) === 1440 ? 8000000 :
                parseInt(videoQuality.value) === 1080 ? 5000000 :
                    parseInt(videoQuality.value) === 720 ? 2500000 : 1000000
        }

        recordedChunks.value = []
        mediaRecorder.value = new MediaRecorder(stream.value, options)

        mediaRecorder.value.ondataavailable = (event) => {
            if (event.data.size > 0) {
                recordedChunks.value.push(event.data)
            }
        }

        mediaRecorder.value.onstop = () => {
            const mimeType = mediaRecorder.value.mimeType || 'video/webm'
            const blob = new Blob(recordedChunks.value, { type: mimeType })
            recordedVideo.value = URL.createObjectURL(blob)

            stopStream()
        }

        mediaRecorder.value.start(100)
        isRecording.value = true
        recordingTime.value = 0

        recordingTimer = setInterval(() => {
            recordingTime.value++
        }, 1000)
    } catch (error) {
        console.error('录制器启动失败:', error)
        ElMessage.error('录制器启动失败: ' + error.message)
        stopStream()
    }
}

/** 处理录制错误 */
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

/** 停止录制 */
const stopRecording = () => {
    if (mediaRecorder.value && isRecording.value) {
        mediaRecorder.value.stop()
        isRecording.value = false

        if (recordingTimer) {
            clearInterval(recordingTimer)
            recordingTimer = null
        }

        ElMessage.success('录制已停止')
    }
}

/** 下载视频 */
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

/** 重新录制 */
const reRecord = () => {
    if (recordedVideo.value) {
        URL.revokeObjectURL(recordedVideo.value)
        recordedVideo.value = null
    }
    recordedChunks.value = []
}

/** 格式化时间 */
const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

onBeforeUnmount(() => {
    stopStream()
    if (recordingTimer) {
        clearInterval(recordingTimer)
    }
    if (recordedVideo.value) {
        URL.revokeObjectURL(recordedVideo.value)
    }
})
</script>

<style lang="scss" scoped>
.video-recorder-container {
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h1 {
        color: white;
        font-size: 32px;
        margin: 0;
    }
}

.recorder-content {
    max-width: 1200px;
    margin: 0 auto;
}

.device-tip {
    margin-bottom: 20px;
}

.canvas-container {
    display: none;

    .record-canvas {
        width: 100%;
        border-radius: 12px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }
}

.video-preview {
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 30px;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

    .preview-video {
        width: 100%;
        display: block;
        min-height: 500px;
        object-fit: contain;
    }

    .no-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 500px;
        color: #666;

        p {
            margin-top: 20px;
            font-size: 18px;
            text-align: center;
            padding: 0 20px;
        }
    }
}

.record-info {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    max-width: 350px;
    margin: 0 auto 30px;

    .recording-icon {
        color: #f56c6c;
        font-size: 24px;
        animation: pulse 1.5s ease-in-out infinite;
    }

    .recording-text {
        font-size: 18px;
        font-weight: bold;
        color: #f56c6c;
    }

    .record-time {
        font-size: 20px;
        font-weight: bold;
        color: #303133;
        font-family: monospace;
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(1.1);
    }
}

.controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
}

.settings {
    max-width: 500px;
    margin: 0 auto;

    .settings-card {
        background: rgba(255, 255, 255, 0.95);

        .card-header {
            font-weight: bold;
            font-size: 16px;
        }

        .setting-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;

            &:not(:last-child) {
                border-bottom: 1px solid #eee;
            }

            span {
                font-size: 14px;
                color: #606266;
                min-width: 120px;
            }
        }
    }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        gap: 15px;

        h1 {
            font-size: 24px;
        }
    }

    .video-preview {
        .preview-video {
            min-height: 300px;
        }

        .no-screen {
            min-height: 300px;

            p {
                font-size: 16px;
            }
        }
    }

    .controls {
        flex-direction: column;

        :deep(.el-button) {
            width: 100%;
        }
    }

    .setting-item {
        flex-direction: column !important;
        align-items: flex-start !important;
        gap: 10px;

        span {
            min-width: auto !important;
        }
    }
}
</style>