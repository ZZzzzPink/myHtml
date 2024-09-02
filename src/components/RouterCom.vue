<template>
  <p>路由测试</p>
  <p>vue3</p>
  <p @click="jump">点击跳转</p>
  <object
    type="text/html"
    data="https://cn.bing.com/?FORM=Z9FD1"
    style="width: 1000px; height: 1000px"
  >
    <p>backup content</p>
  </object>
  <!--第二种：使用iframe 标签-->
  <iframe
    src="https://cn.bing.com/?FORM=Z9FD1"
    style="width: 100vw; height: 100vh"
  ></iframe>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink, useRoute } from "vue-router";

let route = useRoute();
let Params = route.params.text;
onMounted(() => {
  console.log(route);
  
  console.log(route.query.a);
  console.log(route.params.text);
  console.log(Params);
});

let jump = () => {
  window.location.href = "http://wwww.baidu.com";
};
</script>

<style></style>
