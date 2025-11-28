<template>
  <div class="particle-container">
    <canvas ref="canvasRef" v-show="controlMode !== 'draw'"></canvas>
    <canvas ref="drawCanvasRef" v-if="controlMode === 'draw'" class="draw-canvas"></canvas>
    
    <!-- 简化的顶部控制栏 -->
    <div class="top-bar">
      <select v-model="selectedModel" @change="changeModel" class="model-select">
        <option value="heart">❤️ 爱心</option>
        <option value="flower">🌸 花朵</option>
        <option value="saturn">🪐 土星</option>
        <option value="buddha">🧘 佛像</option>
        <option value="firework">🎆 烟花</option>
        <option value="spiral">🌀 螺旋</option>
        <option value="star">⭐ 星星</option>
        <option value="cube">🎲 魔方</option>
        <option value="dna">🧬 DNA</option>
        <option value="wave">🌊 波浪</option>
      </select>
      
      <button @click="showHelp = !showHelp" class="icon-btn" :class="{ active: showHelp }" title="操作说明">
        {{ showHelp ? '✕' : '❓' }}
      </button>
      
      <button @click="toggleFullscreen" class="icon-btn" title="全屏">
        {{ isFullscreen ? '🔙' : '🖥️' }}
      </button>
      
      <select v-model="controlMode" @change="switchControlMode" class="mode-select">
        <option value="gesture">🤏 手势</option>
        <option value="draw">✍️ 写字</option>
        <option value="mouse">🖱️ 鼠标</option>
      </select>
      
      <button v-if="controlMode === 'draw'" @click="clearDrawing" class="icon-btn" title="清空画布">
        🗑️
      </button>
    </div>
    
    <!-- 操作说明面板 -->
    <transition name="fade">
      <div v-if="showHelp" class="help-panel">
        <h3>🎮 操作说明</h3>
        <div class="help-content">
          <div class="help-section">
            <h4>🤏 手势控制</h4>
            <ul>
              <li><strong>捏合/张开：</strong>控制粒子缩放</li>
              <li><strong>旋转手指：</strong>旋转粒子</li>
            </ul>
          </div>
          <div class="help-section">
            <h4>✍️ 写字模式</h4>
            <ul>
              <li><strong>伸出食指：</strong>开始绘制轨迹</li>
              <li><strong>点击🗑️按钮：</strong>清空画板</li>
            </ul>
          </div>
          <div class="help-section">
            <h4>🖱️ 鼠标控制</h4>
            <ul>
              <li><strong>滚轮滚动：</strong>缩放粒子</li>
            </ul>
          </div>
          <div class="help-section">
            <h4>� 提示</h4>
            <ul>
              <li>保持手距离摄像头30-50cm</li>
              <li>确保光线充足</li>
              <li>手掌正面朝向摄像头</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    
    <!-- 摄像头视图 -->
    <div class="camera-view" v-if="controlMode !== 'mouse'">
      <div class="camera-header">
        <span class="status-dot" :class="{ active: handsDetected }"></span>
        <span class="gesture-text">{{ currentGesture }}</span>
        <span class="scale-text" v-if="controlMode === 'gesture'">{{ particleScale.toFixed(1) }}x</span>
      </div>
      <div class="video-wrapper">
        <video ref="videoRef" autoplay playsinline></video>
        <canvas ref="handCanvasRef"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'
import { Hands } from '@mediapipe/hands'
import { Camera } from '@mediapipe/camera_utils'

const canvasRef = ref(null)
const videoRef = ref(null)
const handCanvasRef = ref(null)
const drawCanvasRef = ref(null)
const selectedModel = ref('heart')
const isFullscreen = ref(false)
const particleScale = ref(1)
const handsDetected = ref(false)
const controlMode = ref('gesture')
const currentGesture = ref('等待手势')
const showHelp = ref(false)

let scene, camera, renderer, particles, hands, cameraStream
let mouseScale = 1
let rotationSpeed = 0.002
let lastPinchDistance = 0
let lastPinchAngle = 0
let smoothedRotationSpeed = 0
const smoothingFactor = 0.3
const rotationSmoothingFactor = 0.2

let drawingPoints = []
let drawingParticles = null
let drawCtx = null
let lastDrawPoint = null
let drawThrottle = 0
const DRAW_THROTTLE_MS = 16

const modelColors = {
  heart: '#ff1744',
  flower: '#ff4081',
  saturn: '#00bcd4',
  buddha: '#ffd700',
  firework: '#ff6b35',
  spiral: '#7c4dff',
  star: '#ffd700',
  cube: '#00e676',
  dna: '#00bfa5',
  wave: '#2979ff'
}

const modelShapes = {
  heart: () => {
    const shape = []
    for (let i = 0; i < 3000; i++) {
      const t = (i / 3000) * Math.PI * 2
      const x = 16 * Math.pow(Math.sin(t), 3)
      const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)
      const z = (Math.random() - 0.5) * 5
      shape.push(new THREE.Vector3(x * 0.3, y * 0.3, z))
    }
    return shape
  },
  flower: () => {
    const shape = []
    for (let i = 0; i < 3000; i++) {
      const t = (i / 3000) * Math.PI * 2
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
    for (let i = 0; i < 3000; i++) {
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
    for (let i = 0; i < 3000; i++) {
      const phi = Math.random() * Math.PI * 2
      const theta = Math.random() * Math.PI
      const r = Math.pow(Math.random(), 0.5) * 8
      const x = r * Math.sin(theta) * Math.cos(phi)
      const y = r * Math.sin(theta) * Math.sin(phi)
      const z = r * Math.cos(theta)
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  spiral: () => {
    const shape = []
    for (let i = 0; i < 3000; i++) {
      const t = (i / 3000) * Math.PI * 8
      const r = t * 0.5
      const x = r * Math.cos(t)
      const y = t * 0.3 - 6
      const z = r * Math.sin(t)
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  star: () => {
    const shape = []
    for (let i = 0; i < 3000; i++) {
      const angle = (i / 3000) * Math.PI * 2
      const points = 5
      const outerRadius = 6
      const innerRadius = 2.5
      const pointIndex = Math.floor((i / 3000) * points * 2)
      const isOuter = pointIndex % 2 === 0
      const r = isOuter ? outerRadius : innerRadius
      const a = angle * points
      const x = r * Math.cos(a)
      const y = r * Math.sin(a)
      const z = (Math.random() - 0.5) * 2
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  cube: () => {
    const shape = []
    const size = 5
    for (let i = 0; i < 3000; i++) {
      const face = Math.floor(Math.random() * 6)
      let x, y, z
      switch(face) {
        case 0: x = size; y = (Math.random() - 0.5) * size * 2; z = (Math.random() - 0.5) * size * 2; break
        case 1: x = -size; y = (Math.random() - 0.5) * size * 2; z = (Math.random() - 0.5) * size * 2; break
        case 2: y = size; x = (Math.random() - 0.5) * size * 2; z = (Math.random() - 0.5) * size * 2; break
        case 3: y = -size; x = (Math.random() - 0.5) * size * 2; z = (Math.random() - 0.5) * size * 2; break
        case 4: z = size; x = (Math.random() - 0.5) * size * 2; y = (Math.random() - 0.5) * size * 2; break
        case 5: z = -size; x = (Math.random() - 0.5) * size * 2; y = (Math.random() - 0.5) * size * 2; break
      }
      shape.push(new THREE.Vector3(x, y, z))
    }
    return shape
  },
  dna: () => {
    const shape = []
    for (let i = 0; i < 3000; i++) {
      const t = (i / 3000) * Math.PI * 10
      const r = 3
      const x1 = r * Math.cos(t)
      const z1 = r * Math.sin(t)
      const x2 = r * Math.cos(t + Math.PI)
      const z2 = r * Math.sin(t + Math.PI)
      const y = (i / 3000) * 20 - 10
      
      if (i % 2 === 0) {
        shape.push(new THREE.Vector3(x1, y, z1))
      } else {
        shape.push(new THREE.Vector3(x2, y, z2))
      }
    }
    return shape
  },
  wave: () => {
    const shape = []
    const gridSize = 50
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * 0.5
        const z = (j - gridSize / 2) * 0.5
        const dist = Math.sqrt(x * x + z * z)
        const y = Math.sin(dist * 0.5) * 3
        shape.push(new THREE.Vector3(x, y, z))
      }
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
  if (drawingParticles) scene.remove(drawingParticles)
  
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
    color: modelColors[selectedModel.value],
    size: 0.2,
    transparent: true,
    opacity: 0.9,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending
  })
  
  particles = new THREE.Points(geometry, material)
  scene.add(particles)
}

const animate = () => {
  requestAnimationFrame(animate)
  
  if (particles && controlMode.value !== 'draw') {
    particles.rotation.y += rotationSpeed
    particles.scale.set(particleScale.value, particleScale.value, particleScale.value)
  }
  
  renderer.render(scene, camera)
}

const initHandTracking = async () => {
  hands = new Hands({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands@0.4.1646424915/${file}`
  })
  
  hands.setOptions({
    maxNumHands: 1,
    modelComplexity: 1,
    minDetectionConfidence: 0.7,
    minTrackingConfidence: 0.7
  })
  
  hands.onResults(controlMode.value === 'draw' ? onDrawResults : onHandsResults)
  
  const stream = await navigator.mediaDevices.getUserMedia({ 
    video: { width: 640, height: 480 }
  })
  videoRef.value.srcObject = stream
  
  cameraStream = new Camera(videoRef.value, {
    onFrame: async () => {
      await hands.send({ image: videoRef.value })
    },
    width: 640,
    height: 480
  })
  cameraStream.start()
}

const onHandsResults = (results) => {
  const canvas = handCanvasRef.value
  const ctx = canvas.getContext('2d')
  canvas.width = videoRef.value.videoWidth
  canvas.height = videoRef.value.videoHeight
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  if (results.multiHandLandmarks && results.multiHandLandmarks.length >= 1) {
    handsDetected.value = true
    const landmarks = results.multiHandLandmarks[0]
    
    const thumbTip = landmarks[4]
    const indexTip = landmarks[8]
    const wrist = landmarks[0]
    
    // 计算拇指食指距离（控制缩放）
    const pinchDistance = Math.sqrt(
      Math.pow(thumbTip.x - indexTip.x, 2) +
      Math.pow(thumbTip.y - indexTip.y, 2)
    )
    
    const smoothedPinch = lastPinchDistance * (1 - smoothingFactor) + pinchDistance * smoothingFactor
    lastPinchDistance = smoothedPinch
    
    // 计算拇指食指之间的角度（控制旋转）
    const pinchAngle = Math.atan2(indexTip.y - thumbTip.y, indexTip.x - thumbTip.x)
    
    let angleDelta = pinchAngle - lastPinchAngle
    if (angleDelta > Math.PI) angleDelta -= 2 * Math.PI
    if (angleDelta < -Math.PI) angleDelta += 2 * Math.PI
    
    // 根据距离控制缩放
    if (smoothedPinch < 0.05) {
      currentGesture.value = '🤏 捏合缩小'
      particleScale.value = Math.max(0.3, particleScale.value - 0.02)
    } else if (smoothedPinch > 0.15) {
      currentGesture.value = '🖐️ 张开放大'
      particleScale.value = Math.min(3, particleScale.value + 0.02)
    } else {
      currentGesture.value = '✋ 保持'
    }
    
    // 根据角度控制旋转
    if (Math.abs(angleDelta) > 0.04) {
      const targetSpeed = angleDelta * 0.25
      smoothedRotationSpeed = smoothedRotationSpeed * (1 - rotationSmoothingFactor) + targetSpeed * rotationSmoothingFactor
      rotationSpeed = smoothedRotationSpeed
    } else {
      smoothedRotationSpeed *= 0.95
      rotationSpeed = smoothedRotationSpeed
    }
    
    lastPinchAngle = pinchAngle
    
    // 绘制拇指食指连线
    ctx.beginPath()
    ctx.moveTo(thumbTip.x * canvas.width, thumbTip.y * canvas.height)
    ctx.lineTo(indexTip.x * canvas.width, indexTip.y * canvas.height)
    ctx.strokeStyle = smoothedPinch < 0.08 ? '#ff3366' : '#00ff88'
    ctx.lineWidth = 5
    ctx.stroke()
    
    // 绘制关键点
    ;[thumbTip, indexTip].forEach((landmark, i) => {
      const x = landmark.x * canvas.width
      const y = landmark.y * canvas.height
      
      ctx.beginPath()
      ctx.arc(x, y, 8, 0, 2 * Math.PI)
      ctx.fillStyle = smoothedPinch < 0.08 ? '#ff3366' : '#00ff88'
      ctx.fill()
    })
    
    const connections = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]]
    connections.forEach(([start, end]) => {
      const startPoint = landmarks[start]
      const endPoint = landmarks[end]
      ctx.beginPath()
      ctx.moveTo(startPoint.x * canvas.width, startPoint.y * canvas.height)
      ctx.lineTo(endPoint.x * canvas.width, endPoint.y * canvas.height)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'
      ctx.lineWidth = 2
      ctx.stroke()
    })
  } else {
    handsDetected.value = false
    currentGesture.value = '等待手势'
    rotationSpeed = 0.002
  }
}

const onDrawResults = (results) => {
  const canvas = handCanvasRef.value
  const ctx = canvas.getContext('2d')
  canvas.width = videoRef.value.videoWidth
  canvas.height = videoRef.value.videoHeight
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  if (!drawCtx && drawCanvasRef.value) {
    drawCtx = drawCanvasRef.value.getContext('2d')
    drawCanvasRef.value.width = window.innerWidth
    drawCanvasRef.value.height = window.innerHeight
  }
  
  if (results.multiHandLandmarks && results.multiHandLandmarks.length >= 1) {
    handsDetected.value = true
    const landmarks = results.multiHandLandmarks[0]
    const indexTip = landmarks[8]
    
    currentGesture.value = '✍️ 绘制中'
    const x = (1 - indexTip.x) * window.innerWidth
    const y = indexTip.y * window.innerHeight
    
    const now = Date.now()
    if (drawCtx && now - drawThrottle > DRAW_THROTTLE_MS) {
      drawThrottle = now
      
      if (lastDrawPoint) {
        const dist = Math.sqrt(
          Math.pow(x - lastDrawPoint.x, 2) +
          Math.pow(y - lastDrawPoint.y, 2)
        )
        
        if (dist > 3) {
          drawCtx.beginPath()
          drawCtx.moveTo(lastDrawPoint.x, lastDrawPoint.y)
          drawCtx.lineTo(x, y)
          drawCtx.strokeStyle = modelColors[selectedModel.value]
          drawCtx.lineWidth = 8
          drawCtx.lineCap = 'round'
          drawCtx.lineJoin = 'round'
          drawCtx.stroke()
          
          lastDrawPoint = { x, y }
        }
      } else {
        lastDrawPoint = { x, y }
      }
    }
    
    ctx.beginPath()
    ctx.arc(indexTip.x * canvas.width, indexTip.y * canvas.height, 10, 0, 2 * Math.PI)
    ctx.fillStyle = modelColors[selectedModel.value]
    ctx.fill()
  } else {
    handsDetected.value = false
    currentGesture.value = '等待手势'
    lastDrawPoint = null
  }
}

const clearDrawing = () => {
  drawingPoints = []
  lastDrawPoint = null
  if (drawCtx && drawCanvasRef.value) {
    drawCtx.clearRect(0, 0, drawCanvasRef.value.width, drawCanvasRef.value.height)
  }
}

const changeModel = () => {
  createParticles()
  if (controlMode.value === 'draw') {
    clearDrawing()
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
  }
}

const switchControlMode = () => {
  if (controlMode.value !== 'mouse') {
    if (cameraStream) cameraStream.stop()
    if (hands) hands.close()
    if (videoRef.value && videoRef.value.srcObject) {
      videoRef.value.srcObject.getTracks().forEach(track => track.stop())
    }
    initHandTracking()
  } else {
    if (cameraStream) cameraStream.stop()
    if (hands) hands.close()
    if (videoRef.value && videoRef.value.srcObject) {
      videoRef.value.srcObject.getTracks().forEach(track => track.stop())
    }
    handsDetected.value = false
    currentGesture.value = '等待手势'
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
  if (cameraStream) cameraStream.stop()
  if (hands) hands.close()
  if (renderer) renderer.dispose()
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.particle-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background:
    radial-gradient(ellipse at top left, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at bottom right, rgba(118, 75, 162, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at center, #1a1a2e 0%, #000000 100%);
}

canvas {
  display: block;
}

.draw-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
}

.top-bar {
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  align-items: center;
  background: rgba(20, 20, 40, 0.9);
  padding: 10px 15px;
  border-radius: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.model-select, .mode-select {
  padding: 8px 16px;
  border-radius: 20px;
  border: 2px solid transparent;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.2);
  outline: none;
}

.model-select:hover, .mode-select:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.35) 0%, rgba(118, 75, 162, 0.35) 100%);
  border-color: rgba(102, 126, 234, 0.5);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transform: translateY(-1px);
}

.model-select:focus, .mode-select:focus {
  border-color: rgba(102, 126, 234, 0.8);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
}

.model-select option, .mode-select option {
  background: #1a1a2e;
  color: #fff;
  padding: 10px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.icon-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: scale(1.1);
}

.icon-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.help-panel {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 500px;
  width: 90%;
  background: rgba(20, 20, 40, 0.95);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 99;
  color: #fff;
}

.help-panel h3 {
  margin: 0 0 15px 0;
  font-size: 18px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.help-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.help-section h4 {
  margin: 0 0 8px 0;
  font-size: 14px;
  color: #a0a0ff;
}

.help-section ul {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}

.help-section li {
  font-size: 13px;
  line-height: 1.8;
  color: #ccc;
  position: relative;
  padding-left: 15px;
}

.help-section li:before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
}

.help-section strong {
  color: #00ff88;
}

.camera-view {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 280px;
  background: rgba(20, 20, 40, 0.9);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.camera-header {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: rgba(0, 0, 0, 0.3);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #666;
  transition: all 0.3s;
}

.status-dot.active {
  background: #00ff88;
  box-shadow: 0 0 10px #00ff88;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.gesture-text {
  flex: 1;
  font-size: 12px;
  color: #fff;
}

.scale-text {
  font-size: 12px;
  font-weight: 700;
  color: #00ff88;
  font-family: monospace;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .top-bar {
    top: 10px;
    padding: 8px 12px;
    gap: 8px;
  }
  
  .model-select, .mode-select {
    padding: 6px 10px;
    font-size: 12px;
  }
  
  .icon-btn {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
  
  .help-panel {
    top: 60px;
    padding: 15px;
  }
  
  .help-panel h3 {
    font-size: 16px;
  }
  
  .help-section h4 {
    font-size: 13px;
  }
  
  .help-section li {
    font-size: 12px;
  }
  
  .camera-view {
    bottom: 10px;
    right: 10px;
    width: 200px;
  }
  
  .camera-header {
    padding: 8px 10px;
  }
  
  .gesture-text, .scale-text {
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .top-bar {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .help-panel {
    max-width: 95%;
  }
  
  .camera-view {
    width: 160px;
    bottom: 5px;
    right: 5px;
  }
}

@media (hover: none) and (pointer: coarse) {
  .model-select, .mode-select, .icon-btn {
    min-height: 44px;
  }
}
</style>