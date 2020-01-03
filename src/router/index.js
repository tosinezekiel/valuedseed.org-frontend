import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Login from '@/views/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home

        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})