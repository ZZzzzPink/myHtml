import { fileURLToPath, URL } from "node:url"
<<<<<<< HEAD
import UnoCSS from 'unocss/vite'
=======

>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD

    plugins: [vue(), UnoCSS()],
=======
    plugins: [vue()],
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
<<<<<<< HEAD
        open: true,
        port: 5173,
    },
    publicPath: "./",
    assetsDir: "assets",
    base: "./",
=======
        port: 8080,
        open: true,
    },
    publicPath: "./",
    outputDir: "docs",
    assetsDir: "assets",
    // base: "/onlineProject/",
    base: "./",
    build: {
        outDir: "docs",
    },
>>>>>>> 0823cf00a7d60d5f725518e35ca13ed6b7b70802
})
