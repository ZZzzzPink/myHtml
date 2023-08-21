<template>
    <p>路由测试</p>


    <p>vue3</p>
</template>
  
  
<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRoute } from 'vue-router'

let route = useRoute()
let Params=route.params.text
onMounted(() => {
    console.log(route.query.a);
    console.log(route.params.text);
    console.log(Params);
})

</script>
  
<style></style>