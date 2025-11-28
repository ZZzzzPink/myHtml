<template>
  <div class="particle-container">
    <canvas ref="canvasRef"></canvas>
    
    <div class="control-panel">
      <div class="panel-header">
        <h3>✨ 粒子控制台</h3>
      </div>
      <div class="control-group">
        <label>🎨 模型选择</label>
        <select v-model="selectedModel" @change="changeModel">
          <option value="heart">❤️ 爱心</option>
          <option value="flower">🌸 花朵</option>
          <option value="saturn">🪐 土星</option>
          <option value="buddha">🧘 佛像</option>
          <option value="firework">🎆 烟花</option>
        </select>
      </div>
      <div class="control-group">
        <label>🎨 粒子颜色</label>
        <div class="color-picker-wrapper">
          <input type="color" v-model="particleColor" @input="updateColor">
          <span class="color-value">{{ particleColor }}</span>
        </div>
      </div>
      <button @click="toggleFullscreen" class="fullscreen-btn">
        <span>{{ isFullscreen ? '🔙 退出全屏' : '🖥️ 全屏模式' }}</span>
      </button>
      <div class="control-group">
        <label>🎮 控制模式</label>
        <select v-model="controlMode" @change="switchControlMode">
          <option value="gesture">手势控制</option>
          <option value="mouse">鼠标控制</option>
        </select>
      </div>
      <div class="status-indicator" :class="{ active: handsDetected }">
        <span class="dot"></span>
        {{ controlMode === 'gesture' ? (handsDetected ? '✋ 手势已识别' : '👋 等待手势') : '🖱️ 鼠标控制中' }}
      </div>
    </div>
    
    <div class="camera-view">
      <div class="camera-header">
        <span class="camera-title">📹 实时监控</span>
        <span class="status-badge" :class="{ active: handsDetected }">
          {{ handsDetected ? 'ACTIVE' : 'STANDBY' }}
        </span>
      </div>
      <div class="video-wrapper">
        <video ref="videoRef" autoplay playsinline></video>
        <canvas ref="handCanvasRef"></canvas>
      </div>
      <div class="gesture-info">
        <div class="info-item">
          <span class="label">手势距离</span>
          <span class="value">{{ gestureDistance.toFixed(3) }}</span>
        </div>
        <div class="info-item">
          <span class="label">缩放倍数</span>
          <span class="value">{{ particleScale.toFixed(2) }}x</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: `${Math.min(particleScale / 3 * 100, 100)}%` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import * as handTrack from 'handtrackjs'

const canvasRef = ref(null)
const videoRef = ref(null)
const handCanvasRef = ref(null)
const selectedModel = ref('heart')
const particleColor = ref('#ff0066')
const isFullscreen = ref(false)
const gestureDistance = ref(0)
const particleScale = ref(1)
const handsDetected = ref(false)
const controlMode = ref('mouse')

let scene, camera, renderer, particles, handModel
let smoothedDistance = 0
const smoothingFactor = 0.25
let mouseScale = 1
let detectionInterval = null
let lastHandPositions = []

const modelShapes = {
  heart: () => {
    const shape = []
    for (let i = 0; i < 2000; i++) {
      const t = (i / 2000) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(t), 3)
      const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)
      const z = (Math.random() - 0.5) * 5
      shape.push(new THREE.Vector3(x * 0.3, y * 0.3, z))
    }
    return shape
  },
  flower: () => {
    const shape = []
    for (let i = 0; i < 2000; i++) {
      const t = (i / 2000) * Math.PI * 2
      const r = 5 * (1 + 0.5 * Math.sin(5 * t))
      const x = r * Math.cos(t)
      const y = r * Math.sin(t)
      const z = (Math.random() - 0.5) * 3
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  saturn: () => {
    const shape = []
    for (let i = 0; i < 1500; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 4
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)
      shape.push(new THREE.Vector3(x, y, z))
    }
    for (let i = 0; i < 500; i++) {
      const t = Math.random() * Math.PI * 2
      const r = 6 + Math.random() * 2
      const x = r * Math.cos(t)
      const y = (Math.random() - 0.5) * 0.5
      const z = r * Math.sin(t)
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  buddha: () => {
    const shape = []
    for (let i = 0; i < 2000; i++) {
      const phi = Math.acos(2 * Math.random() - 1)
      const theta = Math.random() * Math.PI * 2
      const r = 3 + Math.abs(Math.sin(phi * 3)) * 2
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.cos(phi) + 2
      const z = r * Math.sin(phi) * Math.sin(theta)
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  firework: () => {
    const shape = []
    for (let i = 0; i < 2000; i++) {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      const r = Math.random() * 8
      const x = r * Math.sin(theta) * Math.cos(phi)
      const y = r * Math.sin(theta) * Math.sin(phi)
      const z = r * Math.cos(theta)
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  }
}

const initThree = () => {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 20
  
  renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 1)
  
  createParticles()
  animate()
}

const createParticles = () => {
  if (particles) scene.remove(particles)
  
  const positions = modelShapes[selectedModel.value]()
  const geometry = new THREE.BufferGeometry()
  const posArray = new Float32Array(positions.length * 3)
  
  positions.forEach((pos, i) => {
    posArray[i * 3] = pos.x
    posArray[i * 3 + 1] = pos.y
    posArray[i * 3 + 2] = pos.z
  })
  
  geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  
  const material = new THREE.PointsMaterial({
    color: particleColor.value,
    size: 0.15,
    transparent: true,
    opacity: 0.8
  })
  
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

const animate = () => {
  requestAnimationFrame(animate)
  
  if (particles) {
    particles.rotation.y += 0.002
    particles.scale.set(particleScale.value, particleScale.value, particleScale.value)
  }
  
  renderer.render(scene, camera)
}

const initHandTracking = async () => {
  const modelParams = {
    flipHorizontal: true,
    maxNumHands: 2,
    minConfidence: 0.7,
    scoreThreshold: 0.8
  }
  
  handModel = await handTrack.load(modelParams)
  
  const stream = await navigator.mediaDevices.getUserMedia({
    video: {
      width: 640,
      height: 480,
      facingMode: 'user'
    }
  })
  videoRef.value.srcObject = stream
  
  await new Promise(resolve => {
    videoRef.value.onloadedmetadata = resolve
  })
  
  runDetection()
}

const runDetection = () => {
  detectionInterval = setInterval(async () => {
    if (!videoRef.value || !handModel) return
    
    const predictions = await handModel.detect(videoRef.value)
    const canvas = handCanvasRef.value
    const ctx = canvas.getContext('2d')
    
    canvas.width = videoRef.value.videoWidth
    canvas.height = videoRef.value.videoHeight
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    if (predictions && predictions.length >= 2) {
      handsDetected.value = true
      lastHandPositions = predictions.slice(0, 2)
      
      const hand1 = predictions[0].bbox
      const hand2 = predictions[1].bbox
      
      const center1 = {
        x: hand1[0] + hand1[2] / 2,
        y: hand1[1] + hand1[3] / 2
      }
      const center2 = {
        x: hand2[0] + hand2[2] / 2,
        y: hand2[1] + hand2[3] / 2
      }
      
      const rawDistance = Math.sqrt(
        Math.pow(center1.x - center2.x, 2) +
        Math.pow(center1.y - center2.y, 2)
      ) / canvas.width
      
      smoothedDistance = smoothedDistance * (1 - smoothingFactor) + rawDistance * smoothingFactor
      gestureDistance.value = smoothedDistance
      particleScale.value = Math.max(0.3, Math.min(3, smoothedDistance * 5))
      
      predictions.slice(0, 2).forEach((prediction, index) => {
        const [x, y, width, height] = prediction.bbox
        
        ctx.strokeStyle = index === 0 ? '#00ff88' : '#ff0088'
        ctx.lineWidth = 3
        ctx.strokeRect(x, y, width, height)
        
        ctx.fillStyle = index === 0 ? '#00ff88' : '#ff0088'
        ctx.font = '16px Arial'
        ctx.fillText(`Hand ${index + 1}`, x, y - 5)
        
        ctx.beginPath()
        ctx.arc(x + width / 2, y + height / 2, 8, 0, 2 * Math.PI)
        ctx.fillStyle = index === 0 ? '#00ff88' : '#ff0088'
        ctx.fill()
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
        ctx.lineWidth = 2
        ctx.stroke()
      })
      
      ctx.beginPath()
      ctx.moveTo(center1.x, center1.y)
      ctx.lineTo(center2.x, center2.y)
      ctx.strokeStyle = 'rgba(255, 255, 0, 0.8)'
      ctx.lineWidth = 3
      ctx.setLineDash([5, 5])
      ctx.stroke()
      ctx.setLineDash([])
      
    } else {
      handsDetected.value = false
    }
  }, 100)
}

const changeModel = () => {
  createParticles()
}

const updateColor = () => {
  if (particles) {
    particles.material.color.set(particleColor.value)
  }
}

const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
    isFullscreen.value = true
  } else {
    document.exitFullscreen()
    isFullscreen.value = false
  }
}

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const handleWheel = (event) => {
  if (controlMode.value === 'mouse') {
    event.preventDefault()
    const delta = event.deltaY * -0.001
    mouseScale = Math.max(0.3, Math.min(3, mouseScale + delta))
    particleScale.value = mouseScale
    gestureDistance.value = mouseScale / 5
  }
}

const switchControlMode = () => {
  if (controlMode.value === 'gesture') {
    initHandTracking()
  } else {
    if (detectionInterval) {
      clearInterval(detectionInterval)
      detectionInterval = null
    }
    if (videoRef.value && videoRef.value.srcObject) {
      videoRef.value.srcObject.getTracks().forEach(track => track.stop())
    }
    handsDetected.value = false
  }
}

onMounted(() => {
  initThree()
  if (controlMode.value === 'gesture') {
    initHandTracking()
  }
  window.addEventListener('resize', handleResize)
  window.addEventListener('wheel', handleWheel, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('wheel', handleWheel)
  if (detectionInterval) clearInterval(detectionInterval)
  if (videoRef.value && videoRef.value.srcObject) {
    videoRef.value.srcObject.getTracks().forEach(track => track.stop())
  }
  if (handModel) handModel.dispose()
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
.particle-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%);
}

canvas {
  display: block;
}

.control-panel {
  position: absolute;
  top: 20px;
  left: 20px;
  background: linear-gradient(135deg, rgba(30, 30, 60, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%);
  padding: 0;
  border-radius: 16px;
  color: #fff;
  min-width: 260px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.panel-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 20px;
  margin: 0;
}

.panel-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.control-group {
  margin: 0;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.control-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 500;
  color: #a0a0ff;
}

.control-group select {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
}

.control-group select:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
}

.color-picker-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.control-group input[type="color"] {
  width: 50px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
}

.color-value {
  font-family: monospace;
  font-size: 13px;
  color: #a0a0ff;
  flex: 1;
}

.fullscreen-btn {
  width: calc(100% - 40px);
  margin: 15px 20px;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.fullscreen-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

.status-indicator {
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.03);
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #888;
  transition: all 0.3s;
}

.status-indicator.active {
  background: rgba(0, 255, 136, 0.1);
  color: #00ff88;
}

.status-indicator .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #888;
  transition: all 0.3s;
}

.status-indicator.active .dot {
  background: #00ff88;
  box-shadow: 0 0 10px #00ff88;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.camera-view {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 360px;
  background: linear-gradient(135deg, rgba(30, 30, 60, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.camera-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.camera-title {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s;
}

.status-badge.active {
  background: rgba(0, 255, 136, 0.3);
  color: #00ff88;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.video-wrapper {
  position: relative;
  background: #000;
}

.camera-view video {
  width: 100%;
  display: block;
  transform: scaleX(-1);
}

.camera-view canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleX(-1);
}

.gesture-info {
  padding: 16px;
  background: rgba(0, 0, 0, 0.5);
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.info-item .label {
  font-size: 12px;
  color: #a0a0ff;
  font-weight: 500;
}

.info-item .value {
  font-family: 'Courier New', monospace;
  font-size: 16px;
  font-weight: 700;
  color: #00ff88;
  text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.progress-bar {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
  margin-top: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #00ff88 100%);
  border-radius: 3px;
  transition: width 0.2s ease;
  box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}
</style>