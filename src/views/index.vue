<template>
    <div class="scr h-10vh overflow-y-scroll overflow-x-hidden" @scroll="onScroll">
        <div class="h-100vh"></div>
    </div>
    <video style="height: 300px;width: 300px;background-color: #fff;" controls playsinline
        src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"></video>

    <px-space>
        <px-button>Primary</px-button>
        <px-button theme="success">Success Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="warning">Warning Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="danger">Danger Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="info">Info Pixelium Design – 基于 Vue 的像素风 UI 组件库</px-button>
        <px-button theme="sakura">Sakura</px-button>
    </px-space>
    <el-button @click="$router.push('/vueUse')">vueUes</el-button>
    <el-button @click="$router.push('/videoRecorder')" type="success">屏幕录制</el-button>
    <el-button @click="$router.push('/cameraRecorder')" type="primary">摄像头录制</el-button>
    <el-button @click="$router.push('/esign')" type="warning">电子签名</el-button>
    <!-- 主题切换模块 -->
    <div class="theme-section">
        <color-picker v-model:pureColor="pureColor" @pureColorChange="handleThemeChange" />
        <p>当前计数: {{ count }} </p>
    </div>

    <!-- 文件操作模块 -->
    <div class="file-section">
        <el-button type="primary" size="default" @click="handleChooseFiles">选择文件夹</el-button>
        <block v-if="filesContent !== ''">
            {{ filesContent }}
        </block>
        <vue-office-docx :src="prvFile" style="height: 500px" />
        <iframe v-if="prvFile" style="width: 300px; height: 300px" :src="prvFile" frameborder="0"></iframe>
    </div>

    <!-- 组件测试模块 -->
    <div class="component-section">
        <comPone ref="defineExposeTest" title="组件测试">
            <h4>插槽内容</h4>
            <template v-slot:header>
                <h3>具名插槽</h3>
            </template>
            <template v-slot:data="res">
                作用域插槽数据: {{ res.data[0] }}
                作用域插槽数据: {{ res.data[0] }}
            </template>
            <!-- <h4>插槽</h4> -->
        </comPone>
    </div>

    <!-- 路由导航模块 -->
    <div class="navigation-section">
        <RouterLink to="/progressBar">圆形进度条</RouterLink>
        <button @click="navigateWithQuery">query路由</button>
        <button @click="navigateWithParams">params路由</button>
        <button @click="() => router.push('/luckyDraw')">抽奖</button>
    </div>

    <!-- 列表操作模块 -->
    <div class="list-section">
        <ul>
            <li v-for="(item, index) in lists">
                <input type="checkbox" :value="item.text" />
                {{ item.text }}
            </li>
        </ul>
        <button @click="handleRemoveItem">删除第一项</button>
    </div>

    <!-- 视频播放模块 -->
    <div class="media-section">
        <video-player id="playerId" class="vjs-custom-skin" :options="playerOptions" />
    </div>

    <!-- 树形选择模块 -->
    <div class="tree-section">
        <el-tree-select ref="elTree" v-model="value" :data="data" check-strictly :render-after-expand="false"
            style="width: 240px" :props="{ value: 'label', label: 'label' }" node-key="value"
            @node-click="handleTreeNodeClick" />
        <el-button type="success" @click="handleDownload">下载测试</el-button>
    </div>

    <!-- 轮播图模块 -->
    <div class="carousel-section">
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="(item, index) in 4" :key="item">
                <img v-if="index == 0" style="width: 100%" src="https://bing.img.run/uhd.php" alt="Bing图片1" />
                <img v-if="index == 1" style="width: 100%" src="https://bing.img.run/rand_uhd.php" alt="Bing随机图片" />
                <img v-if="index == 2" style="width: 100%" src="https://api.dujin.org/pic/ghibli/qyqx" alt="吉卜力图片1" />
                <img v-if="index == 3" style="width: 100%" src="https://api.dujin.org/pic/ghibli" alt="吉卜力图片2" />
            </el-carousel-item>
        </el-carousel>
    </div>

    <!-- 布局测试模块 -->
    <div class="layout-section">
        <div class="testP">粘性布局测试</div>
        <div class="header">固定标题</div>
        <div class="container">
            <p v-for="i in 28" :key="i">测试内容 {{ i }}</p>
        </div>
    </div>

    <!-- 图片懒加载模块 -->
    <div class="lazy-load-section">
        <div class="img-box">
            <template v-for="item in 20">
                <img class="img-item" data-src="https://bing.img.run/rand.php" src="" :alt="'图片' + item">
            </template>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, reactive, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
import { PiniaTest } from '../stores/PiniaTest'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'
import videojs from 'video.js'
import { ElMessage } from 'element-plus'
import VueOfficeDocx from '@vue-office/docx'
import Vconsole from 'vconsole'
import comPone from '../components/defineExpose.vue'

/* 开发环境启用vConsole */
if (process.env.NODE_ENV == "development") {
    new Vconsole()
}

const Store = PiniaTest()
const { count } = storeToRefs(useCounterStore())
const router = useRouter()

const pureColor = ref(null)
const prvFile = ref(null)
const filesContent = ref('')

const lists = reactive([
    { id: 1, text: '张' },
    { id: 2, text: '吕' },
    { id: 3, text: '王' }
])

const value = ref(null)
const elTree = ref(null)
const data = [
    {
        value: "1",
        label: "Level one 1",
        children: [
            {
                value: "1-1",
                label: "Level two 1-1",
                children: [
                    {
                        value: "1-1-1",
                        label: "Level three 1-1-1",
                    },
                ],
            },
        ],
    },
    {
        value: "2",
        label: "Level one 2",
        children: [
            {
                value: "2-1",
                label: "Level two 2-1",
                children: [
                    {
                        value: "2-1-1",
                        label: "Level three 2-1-1",
                    },
                ],
            },
            {
                value: "2-2",
                label: "Level two 2-2",
                children: [
                    {
                        value: "2-2-1",
                        label: "Level three 2-2-1",
                    },
                ],
            },
        ],
    },
    {
        value: "3",
        label: "Level one 3",
        children: [
            {
                value: "3-1",
                label: "Level two 3-1",
                children: [
                    {
                        value: "3-1-1",
                        label: "Level three 3-1-1",
                    },
                ],
            },
            {
                value: "3-2",
                label: "Level two 3-2",
                children: [
                    {
                        value: "3-2-1",
                        label: "Level three 3-2-1",
                    },
                ],
            },
        ],
    },
]

const playerOptions = ref({
    playbackRates: [0.5, 1.0, 2.0],
    autoplay: false,
    muted: true,
    loop: false,
    controls: true,
    preload: 'auto',
    language: 'zh-CN',
    aspectRatio: '16:9',
    fluid: true,
    sources: [{
        type: 'video/webm',
        src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4'
    }],
    poster: '',
    notSupportedMessage: '此视频暂无法播放，请稍后再试',
    controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: true,
        fullscreenToggle: true
    }
})
const defineExposeTest = ref()

/** 选择文件夹并读取内容 */
const handleChooseFiles = async () => {
    if (!window.showDirectoryPicker) {
        ElMessage({
            message: "当前浏览器不支持目录选择功能",
            type: "error",
        });
        return;
    }

    try {
        const handle = await showDirectoryPicker();
        await openFiles(handle);

        let fileHandle = null;
        for (const child of handle.children) {
            if (child.kind === "file") {
                fileHandle = child;
                break;
            }
        }

        if (!fileHandle) {
            ElMessage({
                message: "未找到任何文件",
                type: "warning",
            });
            return;
        }

        const file = await fileHandle.getFile();

        if (!file.type.startsWith("text/")) {
            ElMessage({
                message: "仅支持文本文件",
                type: "warning",
            });
            return;
        }

        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = (e) => {
            filesContent.value = e.target.result;
        };

        reader.onerror = (e) => {
            console.error("文件读取失败:", e.target.error);
            ElMessage({
                message: "文件读取失败，请检查文件格式",
                type: "error",
            });
        };
    } catch (error) {
        ElMessage({
            message: "目录选择失败：" + error.message,
            type: "error",
        });
    }
};

/** 递归打开文件夹 */
const openFiles = async (filePaths) => {
    if (!filePaths.kind || filePaths.kind === "file") {
        return;
    }

    const entries = await filePaths.values();
    filePaths.children = [];

    for await (const entry of entries) {
        filePaths.children.push(entry);
        await openFiles(entry);
    }
};

/** 删除列表第一项 */
const handleRemoveItem = () => {
    lists.shift()
}

/** 处理树节点点击事件 */
const handleTreeNodeClick = () => {
    setTimeout(() => {
        const data = elTree.value.getCurrentKey()
    }, 100)
}

/** 切换主题颜色 */
const handleThemeChange = () => {
    document.documentElement.style.setProperty('--theme-color', pureColor.value)
    Store.themeColor = pureColor.value
}

const appInstance = getCurrentInstance().appContext.config.globalProperties

onMounted(async () => {
    initLazyLoadObserver()
    pureColor.value = Store.themeColor

    /* 初始化视频播放器 */
    const player = videojs('playerId', {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fluid: false,
        height: 200,
        width: 300
    })

    /* 测试数据请求 */
    fetchTestData()
})

/** 初始化图片懒加载观察者 */
const initLazyLoadObserver = () => {
    const images = document.querySelectorAll('.img-item')
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target
                img.src = img.dataset.src
                observer.unobserve(entry.target)
            }
        })
    })
    images.forEach(item => observer.observe(item))
}

/** 获取测试数据 */
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

/** 使用query参数跳转路由 */
const navigateWithQuery = () => {
    router.push({
        path: '/r',
        query: { a: 2 },
        params: { text: '这是路径跳转的参数' }
    })
}

/** 使用params参数跳转路由 */
const navigateWithParams = () => {
    router.push({
        name: 'rou',
        params: { text: 'name传参' }
    })
}

/** 下载文件 */
const handleDownload = () => {
    const link = document.createElement('a')
    link.style.display = 'none'
    link.href = 'https://down.vmaxcloud.com.cn/apk/%E6%B5%8B%E8%AF%95223.zip'
    link.download = '测试223.zip'
    link.click()
}
const onScroll = (e) => {
    console.log("🐛 e -412", " 👉", e)
    
}
</script>

<style lang="scss" scoped>
p,
button,
div {
    color: var(--theme-color)
}

.testP {
    background-color: gray;
    line-height: 72px;
    position: sticky;
    top: 0px;
    background-color: gray;
    line-height: 72px;
    position: sticky;
    top: 0px;
}

.header {
    background-color: black;
    color: white;
    text-align: center;
    font-size: 36px;
    line-height: 72px;
    position: sticky;
    top: 0px;
}

.container {
    background-color: gray;
    color: white;
    font-size: 24px;
    line-height: 48px;
    white-space: pre;
    background-color: gray;
    color: white;
    font-size: 24px;
    line-height: 48px;
    white-space: pre;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    background-color: #d3dce6;
}

:deep(.title2) {
    color: rgb(47, 192, 115) !important;
}

.img-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .img-item {
        width: 70%;
        height: 100px;
        margin-bottom: 20px;
    }
}
</style>
