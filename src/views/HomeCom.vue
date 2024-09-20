<template>
    <div class="headerBox">
        <div class="flex_box">
            <div class="logoBox">
                <div class="text">
                    {{ oneWord == "" ? "Hi hello !!" : oneWord }}
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
    oneWord.value = res.hitokoto +'  ---'+ res.from
}
</script>

<style lang="scss" scoped>
:root {
    image-rendering: -webkit-optimize-contrast;
}
@media (max-width: 768px) {
    .headerBox {
        background-image: url("https://t.mwm.moe/mp") !important;
    }
}

.headerBox {
    height: 100%;
    overflow: hidden;
    // padding-bottom: 5px;
    box-sizing: border-box;
    // background-image: url("https://api.dujin.org/pic/ghibli/qyqx");
    // background-image: url("https://imgapi.xl0408.top/index.php");
    background-image: url("https://t.mwm.moe/fj");
    // background-image: url('http://www.98qy.com/sjbz/api.php');
    // background-image: url('https://t.mwm.moe/mp');
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
            line-height: 1;
            .text {
                font-size: 2em;
                background: linear-gradient(to right, #ffffff, #393939, #ffffff);
                /*设置渐变的方向从左到右 颜色从ff0000到ffff00*/
                -webkit-background-clip: text;
                /*将设置的背景颜色限制在文字中*/
                -webkit-text-fill-color: transparent;
                /*给文字设置成透明*/
                animation: ani 10s infinite ease-in-out;
            }

            @keyframes ani {
                0% {
                    background-position: 0px 200px;
                }

                100% {
                    background-position: 850px 400px;
                }
            }
        }
    }
}
</style>
