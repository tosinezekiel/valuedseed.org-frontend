import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Login from '@/views/Login'
import PasswordReset from '@/views/PasswordReset'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            meta:{
                title: 'Welcome'
            }

        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop,
            meta:{
                title: 'Shop '
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                title: 'Login'
            }
        },
        {
            path: '/password-reset',
            name: 'password-reset',
            component: PasswordReset,
            meta:{
                title: 'Password Reset'
            }
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})