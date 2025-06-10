<template>
    <slot name="header"></slot>
    <slot :data="res" name="data"></slot>
    <div class="title2">defineExpose测试 {{ title }}</div>
    <slot></slot>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue"
let count = ref(0)
let res = reactive(['张三', '李四', '王五'])
let porps = defineProps({
    title: {
        type: String,
        default: "2",
    },
})

onMounted(() => {
    console.log('%c [ title ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', porps.title)
})

let func = () => {
    console.log('%c [ func ]-20', 'font-size:13px; background:pink; color:#bf2c9f;', count)
}



defineExpose({
    count, func
})
</script>

<style lang="scss" scoped>
.title2 {
    color: greenyellow;
}
</style>
