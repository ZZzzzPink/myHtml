<script setup>
import { RouterLink, RouterView } from "vue-router"
import { onMounted, ref, reactive } from "vue"

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
        console.log(`网站已运行${days}天`)
    } else {
        let Rday = Math.floor(ms / dayTime2)
        console.log(`网站已运行${Rday}个小时`)
    }
}

onMounted(() => {
    //运行时间
    daysDistance()

})
</script>

<template>
    <RouterView />
</template>

<style>
body {
    font-family: PingFangSC-Regular !important;
}
</style>
