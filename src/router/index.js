import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '@/views/Home'
import Shop from '@/views/Shop'
import Login from '@/views/Login'
import PasswordReset from '@/views/PasswordReset'
import Contact from '@/views/Contact'
import FAQ from '@/views/FAQ'
import REGISTER from '@/views/Register'
import ABOUT from '@/views/About'



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
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta:{
                title: 'Contact Us'
            }
        },
        {
            path: '/faq',
            name: 'faq',
            component: FAQ,
            meta:{
                title: 'Frequently Asked Questions'
            }
        },
        {
            path: '/register',
            name: 'register',
            component: REGISTER,
            meta:{
                title: 'Create New Account'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: ABOUT,
            meta:{
                title: 'About'
            }
        }
    ],
    mode: 'history',
    linkExactActiveClass: "active",
})