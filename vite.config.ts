import {fileURLToPath} from 'url'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

const baseSrc = fileURLToPath(new URL('./src', import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), UnoCSS()],
    resolve: {
        alias: [
            {
                find: '~@',
                replacement: baseSrc,
            },
            {
                find: '~',
                replacement: baseSrc,
            },
            {
                find: '@',
                replacement: baseSrc,
            },
        ],
    },
})
