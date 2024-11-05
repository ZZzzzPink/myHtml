<template>
    <comPone ref="defineExposeTest" title="传值"></comPone>
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

    <el-tree-select
        ref="elTree"
        v-model="value"
        :data="data"
        check-strictly
        :render-after-expand="false"
        style="width: 240px"
        :props="{ value: 'label', label: 'label' }"
        node-key="value"
        @node-click="cli()"
    />
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

    <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :lazy-render="false"
        :style="{ width: '100vw', height: '100vh' }"
    />

    <el-carousel :interval="4000" type="card" height="400px">
        <el-carousel-item v-for="(item, index) in 4" :key="item">
            <!-- <h3 text="2xl" justify="center">{{ item }}</h3> -->
            <img
                v-if="index == 0"
                style="width: 100%"
                src="https://bing.img.run/uhd.php"
                alt=""
                srcset=""
            />
            <img
                v-if="index == 2"
                style="width: 100%"
                src="https://api.dujin.org/pic/ghibli/qyqx"
                alt=""
                srcset=""
            />
            <img
                v-if="index == 1"
                style="width: 100%"
                src="https://bing.img.run/rand_uhd.php"
                alt=""
                srcset=""
            />
            <img
                v-if="index == 3"
                style="width: 100%"
                src="https://api.dujin.org/pic/ghibli"
                alt=""
                srcset=""
            />
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
import { PiniaTest } from "../stores/PiniaTest"
import { storeToRefs } from "pinia"
import videojs from "video.js"
import comPone from "../components/defineExpose.vue"
let { num, com } = storeToRefs(PiniaTest())

let test = getCurrentInstance().appContext.config.globalProperties

let defineExposeTest = ref()

function title() {
    if (defineExposeTest.value) {
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
body {
    background-image: url("https://bing.img.run/rand.php");
    background-size: cover;
    background-attachment: fixed;
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
