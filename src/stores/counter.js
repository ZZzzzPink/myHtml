/**
 * @description:组合式写法
 */
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    setTimeout(() => {
      count.value++
    }, 2000)
    console.log('%c [ count.value++ ]-12', 'font-size:13px; background:pink; color:#bf2c9f;', count.value++)
  }

  return { count, doubleCount, increment }
})
