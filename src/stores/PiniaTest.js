import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export let PiniaTest = defineStore('stoerTetx', () => {
    let num = ref(10)

    let com = computed((res) =>
        num.value * 2 * res
    )
    function test() {
        this.com(222)
    }


    return {
        num,
        com
    }
})