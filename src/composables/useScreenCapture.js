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