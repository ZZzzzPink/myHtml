<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import NumberFlapper from './components/NumberFlapper.vue';
import GlobalPlayer from './components/music/Player/GlobalPlayer.vue';
import { getCurrentInstance, onMounted, computed } from 'vue';
import { PiniaTest } from './stores/PiniaTest';
import { storeToRefs } from 'pinia';

const route = useRoute()
const { themeColor } = storeToRefs(PiniaTest())

const showGlobalPlayer = computed(() => {
  return route.path.startsWith('/music')
})

window.$this = getCurrentInstance().appContext.config.globalProperties
onMounted(() => {
  document.documentElement.style.setProperty('--theme-color', themeColor.value)
})
</script>

<template>
  <RouterView />
  <GlobalPlayer v-if="showGlobalPlayer" />
</template>

<style>
body {
  background-image: url("https://bing.img.run/rand.php");
  background-size: cover;
  background-attachment: fixed;
  max-width: 100vw !important;
  overflow-x: hidden;
}

:root {
  --theme-color: #fff;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  overflow-x: hidden;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
