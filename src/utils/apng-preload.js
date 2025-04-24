import { useApngStore } from "../stores/apng-store"
let apngStore = useApngStore()

/**
 * @description: 预加载图片
 * @param {*} path
 * @return {*}
 */
function preloadImg(path) {
    path = path + "?" + Math.random()
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = path
    document.head.appendChild(link)
    link.onload = () => {
        link.parentNode.removeChild(link)
    }
    return path
}

/**
 * @description: 垃圾桶选中动画加载
 * @return {*}
 */
function trashCanTranLoad() {
    let path = new URL("../assets/apng/垃圾桶_00000_iSpt.png", import.meta.url).href
    if (apngStore.trashCanTran.length == 0) {
        apngStore.setTrashCanTran(preloadImg(path))
        let timer = setTimeout(() => {
            apngStore.setTrashCanTran(preloadImg(path))
            window.clearTimeout(timer)
        }, 100)
        return apngStore.trashCanTran[apngStore.trashCanTran.length - 1]
    } else {
        apngStore.setTrashCanTran(preloadImg(path))
        return apngStore.trashCanTran[apngStore.trashCanTran.length - 2]
    }
}
/**
 * @description: 灭火器右喷动画加载
 * @return {*}
 */
function fireRightLoad() {
    let path = new URL("../assets/apng/灭火器右喷.png", import.meta.url).href
    if (apngStore.fireRight.length == 0) {
        apngStore.setFireRight(preloadImg(path))
        let timer = setTimeout(() => {
            apngStore.setFireRight(preloadImg(path))
            window.clearTimeout(timer)
        }, 100)
        return apngStore.fireRight[apngStore.fireRight.length - 1]
    } else {
        apngStore.setFireRight(preloadImg(path))
        return apngStore.fireRight[apngStore.fireRight.length - 2]
    }
}

/**
 * @description: 灭火器左喷动画加载
 * @return {*}
 */
function fireLeftLoad() {
    let path = new URL("../assets/apng/灭火器.png", import.meta.url).href
    if (apngStore.fireLeft.length == 0) {
        apngStore.setFireLeft(preloadImg(path))
        let timer = setTimeout(() => {
            apngStore.setFireLeft(preloadImg(path))
            window.clearTimeout(timer)
        }, 100)
        return apngStore.fireLeft[apngStore.fireLeft.length - 1]
    } else {
        apngStore.setFireLeft(preloadImg(path))
        return apngStore.fireLeft[apngStore.fireLeft.length - 2]
    }
}

/**
 * @description: 垃圾桶选中动画加载
 * @return {*}
 */
function trashCanCliLoad() {
    let path = new URL("../assets/apng/选中动画_00052_00051_iSpt.png", import.meta.url).href
    if (apngStore.trashCanCli.length == 0) {
        apngStore.setTrashCanCli(preloadImg(path))
        let timer = setTimeout(() => {
            apngStore.setTrashCanCli(preloadImg(path))
            window.clearTimeout(timer)
        }, 100)
        return apngStore.trashCanCli[apngStore.trashCanCli.length - 1]
    } else {
        apngStore.setTrashCanCli(preloadImg(path))
        return apngStore.trashCanCli[apngStore.trashCanCli.length - 2]
    }
}

export default {
    trashCanTranLoad,
    fireRightLoad,
    trashCanCliLoad,
    fireLeftLoad,
}
