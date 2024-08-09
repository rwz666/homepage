import { createApp } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/style/style.scss'
import '../public/iconfont/iconfont.css'


//创建app实例
const app = createApp(App)
//创建pinia
const pinia = createPinia()
//使用pinia
app.use(pinia)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount('#app')
