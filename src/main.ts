import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/style/style.scss'

//创建app实例
const app = createApp(App)
//创建pinia
const pinia = createPinia()
//使用pinia
app.use(pinia)

app.mount('#app')
