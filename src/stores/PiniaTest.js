/**
 * @description: 选项式写法
 */
import { defineStore } from "pinia"
import { ref, computed } from "vue"

export const PiniaTest = defineStore("storeText", {
    state() {
        return {
            com: 10,
            num: 20,
            themeColor: "#fff",
        }
    },
    getters: {
        getCom: (state) => state.com,
        getNum: (state) => state.num,
    },
    actions: {
        setCom(val) {
            this.com = val
        },
        setNum(val) {
            this.num = val
        },
    },
    persist: {
        enabled: true,
        strategies: [
            {
                key: "storeText",
                storage: localStorage,
            },
        ],
    },
})
