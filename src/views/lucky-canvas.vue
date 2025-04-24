<template>
    <div class="container">
        <LuckyCanvasCom :sectorCount="3" :sectorSize="10"></LuckyCanvasCom>
    </div>
</template>

<script setup>
import LuckyCanvasCom from "@/components/lucky-canvas-com.vue"
import { reactive, ref } from "vue"
</script>

<style lang="scss"></style>
