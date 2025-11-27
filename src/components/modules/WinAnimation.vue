<template>
    <div v-if="isShowWinAnimate" id="successContainer" class="win-animation"></div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { Player } from "@galacean/effects"
import { ElMessage } from 'element-plus'
import testPlayer from "../../../public/tes.json"

const isShowWinAnimate = ref(false)

/**
 * 初始化动画播放器
 */
const initPlayer = async () => {
    isShowWinAnimate.value = true

    nextTick(async () => {
        try {
            const player = new Player({
                container: document.getElementById("successContainer"),
                interactive: true,
                onError: e => {
                    console.error("动画播放器错误:", e)
                },
            })

            await player.loadScene(testPlayer, {})

            player.on("click", item => {
                ElMessage.warning("点击了元素：" + item.name)
            })

            console.log('动画播放器初始化成功')
        } catch (error) {
            console.error('动画播放器初始化失败:', error)
        }
    })
}

onMounted(() => {
    initPlayer()
})
</script>

<style lang="scss" scoped>
.win-animation {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
}
</style>