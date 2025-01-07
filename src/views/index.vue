<template>
    {{ count }}
    <block v-if="filesContent !== ''">
        {{ filesContent }} 
    </block>
    <el-button type="primary" size="default" @click="choseFiles">点击选择文件夹</el-button>

    <input type="file" @change="fileChange($event)"></input>
    <vue-office-docx :src="prvFile" style="height: 500px;" />
    <!-- @rendered="renderedHandler"
        @error="errorHandler" -->
    <iframe v-if="prvFile&& prvFile!==''" style="width: 300px;height: 300px;" :src="prvFile" frameborder="0"></iframe>
    <comPone ref="defineExposeTest" title="传值">
            
            <h4>插槽</h4>
        <template v-slot:header>
            <h3 >具名插槽</h3>
        </template>
        <template v-slot:data="res" >
            作用域
            {{ res.data[0] }}
        </template>
    <!-- <h4>插槽</h4> -->
    </comPone>
    <RouterLink to="/progressBar">跳转圆形进度条</RouterLink>
    <div class="c-#0284c7">unoCSS使用</div>
    <ul>
        <li v-for="(item, index) in lists">
            <input type="checkbox" :value="item.text" />
            {{ item.text }}
        </li>
    </ul>
    <button @click="remove">删除</button>
    <video class="video-js" id="playerId">
        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" />
    </video>

    <el-tree-select ref="elTree" v-model="value" :data="data" check-strictly :render-after-expand="false"
        style="width: 240px" :props="{ value: 'label', label: 'label' }" node-key="value" @node-click="cli()" />
    <el-button type="success" @click="down">下载</el-button>

    <a-button type="dashed">aaa</a-button>
    <el-button type="info">ddd</el-button>
    <button @click="rout">编程式路由 query</button>
    <button @click="routP">编程式路由 params</button>
    <button @click="routT">跳转测试</button>
    <RouterLink style="text-decoration: none" to="/n" class="flex">点击跳转</RouterLink>
    <p>vue3</p>
    <p>{{ num }}</p>
    <p>{{ com }}</p>

    <van-calendar title="日历" :poppable="false" :show-confirm="false" :lazy-render="false"
        :style="{ width: '100vw', height: '100vh' }" />

    <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="(item, index) in 4" :key="item">
            <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
            <img v-if="index == 0" style="width: 100%" src="https://bing.img.run/uhd.php" alt="" srcset="" />
            <img v-if="index == 2" style="width: 100%" src="https://api.dujin.org/pic/ghibli/qyqx" alt="" srcset="" />
            <img v-if="index == 1" style="width: 100%" src="https://bing.img.run/rand_uhd.php" alt="" srcset="" />
            <img v-if="index == 3" style="width: 100%" src="https://api.dujin.org/pic/ghibli" alt="" srcset="" />
        </el-carousel-item>
    </el-carousel>

    <div class="testP">粘性布局测试</div>
    <div class="test">
        <p>test</p>
        <p>2</p>
        <p>1</p>
        <p>test</p>
        <p>1</p>
        <p>1</p>
        <p>22仓库的冲突代码</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>12121</p>
        <p>1</p>
        <p>1</p>
        <p>2</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
    </div>

    <div class="header">这是固定的标题</div>
    <div class="container">
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
        <p>2</p>
    </div>
</template>

<script setup>
import {
    onMounted,
    defineComponent,
    reactive,
    toRefs,
    watch,
    ref,
    onBeforeUnmount,
    getCurrentInstance,
    
} from "vue"
import { RouterLink, useRouter } from "vue-router"
import { image } from "../api/api/image.js"
// pinia选项式写法
import { PiniaTest } from "../stores/PiniaTest"
// pinia组合式写法
import {useCounterStore} from "../stores/counter.js"
import { storeToRefs } from "pinia"
import videojs from "video.js"
import comPone from "../components/defineExpose.vue"
import { ElMessage } from 'element-plus'
import VueOfficeDocx from '@vue-office/docx'
import Vconsole from 'vconsole'
if (process.env.NODE_ENV == 'development') {
    let vConsole = new Vconsole()
}
let a={name:'张三'}
let obj={a}
let obj1={a:{name:'张三'}}
let obj3={}
obj3.self='a'
console.log('%c [ obj ]-135', 'font-size:13px; background:pink; color:#bf2c9f;', obj,obj1,obj3)

console.log('%c [ import.meta.env ]-136', 'font-size:13px; background:pink; color:#bf2c9f;', import.meta.env.VITE_ENV,import.meta.env.VITE_TITLE)

const modules = import.meta.glob("@/views/**/*.vue")
console.log("%c [ modules ]-157", "font-size:13px; background:pink; color:#bf2c9f;", modules)

// pinia选项式写法
let Store= PiniaTest()
console.log('%c [ Store ]-147', 'font-size:13px; background:pink; color:#bf2c9f;', Store.num)

// pinia组合式写法
let { count,doubleCount }=storeToRefs(useCounterStore())
let testFn=()=>{
    let store=useCounterStore()
    store.increment()
}
testFn()

for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}



console.log('%c [ count ]-155', 'font-size:13px; background:pink; color:#bf2c9f;', count.value)

let test = getCurrentInstance().appContext.config.globalProperties

let defineExposeTest = ref()

let prvFile = ref(null)
let filesContent = ref('')
let fileChange = (e) => {
    prvFile.value = false
    let file = e.target.files[0]
    console.log('%c [ file ]-148', 'font-size:13px; background:pink; color:#bf2c9f;', file.slice(0,100))
    let type = file.type
    console.log('%c [ type ]-135', 'font-size:13px; background:pink; color:#bf2c9f;', type)
    // type.includes('image')|| type.includes('video')

    let axiosArray = [];
    let chunkList = [];
    let chunkSize = file.size / 6;
    let current = 0;
    let i = 0;
    let fileName = new Date().getTime() + "_" + file.name;
    while (current < 6) {
        chunkList.push({
            chunk: file.slice(current * chunkSize, (current + 1) * chunkSize),
            fileName: current + "_" + fileName
        });
        current++;
    }
    let conFile=[]
    chunkList.forEach((item)=>{
        conFile.push(item.chunk)
    })
    const blob = new Blob(conFile, {
        type
    })
    console.log('%c [ blob ]-171', 'font-size:13px; background:pink; color:#bf2c9f;', blob)
    let blodUrl= window.URL.createObjectURL(blob)
    setTimeout(()=>{
        prvFile.value=''
    },2000)

    setTimeout(()=>{
        prvFile.value=blodUrl
    },4000)
   console.log('%c [ blodUrl ]-175', 'font-size:13px; background:pink; color:#bf2c9f;', blodUrl)
    console.log('%c [ conFile ]-169', 'font-size:13px; background:pink; color:#bf2c9f;', conFile)
    console.log('%c [ chunkList ]-160', 'font-size:13px; background:pink; color:#bf2c9f;', chunkList)


    if (type !== '' && type) {
        var url = window.URL.createObjectURL(file);
        prvFile.value = url
        console.log('%c [ url ]-139', 'font-size:13px; background:pink; color:#bf2c9f;', url)
    } else {
        ElMessage({
            message: 'Warning, this is a warning message.',
            type: 'warning',
        })
    }


}
function title() {
    if (defineExposeTest.value) {
        console.log('%c [ defineExposeTest.value ]-162', 'font-size:13px; background:pink; color:#bf2c9f;', defineExposeTest.value)
        console.log("Current count:", defineExposeTest.value.count)
        console.log("Count after increment:", defineExposeTest.value.count)
    }
}

console.log(
    "%c [ test ]-147",
    "font-size:13px; background:pink; color:#bf2c9f;",
    test.$test({
        url: "https://api.paugram.com/wallpaper/",
        method: "get",
    })
)

const value = ref(null)
let lists = reactive([
    { id: 1, text: "张" },
    { id: 2, text: "吕" },
    { id: 3, text: "王" },
])

const data = reactive([
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
])
let elTree = ref()

/**
 * @description: 选择文件夹
 * @return {*}
 */
let choseFiles = async () => {
    let handle = await showDirectoryPicker()
    await openFiles(handle)
    let fileHandle = handle.children[3]
    if (fileHandle.kind !== 'file') {
        ElMessage({
            message: '没有选择文件，暂不展示',
            type: 'warning',
        })
        return
    }
    let file = await fileHandle.getFile()
    let reader = new FileReader()
    reader.readAsText(file)
    reader.onload = e => {
        console.log(e.target.result)
        filesContent.value = e.target.result
    }
}
let openFiles = async (filePaths) => {
    if (!filePaths.kind || filePaths.kind === 'file') {
        return
    }
    // entries: 异步迭代器，用于遍历目录下的所有文件
    let entries = await filePaths.values()
    filePaths.children = []
    for await (const entry of entries) {
        filePaths.children.push(entry)
        await openFiles(entry)
    }
}
let remove = () => {
    //注意这里是shift
    lists.shift()
}
/**
 * @description: 获取组件的值
 * @return {*}
 */
let cli = () => {
    // 延迟100毫秒执行以下操作，以确保DOM操作或异步操作的完成
    setTimeout(() => {
        // 获取当前树组件选中项的唯一键值
        let data = elTree.value.getCurrentKey()
        // 打印选中项的名称和ID
        console.log("name==>", value.value, "id==>", data)
    }, 100)
}

let router = useRouter()
let imageUrl = ref("")

onMounted(async () => {
    title()
    // imageUrl.value = await image();
    // console.log(com.value);
    let option = {
        controls: true,
        preload: "auto", // 预加载
        autoplay: false, // 是否自动播放
        fluid: false, // 自适应宽高
        height: 200,
        width: 300,
    }
    const player = videojs("playerId", option)
    // player.src("https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4")
    player.on("ended", () => {
        //播放完成
        console.log(2)
    })
    player.on("play", (e) => {
        console.log(3, e)
    })

    let index = 1
    setInterval(() => {
        localStorage.setItem("index", (index += 1))
    }, 1000)

    console.log(
        "%c [ getData() ]-292",
        "font-size:13px; background:pink; color:#bf2c9f;",
        getData()
    )
})
/**
 * @description: 全局挂载request测试
 * @return {*}
 */
let getData = async () => {
    test.$test({
        // url: "https://api.paugram.com/wallpaper/",
        url: "https://v1.hitokoto.cn/",
        method: "get",
    })
        .then((res) => {
            console.log(
                "%c [ res ]-308",
                "font-size:13px; background:pink; color:#bf2c9f;",
                res.hitokoto + "---" + res.from
            )
        })
        .catch((err) => {
            console.log(err)
        })
}

onBeforeUnmount(() => {
    console.log("[ unmount ] >", "unmount")
})

let rout = () => {
    // 路径
    router.push({ path: "/r", query: { a: 2 }, params: { text: "这是路径跳转的参数" } })
}

let routT = () => {
    router.push({ path: "/t" })
}

let routP = () => {
    // 名称
    router.push({ name: "rou", params: { text: "name传参" } })
}
/**
 * @description: 手动创建下载文件
 * @return {*}
 */
let down = () => {
    const a = document.createElement("a")

    a.style.display = "none"
    // const url = window.URL.create0bjectURL('https://down.vmaxcloud.com.cn/apk/%E6%B5%8B%E8%AF%95223.zip');
    a.href = "https://down.vmaxcloud.com.cn/apk/%E6%B5%8B%E8%AF%95223.zip"
    a.download = "测试223.zip"
    // document.body.appendchild(a)
    a.click()
    //监听下载完成事件
    // window.URL.revokeobjectURL(url)
    // document.body.removechild(a)
}
</script>

<style>
body{
    background-image: url("https://bing.img.run/rand.php");
  background-size: cover;
  background-attachment: fixed;
  max-width: 100vw !important;
  overflow-x: hidden
}
.testP {
    background-color: gray;
    line-height: 72px;
    position: sticky;
    top: 0px;
}

.test {
    /* width: 100px; */
    /* height: 100px;*/
}

.header {
    background-color: black;
    color: white;
    text-align: center;
    font-size: 36px;
    line-height: 72px;
    /* 实现吸附效果 */
    position: sticky;
    /* 设置 position 为 sticky */
    top: 0px;
    /* 设置 top、right、bottom、left 属性中的至少一个 */
}

.container {
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
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
