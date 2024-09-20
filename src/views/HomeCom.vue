<template>
    <div class="headerBox">
        <div class="flex_box">
            <div class="logoBox">
                <div class="text">
                    <h1>{{ oneWord == "" ? "Hi hello !!" : oneWord }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue"
import { RandomWord } from "../api/ComponentsApi/Aword"
let oneWord = ref("")
onMounted(function () {
    getYiYan()
})

let getYiYan = async () => {
    let res = await RandomWord()
    oneWord.value = res.hitokoto
}
</script>

<style lang="scss" scoped>
.headerBox {
    height: 100%;
    // padding-bottom: 5px;
    box-sizing: border-box;
    // background-image: url("https://api.dujin.org/pic/ghibli/qyqx");
    background-image: url("https://imgapi.xl0408.top/index.php");
    // background-image: url('https://t.mwm.moe/fj');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // 禁止选择文字
    user-select: none;
    // 图片禁止拖动
    -webkit-user-drag: none;

    .flex_box {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        .logoBox {
            display: flex;
            align-items: center;

            .text {
                background: linear-gradient(to right, #ffffff, #7e7e7e, #000000);
                /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
                -webkit-background-clip: text;
                /*将设置的背景颜色限制在文字中*/
                -webkit-text-fill-color: transparent;
                /*给文字设置成透明*/
                animation: ani 15s infinite ease-in-out;
            }

            @keyframes ani {
                0% {
                    background-position: 250px 200px;
                }

                100% {
                    background-position: 850px 400px;
                }
            }

            .logo {
                background-color: yellow;
                background: inherit;
            }
        }

        .videoPlay {
            width: 600px;
            height: 600px;
        }
    }
}
</style>
