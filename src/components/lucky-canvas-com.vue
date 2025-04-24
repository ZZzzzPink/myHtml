<template>
    <div class="lucky-wheel">
        <!-- 跑马灯容器 -->
        <div class="marquee">
            <div class="marquee-inner">🎉 欢迎来到幸运大转盘！祝您好运！ 🎉</div>
        </div>

        <canvas ref="wheelCanvas" :width="size" :height="size"></canvas>
        <div class="pointer"></div>

        <!-- 结果显示 -->
        <div class="result-display" v-if="result">抽奖结果：{{ result }}</div>

        <div class="controls">
            <button @click="startSpin">开始抽奖</button>
            <div class="sector-controls">
                <div v-for="(sector, index) in sectorRatios" :key="index" class="sector-control">
                    <label>扇区 {{ index + 1 }} 占比：</label>
                    <input
                        type="number"
                        min="1"
                        max="100"
                        v-model.number="sectorRatios[index]"
                        @change="updateSectorRatios"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch, computed } from "vue"

const props = defineProps({
    sectorCount: {
        type: Number,
        default: 6,
    },
    prizes: {
        type: Array,
        default: () => ["奖品1", "奖品2", "奖品3", "奖品4", "奖品5", "奖品6"],
    },
})

const size = ref(500)
const wheelCanvas = ref(null)
const ctx = ref(null)
const colors = ["#FFDDDD", "#DDFFDD", "#DDDDFF", "#FFFFDD", "#FFDDFF", "#DDFFFF"]
const spinning = ref(false)
const resultIndex = ref(0)
const result = ref('')
const rotation = ref(0)
const targetRotation = ref(0)
const sectorRatios = ref(new Array(props.sectorCount).fill(100 / props.sectorCount))

const totalRatio = computed(() => sectorRatios.value.reduce((sum, ratio) => sum + ratio, 0))

const updateSectorRatios = () => {
    drawWheel()
}

const drawWheel = () => {
    if (!ctx.value) return

    const center = size.value / 2
    const radius = size.value / 2
    let startAngle = 0

    ctx.value.clearRect(0, 0, size.value, size.value)

    for (let i = 0; i < props.sectorCount; i++) {
        const ratio = sectorRatios.value[i] / totalRatio.value
        const endAngle = startAngle + 2 * Math.PI * ratio

        ctx.value.beginPath()
        ctx.value.moveTo(center, center)
        ctx.value.arc(center, center, radius, startAngle, endAngle)
        ctx.value.fillStyle = colors[i % colors.length]
        ctx.value.fill()

        // 绘制奖品文字
        ctx.value.save()
        ctx.value.translate(center, center)
        ctx.value.rotate((startAngle + endAngle) / 2)
        ctx.value.textAlign = "right"
        ctx.value.fillStyle = "#000"
        ctx.value.font = "16px Arial"
        ctx.value.fillText(props.prizes[i], radius - 20, 10)
        ctx.value.restore()

        startAngle = endAngle
    }
}

const startSpin = () => {
    if (spinning.value) return
    spinning.value = true
    
    // 根据扇区比例计算结果
    const randomValue = Math.random() * totalRatio.value
    let cumulativeRatio = 0
    for (let i = 0; i < sectorRatios.value.length; i++) {
        cumulativeRatio += sectorRatios.value[i]
        if (randomValue <= cumulativeRatio) {
            resultIndex.value = i
            break
        }
    }

    // 增加随机旋转圈数（3-8圈）
    const randomSpins = Math.floor(Math.random() * 5) + 3
    targetRotation.value = rotation.value + 360 * randomSpins
    animate()
}

const animate = () => {
    if (!spinning.value) return

    // 缓动效果
    const remaining = targetRotation.value - rotation.value
    const speed = Math.min(remaining / 50, 10)
    rotation.value += speed

    if (rotation.value >= targetRotation.value) {
        rotation.value = targetRotation.value % 360
        spinning.value = false
        result.value = props.prizes[resultIndex.value]
        alert(`恭喜获得：${result.value}`)
        return
    }

    ctx.value.save()
    ctx.value.translate(size.value / 2, size.value / 2)
    ctx.value.rotate((rotation.value * Math.PI) / 180)
    ctx.value.translate(-size.value / 2, -size.value / 2)
    drawWheel()
    ctx.value.restore()

    requestAnimationFrame(animate)
}

onMounted(() => {
    ctx.value = wheelCanvas.value.getContext("2d")
    drawWheel()
})

watch(() => props.sectorCount, () => {
    sectorRatios.value = new Array(props.sectorCount).fill(100 / props.sectorCount)
    drawWheel()
})
</script>

<style lang="scss" scoped>
.lucky-wheel {
    position: relative;
    width: 500px;
    height: 500px;
    margin: 0 auto;

    .marquee {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20px;
        overflow: hidden;
        background: #f0f0f0;

        .marquee-inner {
            display: inline-block;
            padding-left: 100%;
            white-space: nowrap;
            animation: marquee 10s linear infinite;
            font-size: 14px;
            color: #ff0000;
        }
    }

    @keyframes marquee {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }

    canvas {
        display: block;
        margin: 20px auto 0;
    }

    .pointer {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 40px solid red;
        transform: translate(-50%, -50%) rotate(0deg);
        z-index: 1;
    }

    button {
        margin: 20px 10px;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
    }

    .sector-controls {
        margin: 20px;
        .sector-control {
            margin: 10px 0;
            label {
                margin-right: 10px;
            }
            input {
                width: 60px;
                padding: 5px;
            }
        }
    }
}
</style>
