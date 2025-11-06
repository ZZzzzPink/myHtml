<template>
    <div class="esign-container">
        <div class="esign-content">
            <div class="esign-header">
                <button type="primary" @click="handleSave">保存签名</button>
                <button type="danger" @click="handleClear">清空</button>
                <button @click="handleBack">返回</button>
            </div>

            <div class="esign-canvas">
                <vue-esign ref="esignRef" :width="canvasWidth" :height="canvasHeight" :lineWidth="lineWidth"
                    :lineColor="lineColor" :bgColor="bgColor" />
            </div>
        </div>

        <!-- 预览保存的签名图片 -->
        <div v-if="signatureImage" class="signature-preview">
            <h3>签名预览：</h3>
            <img :src="signatureImage" alt="签名图片" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import vueEsign from 'vue-esign'

const router = useRouter()
const esignRef = ref(null)
const signatureImage = ref('')

// 画布配置 - 铺满全屏
const canvasWidth = ref(window.innerWidth - 70)  // 减去左侧按钮栏的宽度
const canvasHeight = ref(window.innerHeight)

const lineWidth = ref(6)
const lineColor = ref('#000000')
const bgColor = ref('')

/** 保存签名为图片 */
const handleSave = () => {
    esignRef.value.generate().then(res => {
        signatureImage.value = res

        // 创建下载链接
        const link = document.createElement('a')
        link.href = res
        link.download = `signature_${Date.now()}.png`
        link.click()

        ElMessage.success('签名已保存')
    }).catch(err => {
        ElMessage.warning('请先签名')
    })
}

/** 清空签名 */
const handleClear = () => {
    esignRef.value.reset()
    signatureImage.value = ''
    ElMessage.info('签名已清空')
}

/** 返回首页 */
const handleBack = () => {
    router.push('/')
}

/** 处理窗口大小变化 */
const handleResize = () => {
    canvasWidth.value = window.innerWidth - 70
    canvasHeight.value = window.innerHeight
}

onMounted(() => {
    window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss" scoped>
.esign-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f5;
    overflow: hidden;
}

.esign-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}

.esign-header {
    width: 70px;
    padding: 10px 5px;
    background-color: #fff;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    z-index: 10;
    flex-shrink: 0;
}

.esign-canvas {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.signature-preview {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-width: 300px;

    h3 {
        margin: 0 0 10px 0;
        font-size: 14px;
        color: #333;
    }

    img {
        max-width: 100%;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
}
</style>