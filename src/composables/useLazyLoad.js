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
      (entries) => {
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
        rootMargin: '50px',
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