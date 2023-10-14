import {createPinia} from 'pinia'
import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import AntDV from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import {createPersistedState} from 'pinia-plugin-persistedstate'
import 'virtual:uno.css'
// import '@unocss/reset/tailwind.css'

const app = createApp(App)

// 导入AntDV
app.use(AntDV)

// 导入Pinia
const pinia = createPinia()
// 导入Pinia持久化
pinia.use(createPersistedState({key: id => `__persisted__${id}`,}))
app.use(pinia)

// 导入路由
app.use(router)


app.mount('#app')
