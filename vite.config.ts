import { fileURLToPath, URL } from 'node:url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入vue相关函数，如ref，reactive ? 未生效
      imports: ['vue'],
      // 自定义配置项，按需导入Element Plus组件
      resolvers: [
        // 组件自动导入
        ElementPlusResolver(),
      ],

    }),
    // 
    Components({
      resolvers: [
        // 组件自动导入
        ElementPlusResolver()
      ],
    }),
    // Icons图标自动下载
    Icons({
      autoInstall: true,
    }),


  ],

})
