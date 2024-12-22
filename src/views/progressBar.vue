<template>
    <div class="progress-container">
        <div class="progress-ring">
            <span class="progress-value">5526</span>
            <span class="progress-label">步数进度</span>
            <svg>
                <circle
                    class="progress-circle-background"
                    cx="50%"
                    cy="50%"
                    r="40"
                    fill="transparent"
                    stroke="#e0e0e0"
                    stroke-width="4"
                ></circle>
                <circle
                    class="progress-circle-foreground"
                    cx="50%"
                    cy="50%"
                    r="40"
                    fill="transparent"
                    stroke="#007aff"
                    stroke-width="4"
                ></circle>
            </svg>
        </div>
    </div>
    <div class="header">
        <div class="seep">
            <!-- :style="{ width: width + '%' }" -->
            <div class="seep-text">
                <!-- <div class="seep-box"></div> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue"
let width = ref(10)
</script>

<style lang="scss">
.header {
    width: 100vw;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.seep {
    position: relative;
    margin: 0;
    padding: 0;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background-image: linear-gradient(to right, #fbfcfe, #1059fd);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: bgc 3s forwards;
    // border-bottom:20px #888 solid ;
    // border-bottom-width: 30px;
    // border-left:0px transparent solid ;
    // border-right:0px transparent solid ;
    // border-top:0px transparent solid ;
}

@keyframes bgc {
    0% {
        width: 0%;
    }
    100% {
        width: 300px;
    }
}
// .seep::after {
//     content: " ";
//     border-radius:50% ;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 300px;
//     height: 300px;
//     background-color: gray;
// }

.seep-text {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background-color: #fff;
}
.seep-box {
    // height: 100%;
    // animation: bgc 1s ease-in forwards;
    // background-color: #a22121;
    // background-size: 0% 5px;
    // background-position: right bottom;
}


/* 整体容器样式 */
.progress-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
}

/*进度环容器样式*/
.progress-ring {
    position: relative;
    width: 100px;
    height: 100px;
}

/*进度值样式*/
.progress-value {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: #007aff;
}

/*进度标签样式*/
.progress-label {
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    color: #888;
}

/* 背景圆环样式 */
.progress-circle-background {
    stroke-dasharray: 251.2; /*2*PI*r,这里r=40*/
    stroke-dashoffset: 0;
}

/* 前景圆环样式 */
.progress-circle-foreground {
    stroke-dasharray: 251.2; /*2*PI*r,这里r=40*/
    stroke-dashoffset: calc(251.2 - (251.2 * (5526 / 8000)));
    stroke-linecap: round;
}

/*SVG样式*/
svg {
    width: 100%;
    height: 100%;
}
</style>
