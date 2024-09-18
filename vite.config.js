import { fileURLToPath, URL } from "node:url"
import UnoCSS from 'unocss/vite'
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), UnoCSS()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        open: true,
        port: 5173,
        host: "0.0.0.0",
        public: "192.168.2.1:5173",
    },
})
