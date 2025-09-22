<template>
    <div class="vueuse-demo">
        <h2 ref="animate">VueUse 实用示例</h2>
        <button @click="play">开始动画</button>
        <button @click="pause">暂停动画</button>
        <button @click="reverse">反转动画</button>
        <button @click="finish">结束动画</button>
        <button @click="cancel">取消动画</button>
        <section>
            <h3>鼠标位置 (useMouse)</h3>
            <p>X: {{ x }}, Y: {{ y }}</p>
        </section>

        <section>
            <h3>窗口尺寸 (useWindowSize)</h3>
            <p>宽度: {{ width }}px, 高度: {{ height }}px</p>
        </section>

        <section>
            <h3>本地存储 (useLocalStorage)</h3>
            <input v-model="name" placeholder="输入你的名字" />
            <p>本地存储的名字: {{ name }}</p>
        </section>

        <section>
            <h3>防抖输入 (useDebounceFn)</h3>
            <input v-model="inputValue" @input="debouncedInput" placeholder="防抖输入" />
            <p>防抖后的值: {{ debouncedValue }}</p>
        </section>

        <section>
            <h3>节流点击 (useThrottleFn)</h3>
            <button @click="throttledClick">节流点击按钮</button>
            <p>点击次数: {{ clickCount }}</p>
        </section>

        <section>
            <h3>深色模式切换 (useDark)</h3>
            <button @click="toggleDark">切换深色模式</button>
            <p>当前模式: {{ isDark ? '深色' : '浅色' }}</p>
        </section>

        <section>
            <h3>剪贴板复制 (useClipboard)</h3>
            <input v-model="copyText" placeholder="输入要复制的文本" />
            <button @click="copy">复制文本</button>
            <p>复制状态: {{ copied ? '已复制' : '未复制' }}</p>
        </section>

        <section>
            <h3>监听元素外部的点击(onClickOutside)</h3>
            <p>是否外部被点击:{{ dropdown ? '是' : '否' }}</p>
            <div>
                <div ref="clickRef" @click="dropdown = false">这是内部</div>
            </div>
        </section>

        <section>
            <h3>按键监听(onKeyStroke)</h3>
            <p>按下的键是:{{ keyDown }}</p>
        </section>

        <section>
            <h3> 电池状态(useBattery)</h3>
            <p>正在充电:{{ charging }}</p>
            <p>充满电之前的秒数:{{ chargingTime }}</p>
            <p>完全放电之前的秒数:{{ dischargingTime }}</p>
            <p>当前电量:{{ level * 100 + '%' }}</p>
        </section>

        <section>
            <h3> 设备位置和方向变化速度(useDeviceMotion)</h3>
            <div v-if="!isSupported">
                浏览器不支持此 API
            </div>
            <template v-else>
                <pre v-if="!permissionGranted"
                    lang="json">{{ { acceleration, accelerationIncludingGravity, rotationRate, interval } }}</pre>
                <div v-else>
                    Permission is required
                </div>
                <button v-if="!permissionGranted" @click="ensurePermissions">
                    请求权限
                </button>
            </template>
        </section>

        <section>
            <h3> 网页的设备的物理方向(useDeviceOrientation)</h3>
            <div v-if="!isAbsolute">
                浏览器不支持此 API
            </div>
            <template v-else>
                <p>{{ alpha }}</p>
                <p>{{ beta }}</p>
                <p>{{ gamma }}</p>
            </template>
        </section>

        <section>
            <h3> 屏幕放大倍数(useDevicePixelRatio)</h3>
            <p>{{ pixelRatio }}</p>
        </section>

        <section>
            <h3> 流式传输(useDisplayMedia)</h3>
            <button @click="start">点击开始</button>
            <div>
                <video ref="video" muted autoplay controls class="w-100% h-100%"></video>
            </div>
        </section>

        <section>
            <h3> 反应式元素的悬停状态(useElementHover)</h3>
            <div>
                <button ref="myHoverableElement">{{ isHovered ? '被hover' : '未被hover' }}</button>
                <button ref="myHoverableElement1">{{ isHovered1 ? '被hover' : '未被hover' }}</button>
            </div>
        </section>

        <section>
            <h3> 反应式 FPS（每秒帧数）(useFps)</h3>
            <p>{{ fps }}</p>
        </section>
    </div>
</template>

<script setup>
import { nextTick, ref, useTemplateRef, watchEffect } from 'vue'
import { useMouse, useWindowSize, useLocalStorage, useDebounceFn, useThrottleFn, useDark, useClipboard, useAnimate, onClickOutside, onKeyStroke, useBattery, useDeviceMotion, useDeviceOrientation, useDevicePixelRatio, useDisplayMedia, useElementHover , useFps } from '@vueuse/core'

// 鼠标位置
const { x, y } = useMouse()

// 窗口尺寸
const { width, height } = useWindowSize()

// 本地存储
const name = useLocalStorage('name', '')

// 防抖输入
const inputValue = ref('')
const debouncedValue = ref('')
const updateDebouncedValue = () => {
    debouncedValue.value = inputValue.value
}
const debouncedInput = useDebounceFn(updateDebouncedValue, 500)

// 节流点击
const clickCount = ref(0)
const increment = () => {
    clickCount.value++
}
const throttledClick = useThrottleFn(increment, 1000)

// 深色模式切换
const isDark = useDark()
const toggleDark = () => {
    isDark.value = !isDark.value
}

// 剪贴板复制
const copyText = ref('')
const { copied, copy } = useClipboard({
    source: copyText
})

// 动画
const animateRef = useTemplateRef('animate')
const {
    play,
    pause,
    reverse,
    finish,
    cancel,
    startTime,
    currentTime,
    playbackRate,
    playState,
    replaceState,
    pending,
} = useAnimate(
    animateRef,
    [
        { color: 'red', clipPath: 'circle(20% at 0% 30%)' },
        { color: 'blue', clipPath: 'circle(20% at 50% 80%)' },
        { color: 'green', clipPath: 'circle(20% at 100% 30%)' },
    ],
    {
        duration: 3000,
        iterations: 5,
        direction: 'alternate',
        easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
        immediate: true
    },
)

// 点击外部元素
const clickRef = useTemplateRef('clickRef')
const dropdown = ref(false)
onClickOutside(clickRef, (event) => {
    console.log("🐛 event -134", " 👉", event)
    dropdown.value = true
})

// 按键监听
const keyDown = ref('')
onKeyStroke(true, (event) => {
    console.log("🐛 event -134", " 👉", event.key)
    keyDown.value = event.key
})

// 电池信息
const { charging, chargingTime, dischargingTime, level } = useBattery()

// 设备位置和方向变化速度
const {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval,
    isSupported,
    ensurePermissions,
    permissionGranted,
} = useDeviceMotion()

// 网页设备方向
const {
    isAbsolute,
    alpha,
    beta,
    gamma,
} = useDeviceOrientation()

// 屏幕放大倍数
const { pixelRatio } = useDevicePixelRatio()


// 流式传输
const { stream, start } = useDisplayMedia()


const videoRef = useTemplateRef('video')
watchEffect(() => {
    if (videoRef.value) videoRef.value.srcObject = stream.value
})

// 反应式元素的悬停状态
const myHoverableElement = useTemplateRef('myHoverableElement')
const isHovered = useElementHover(myHoverableElement)

const myHoverableElement1 = useTemplateRef('myHoverableElement1')
const isHovered1 = useElementHover(myHoverableElement1)

// fps
const fps = useFps()
</script>

<style scoped>
p,
div,
span {
    user-select: none;
}

.vueuse-demo {
    max-width: 600px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
}

section {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: gray;
}

button {
    margin-top: 6px;
    padding: 6px 12px;
    cursor: pointer;
}

input {
    padding: 6px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 6px;
}
</style>