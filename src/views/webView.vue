<template>
    <div>2</div>
    <el-button type="primary" size="default" @click="openCamera"></el-button>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
import Vconsole from "vconsole";
new Vconsole();

const openCamera = () => {
    window.uni.postMessage({ type: "camera" });
};

const visibilitychangeFn = () => {
    if (document.visibilityState === "visible") {
        console.log("🟣 visible -10", "👉", document.visibilityState);
    } else if (document.visibilityState === "hidden") {
        console.log("🟣 visible -10", "👉", document.visibilityState);
    }
};

const onIsOffListen = () => {
    console.log("🟣  -24", "👉", "您的网络是否在线：" + window.navigator.onLine);
};

onMounted(() => {
    document.addEventListener("visibilitychange", visibilitychangeFn);
    document.addEventListener("online", onIsOffListen);
    document.addEventListener("offline", onIsOffListen);
});

onUnmounted(() => {
    document.removeEventListener("visibilitychange", visibilitychangeFn);
    document.removeEventListener("online", onIsOffListen);
    document.removeEventListener("offline", onIsOffListen);
});
</script>

<style lang="scss" scoped></style>
