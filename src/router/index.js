/*
 * @Descripttion: 
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            title: '首页',
            requireAuth: true
        },
        children: [
            {
                path: '/practices',
                name: 'Practices',
                component: () => import('@/views/Practices.vue'),
                meta: {
                    title: '练习',
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录界面'
        }
    },
    {
        path: '**',
        redirect: '/'
    }
]

const router = new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;