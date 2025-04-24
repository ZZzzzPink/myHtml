import { defineStore } from "pinia"

export const useApngStore = defineStore("apng-store", {
    state() {
        return {
            // 灭火器右喷
            fireRight: [],
            // 灭火器左喷
            fireLeft: [],
            // 垃圾桶点击
            trashCanCli: [],
            // 垃圾桶动画
            trashCanTran: [],
        }
    },
    actions: {
        setFireRight(item) {
            this.fireRight.push(item)
        },
        setFireLeft(item) {
            this.fireLeft.push(item)
        },
        setTrashCanCli(item) {
            this.trashCanCli.push(item)
        },
        setTrashCanTran(item) {
            this.trashCanTran.push(item)
        },
    }
})
