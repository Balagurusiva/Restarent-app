 import { createRouter, createWebHashHistory } from 'vue-router' 

import Home from '@/pages/Home.vue'
import SignUp from '@/pages/SignUp.vue'
import Login from '@/pages/Login.vue'
import Add from '@/pages/Add.vue'
import Update from '@/pages/Update.vue'

const routes = [
    { path: '/', name: "home", component: Home },
    { path: '/update', name: "update", component: Update },
    { path: '/add', name: "add", component: Add },
    { path: '/sign-up', name:"sign up", component:SignUp},
    { path: '/sign-in', name:"sign in", component:Login},
    ]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})


export default router