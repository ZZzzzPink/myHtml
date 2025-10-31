<template>
    <div class="camera-recorder-container">
        <div class="header">
            <h1>📷 摄像头录制</h1>
            <el-button @click="goBack" type="primary">返回主页</el-button>
        </div>

        <div class="recorder-content">
            <!-- 视频预览区域 -->
            <div class="video-preview">
                <!-- 实时预览 -->
                <video ref="videoPreview" class="preview-video" autoplay muted playsinline webkit-playsinline
                    v-show="stream && !recordedVideoUrl"></video>

                <!-- 录制结果 -->
                <video ref="recordedVideoPlayer" class="preview-video" controls playsinline webkit-playsinline
                    v-show="recordedVideoUrl" :src="recordedVideoUrl"></video>

                <!-- 无摄像头状态 -->
                <div v-if="!stream && !recordedVideoUrl" class="no-camera">
                    <el-icon :size="64">
                        <VideoCamera />
                    </el-icon>
                    <p>点击下方按钮打开摄像头</p>
                </div>
            </div>

            <!-- 录制状态 -->
            <div class="record-status" v-if="isRecording">
                <el-icon class="recording-icon">
                    <VideoCameraFilled />
                </el-icon>
                <span class="recording-text">正在录制</span>
                <span class="record-time">{{ recordingTime }}秒</span>
            </div>

            <!-- 控制按钮 -->
            <div class="controls">
                <!-- 未打开摄像头 -->
                <el-button v-if="!stream && !recordedVideoUrl" type="success" size="large" @click="openCamera">
                    <el-icon><VideoCamera /></el-icon>
                    打开摄像头
                </el-button>

                <!-- 已打开摄像头但未录制 -->
                <template v-if="stream && !isRecording && !recordedVideoUrl">
                    <el-button type="danger" size="large" @click="startRecording">
                        <el-icon><VideoCameraFilled /></el-icon>
                        开始录制
                    </el-button>
                    <el-button type="info" size="large" @click="closeCamera">
                        <el-icon><Close /></el-icon>
                        关闭摄像头
                    </el-button>
                </template>

                <!-- 正在录制 -->
                <el-button v-if="isRecording" type="warning" size="large" @click="stopRecording">
                    <el-icon><CircleClose /></el-icon>
                    停止录制
                </el-button>

                <!-- 有录制结果 -->
                <template v-if="recordedVideoUrl">
                    <el-button type="success" size="large" @click="downloadVideo">
                        <el-icon><Download /></el-icon>
                        下载视频
                    </el-button>
                    <el-button type="primary" size="large" @click="reRecord">
                        <el-icon><RefreshRight /></el-icon>
                        重新录制
                    </el-button>
                </template>
            </div>

            <!-- 错误提示 -->
            <el-alert v-if="errorMessage" :title="errorMessage" type="error" show-icon :closable="true"
                @close="errorMessage = ''" style="margin-top: 20px; max-width: 600px; margin-left: auto; margin-right: auto;" />
        </div>
    </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
    VideoCamera,
    VideoCameraFilled,
    Download,
    RefreshRight,
    Close,
    CircleClose
} from '@element-plus/icons-vue'

const router = useRouter()

// 视频元素引用
const videoPreview = ref(null)
const recordedVideoPlayer = ref(null)

// 状态
const stream = ref(null)
const mediaRecorder = ref(null)
const recordedChunks = ref([])
const recordedVideoUrl = ref(null)
const isRecording = ref(false)
const recordingTime = ref(0)
const errorMessage = ref('')

let recordingTimer = null

/** 打开摄像头 */
const openCamera = async () => {
    try {
        errorMessage.value = ''

        // 检查浏览器支持
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            errorMessage.value = '当前浏览器不支持摄像头访问,请使用最新版 Chrome、Firefox 或 Safari'
            return
        }

        ElMessage.info('正在打开摄像头...')

        // 请求摄像头权限
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
            audio: true
        })

        // 设置视频预览
        if (videoPreview.value) {
            videoPreview.value.srcObject = stream.value
        }

        ElMessage.success('摄像头已打开')
    } catch (error) {
        console.error('打开摄像头失败:', error)
        handleError(error)
    }
}

/** 关闭摄像头 */
const closeCamera = () => {
    if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop())
        stream.value = null
        if (videoPreview.value) {
            videoPreview.value.srcObject = null
        }
        ElMessage.info('摄像头已关闭')
    }
}

/** 开始录制 */
const startRecording = () => {
    try {
        if (!stream.value) {
            ElMessage.warning('请先打开摄像头')
            return
        }

        // 检查 MediaRecorder 支持
        if (typeof MediaRecorder === 'undefined') {
            errorMessage.value = '当前浏览器不支持视频录制功能'
            return
        }

        // 获取支持的编码格式
        const mimeType = getSupportedMimeType()
        if (!mimeType) {
            errorMessage.value = '当前浏览器不支持任何视频编码格式'
            return
        }

        // 创建录制器
        recordedChunks.value = []
        mediaRecorder.value = new MediaRecorder(stream.value, {
            mimeType: mimeType,
            videoBitsPerSecond: 2500000 // 2.5 Mbps
        })

        // 数据可用时保存
        mediaRecorder.value.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
                recordedChunks.value.push(event.data)
            }
        }

        // 录制停止时处理
        mediaRecorder.value.onstop = () => {
            const blob = new Blob(recordedChunks.value, {
                type: mediaRecorder.value.mimeType
            })
            recordedVideoUrl.value = URL.createObjectURL(blob)
            closeCamera()
            ElMessage.success('录制完成')
        }

        // 录制错误处理
        mediaRecorder.value.onerror = (event) => {
            console.error('录制错误:', event)
            ElMessage.error('录制过程中出现错误')
            stopRecording()
        }

        // 开始录制
        mediaRecorder.value.start(100)
        isRecording.value = true
        recordingTime.value = 0

        // 启动计时器
        recordingTimer = setInterval(() => {
            recordingTime.value++
        }, 1000)

        ElMessage.success('开始录制')
    } catch (error) {
        console.error('开始录制失败:', error)
        errorMessage.value = '录制失败: ' + error.message
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
    }
}

/** 下载视频 */
const downloadVideo = () => {
    if (recordedVideoUrl.value) {
        const a = document.createElement('a')
        a.href = recordedVideoUrl.value
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5)
        const ext = mediaRecorder.value?.mimeType?.includes('mp4') ? 'mp4' : 'webm'
        a.download = `camera_${timestamp}.${ext}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        ElMessage.success('视频下载已开始')
    }
}

/** 重新录制 */
const reRecord = () => {
    if (recordedVideoUrl.value) {
        URL.revokeObjectURL(recordedVideoUrl.value)
        recordedVideoUrl.value = null
    }
    recordedChunks.value = []
    recordingTime.value = 0
}

/** 获取支持的 MIME 类型 */
const getSupportedMimeType = () => {
    const types = [
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm;codecs=h264,opus',
        'video/webm',
        'video/mp4;codecs=h264,aac',
        'video/mp4'
    ]

    for (const type of types) {
        if (MediaRecorder.isTypeSupported(type)) {
            return type
        }
    }

    return ''
}

/** 处理错误 */
const handleError = (error) => {
    if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        errorMessage.value = '用户拒绝了摄像头访问权限,请在浏览器设置中允许访问'
    } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        errorMessage.value = '未找到摄像头设备'
    } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        errorMessage.value = '摄像头正在被其他应用使用'
    } else if (error.name === 'OverconstrainedError') {
        errorMessage.value = '摄像头不支持所请求的设置'
    } else {
        errorMessage.value = '摄像头访问失败: ' + error.message
    }
}

/** 返回主页 */
const goBack = () => {
    if (isRecording.value) {
        ElMessage.warning('请先停止录制')
        return
    }
    closeCamera()
    router.push('/')
}

// 清理资源
onBeforeUnmount(() => {
    closeCamera()
    if (recordingTimer) {
        clearInterval(recordingTimer)
    }
    if (recordedVideoUrl.value) {
        URL.revokeObjectURL(recordedVideoUrl.value)
    }
})
</script>

<style lang="scss" scoped>
.camera-recorder-container {
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
    max-width: 1000px;
    margin: 0 auto;
}

.video-preview {
    position: relative;
    width: 100%;
    background: #000;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    margin-bottom: 30px;

    .preview-video {
        width: 100%;
        display: block;
        min-height: 400px;
        max-height: 600px;
        object-fit: contain;
    }

    .no-camera {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        color: #666;

        p {
            margin-top: 20px;
            font-size: 18px;
        }
    }
}

.record-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 8px;
    max-width: 300px;
    margin: 0 auto 20px;

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
    0%, 100% {
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
    margin-bottom: 20px;

    :deep(.el-button) {
        min-width: 140px;
    }
}

/* 移动端适配 */
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

        .no-camera {
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
            min-width: auto;
        }
    }
}
</style>