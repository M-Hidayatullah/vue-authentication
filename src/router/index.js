//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '@/views/homepage/HomepageWeb.vue')
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import( /* webpackChunkName: "profile" */ '@/views/profile/UserProfile.vue')
    },
    {
        path: '/change-password',
        name: 'change-password',
        component: () => import( /* webpackChunkName: "change-password" */ '@/views/auth/ChangePassword.vue')
    },
    {
        path: '/edit-profile',
        name: 'edit-profile',
        component: () => import( /* webpackChunkName: "edit-profile" */ '@/views/profile/EditProfile.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import( /* webpackChunkName: "login" */ '@/views/auth/LoginWeb.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "dashboard" */ '@/views/dashboard/IndexWeb.vue')
    },
    {
        path: '/forgetPassword',
        name: 'forgetPassword',
        component: () => import( /* webpackChunkName: "forgetPassword" */ '@/views/auth/ForgetPassword.vue')
    },
    
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router