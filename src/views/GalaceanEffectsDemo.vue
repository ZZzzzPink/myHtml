<template>
    <div class="container">
        <div id="animation" style="width: 100vw; height: 100vh"></div>
    </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";

import { Player } from "@galacean/effects";

let player = null;

let hongbao = "https://mdn.alipayobjects.com/mars/afts/file/A*REA-SqCgNF4AAAAAAAAAAAAADlB4AQ";
let zhifubao = "https://mdn.alipayobjects.com/mars/afts/file/A*c5XgQ4jW1YEAAAAAAAAAAAAADlB4AQ";

onMounted(() => {
    const container = document.getElementById("animation");
    player = new Player({
        container,
        interactive: true, //！！！设置了此参数才响应交互
        onError: err => {
            console.error(err);
        },
    });
    player.on("click", item => {
        // 设置多个元素的点击交互需要根据 name 判断是否指定元素
        console.log("trigger onItemClicked");
        console.log(item.name);
    });
    player.on("message", item => {
        console.log(item.name); // 设置多个交互元素需要根据 name 判断是否指定元素
        if (item.phrase === spec.MESSAGE_ITEM_PHRASE_BEGIN) {
            // 元素创建
        } else if (item.phrase === spec.MESSAGE_ITEM_PHRASE_END) {
            // 元素销毁
        }
    });
    player.loadScene(hongbao);
});
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    background-color: #36d;
    background-size: 100% 100%;
}
</style>
