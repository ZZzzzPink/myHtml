<template>
    <p>路由测试</p>
    <p>vue3</p>
    <p @click="jump">点击跳转</p>
    <img v-if="state.isShowImg" style="width: 200px; height: 70px" :src="obj[0].src" alt="" />
    <button @click="() => num++">点击</button>
    <object
        type="text/html"
        data="https://cn.bing.com/?FORM=Z9FD1"
        style="width: 1000px; height: 1000px"
    >
        <p>backup content</p>
    </object>
    <!-- 第二种：使用iframe 标签 -->
    <iframe src="https://cn.bing.com/?FORM=Z9FD1" style="width: 100vw; height: 100vh"></iframe>
</template>

<script setup>
import { onMounted, reactive, ref, watch,computed } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { useApngStore } from "@/stores/apng-store"
import imgProload from "@/utils/apng-preload.js"
let apngStore = useApngStore()


const obj = reactive([
    {
        src: imgProload.trashCanTranLoad(),
    },
])
let route = useRoute()
let Params = route.params.text
const state = reactive({
    isShowImg: true,
})
let num = ref(0)
watch(
    () => num.value,
    (newVal) => {
        console.log("🟣 newVal -33", "👉", newVal)
        state.isShowImg = false
        let timer = setTimeout(() => {
            state.isShowImg = true
            window.clearTimeout(timer)
        }, 500)
    },
    {
        immediate: true,
    }
)

onMounted(() => {
    console.log(route)
    console.log(route.query.a)
    console.log(route.params.text)
    console.log(Params)
})

let jump = () => {
    window.location.href = "http://wwww.baidu.com"
}
</script>

<style></style>
