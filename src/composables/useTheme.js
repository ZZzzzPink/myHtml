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
    const themeColor = color || pureColor.value
    document.documentElement.style.setProperty('--theme-color', themeColor)
    Store.themeColor = themeColor
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