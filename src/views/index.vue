<template>
  <a-button type="dashed">aaa</a-button>
  <el-button type="info">ddd</el-button>
  <button @click="rout">编程式路由 query</button>
  <button  @click="routP">编程式路由 params</button>
  <RouterLink style="text-decoration: none" to="/n">点击跳转</RouterLink>
  <p>vue3</p>
  <p>{{ num }}</p>
  <p>{{ com }}</p>

  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="(item, index) in 4" :key="item">
      <!-- <h3 text="2xl" justify="center">{{ item }}</h3>
      -->
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
    <p>22仓库的代码2</p>
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
  <div  class="container">
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
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { image } from "../api/api/image.js";
import { PiniaTest } from "../stores/PiniaTest";
import { storeToRefs } from "pinia";

let { num, com } = storeToRefs(PiniaTest());

let router = useRouter();
let imageUrl = ref("");
onMounted(async () => {
  imageUrl.value = await image();
  console.log(com.value);
});

let rout = () => {
  router.push({ path: "/r", query: { a: 2 } });
};

let routP = () => {
  router.push({ name: "rou", params: { text: "name传参" } });
};
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
