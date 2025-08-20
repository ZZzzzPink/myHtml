// uno.config.ts
import { defineConfig } from "unocss"
import { transformerDirectives } from 'unocss'
export default defineConfig({
    // ...UnoCSS options
    shortcuts: [
        [/^base-border-(.*)$/, (match) => `border-1 border-style-dashed border-${match[1]}`], // 动态快捷方式，一个配置为一个数组
    ],
    // 使用聚合写法 可以再类中添加动态样式  --at-apply:
    transformers: [transformerDirectives()]
})
