<template>
    <div>defineExpose测试 {{ title }}</div>
</template>

<script setup>
import { onMounted, reactive, ref, watch } from "vue"
let count = ref(0)

defineProps({
    title: {
        type: String,
        default: "2",
    },
})

onMounted(() => {
    console.log('%c [ title ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', title)
})



defineExpose({
    count,
})
</script>

<style lang="scss"></style>
