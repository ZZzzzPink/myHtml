<template>
    <div class="index-page">
        <!-- 动画效果组件 -->
        <WinAnimation />

        <!-- 截图功能模块 -->
        <ScreenCapture />

        <!-- Pixelium UI按钮组 -->
        <section class="ui-demo-section">
            <h3 class="section-title">🎨 UI组件演示</h3>
            <PixeliumButtons />
        </section>

        <!-- 路由导航区域 -->
        <section class="navigation-section">
            <h3 class="section-title">🧭 路由导航</h3>
            <div class="nav-buttons">
                <el-button @click="$router.push('/vueUse')">vueUse</el-button>
                <el-button @click="$router.push('/videoRecorder')" type="success">
                    屏幕录制
                </el-button>
                <el-button @click="$router.push('/cameraRecorder')" type="primary">
                    摄像头录制
                </el-button>
                <el-button @click="$router.push('/esign')" type="warning">
                    电子签名
                </el-button>
                <RouterLink to="/progressBar" class="router-link">
                    圆形进度条
                </RouterLink>
                <button @click="navigateWithQuery" class="nav-btn">query路由</button>
                <button @click="navigateWithParams" class="nav-btn">params路由</button>
                <button @click="() => router.push('/luckyDraw')" class="nav-btn">
                    抽奖
                </button>
            </div>
        </section>

        <!-- 主题切换模块 -->
        <ThemeSwitcher />

        <!-- 文件操作模块 -->
        <FileSelector />

        <!-- 组件测试区域 (defineExpose测试) -->
        <section class="component-test-section">
            <h3 class="section-title">🧪 组件测试</h3>
            <comPone ref="defineExposeTest" title="组件测试">
                <h4>插槽内容</h4>
                <template v-slot:header>
                    <h3>具名插槽</h3>
                </template>
                <template v-slot:data="res">
                    作用域插槽数据: {{ res.data[0] }}
                </template>
            </comPone>
        </section>

        <!-- 列表操作区域 -->
        <section class="list-section">
            <h3 class="section-title">📋 列表操作</h3>
            <ul class="list-container">
                <li v-for="(item, index) in lists" :key="item.id">
                    <input type="checkbox" :value="item.text" />
                    {{ item.text }}
                </li>
            </ul>
            <el-button @click="handleRemoveItem" type="danger" size="small">
                删除第一项
            </el-button>
        </section>

        <!-- 视频播放器模块 -->
        <VideoPlayerSection />

        <!-- 树形选择器模块 -->
        <TreeSelector />

        <!-- 轮播图模块 -->
        <ImageCarousel />

        <!-- 粘性布局测试区域 -->
        <section class="layout-test-section">
            <h3 class="section-title">📌 粘性布局测试</h3>
            <div class="sticky-header">粘性布局测试</div>
            <div class="fixed-header">固定标题</div>
            <div class="content-container">
                <p v-for="i in 28" :key="i">测试内容 {{ i }}</p>
            </div>
        </section>

        <!-- 图片懒加载模块 -->
        <LazyImageGallery />
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import Vconsole from 'vconsole'

// 导入组件
import comPone from '@/components/defineExpose.vue'
import WinAnimation from '@/components/modules/WinAnimation.vue'
import ScreenCapture from '@/components/modules/ScreenCapture.vue'
import PixeliumButtons from '@/components/ui/PixeliumButtons.vue'
import ThemeSwitcher from '@/components/modules/ThemeSwitcher.vue'
import FileSelector from '@/components/modules/FileSelector.vue'
import VideoPlayerSection from '@/components/modules/VideoPlayerSection.vue'
import TreeSelector from '@/components/modules/TreeSelector.vue'
import ImageCarousel from '@/components/modules/ImageCarousel.vue'
import LazyImageGallery from '@/components/modules/LazyImageGallery.vue'

// 开发环境启用vConsole
if (process.env.NODE_ENV === 'development') {
    new Vconsole()
}

// 路由
const router = useRouter()

// 组件引用
const defineExposeTest = ref()

// 列表数据
const lists = reactive([
    { id: 1, text: '张' },
    { id: 2, text: '吕' },
    { id: 3, text: '王' }
])

/**
 * 删除列表第一项
 */
const handleRemoveItem = () => {
    lists.shift()
}

/**
 * 使用query参数跳转路由
 */
const navigateWithQuery = () => {
    router.push({
        path: '/r',
        query: { a: 2 },
        params: { text: '这是路径跳转的参数' }
    })
}

/**
 * 使用params参数跳转路由
 */
const navigateWithParams = () => {
    router.push({
        name: 'rou',
        params: { text: 'name传参' }
    })
}

// 获取全局属性实例
const appInstance = getCurrentInstance().appContext.config.globalProperties

/**
 * 获取测试数据
 */
const fetchTestData = async () => {
    try {
        const res = await appInstance.$test({
            url: 'https://v1.hitokoto.cn/',
            method: 'get'
        })
        console.log('API响应:', res)
    } catch (err) {
        console.error('API请求失败:', err)
    }
}

onMounted(() => {
    console.log('Index页面已挂载')
    fetchTestData()
})
</script>

<style lang="scss" scoped>
.index-page {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* 通用样式 */
.section-title {
    color: var(--theme-color, #409EFF);
    font-size: 20px;
    margin: 30px 0 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--theme-color, #409EFF);
}

/* UI演示区域 */
.ui-demo-section {
    margin: 30px 0;
}

/* 路由导航区域 */
.navigation-section {
    margin: 30px 0;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;

    .nav-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .router-link {
        display: inline-block;
        padding: 8px 15px;
        background-color: #409EFF;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;

        &:hover {
            background-color: #66b1ff;
        }
    }

    .nav-btn {
        padding: 8px 15px;
        background-color: #67C23A;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #85ce61;
        }
    }
}

/* 组件测试区域 */
.component-test-section {
    margin: 30px 0;
    padding: 20px;
    border: 2px dashed #409EFF;
    border-radius: 8px;
}

/* 列表操作区域 */
.list-section {
    margin: 30px 0;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 8px;

    .list-container {
        list-style: none;
        padding: 0;
        margin: 15px 0;

        li {
            padding: 8px 0;
            border-bottom: 1px solid #eee;
            color: var(--theme-color, #606266);

            input {
                margin-right: 10px;
            }

            &:last-child {
                border-bottom: none;
            }
        }
    }
}

/* 粘性布局测试 */
.layout-test-section {
    margin: 30px 0;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 8px;

    .sticky-header {
        background-color: #909399;
        line-height: 72px;
        position: sticky;
        top: 0;
        text-align: center;
        color: white;
        font-weight: bold;
        z-index: 10;
        border-radius: 4px;
        margin-bottom: 10px;
    }

    .fixed-header {
        background-color: #303133;
        color: white;
        text-align: center;
        font-size: 36px;
        line-height: 72px;
        position: sticky;
        top: 0;
        z-index: 9;
        border-radius: 4px;
        margin-bottom: 10px;
    }

    .content-container {
        background-color: #909399;
        color: white;
        font-size: 24px;
        line-height: 48px;
        padding: 20px;
        border-radius: 4px;

        p {
            margin: 5px 0;
        }
    }
}

/* 全局主题色应用 */
:deep(.title2) {
    color: rgb(47, 192, 115) !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .index-page {
        padding: 10px;
    }

    .section-title {
        font-size: 18px;
    }

    .navigation-section .nav-buttons {
        flex-direction: column;
    }

    .layout-test-section {
        .fixed-header {
            font-size: 24px;
        }

        .content-container {
            font-size: 18px;
            line-height: 36px;
        }
    }
}
</style>
