import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import 'virtual:uno.css'
import AntDV from 'ant-design-vue'

const app = createApp(App)

// 导入AntDV
app.use(AntDV)

// 导入Pinia
const pinia = createPinia()
app.use(pinia)

// 导入路由
app.use(router)

app.mount('#app')
