<script setup>
import { RouterLink, RouterView } from "vue-router"
import { onMounted, ref, reactive } from "vue"
import { RandomWord } from "./api/ComponentsApi/Aword"
let OneWord = ref("")

//运行时间
let daysDistance = () => {
    //清除控制台输出
    console.clear()

    //原始时间
    let time = new Date()

    let date1 = Date.parse("25 July 2023 16:37:00 GMT")
    let date2 = time.getTime()
    //计算两个日期之间相差的毫秒数的绝对值
    var ms = Math.abs(date2 - date1)
    //毫秒数除以一天的毫秒数,就得到了天数
    let dayTime = 24 * 3600 * 1000
    let dayTime2 = 60 * 60 * 1000
    if (ms > dayTime) {
        var days = Math.floor(ms / (24 * 3600 * 1000))
        console.log(`网站已运行${days}天`, "font-size:12px;color:orange;line-height: 25px;")
    } else {
        let Rday = Math.floor(ms / dayTime2)
        console.log(`网站已运行${Rday}个小时`, "font-size:12px;color:orange;line-height: 25px;")
    }
}

//一言
let getOneWord = async () => {
    let res = await RandomWord()
    OneWord.value = res.hitokoto
}

onMounted(() => {
    //运行时间
    daysDistance()

    //一言
    getOneWord()
})
</script>

<template>
    <RouterView />
    <span class="OneWord">{{ OneWord }}</span>
</template>

<style>

body {
    font-family: PingFangSC-Regular;
}

.OneWord {
    position: fixed;
    bottom: 0px;
    left: 50%;
    font-size: 13px;
    transform: translateX(-50%);
    color: white;
    user-select: none;
}
</style>
