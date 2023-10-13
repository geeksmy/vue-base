import type {RouteRecordRaw} from 'vue-router'

export default [
    {
        path: '/login',
        component: () => import('@/pages/common/login.vue'),
        meta: {
            title: '登录',
        },
    },
    {
        path: '/',
        component: () => import('@/pages/common/home.vue'),
        meta: {
            title: '主页'
        }
    }
] as RouteRecordRaw[]
