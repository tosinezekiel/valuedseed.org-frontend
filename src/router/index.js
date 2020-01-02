import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home'
import Shop from '@/views/Shop'

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
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})