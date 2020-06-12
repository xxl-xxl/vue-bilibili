import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import Login from '@/views/Login.vue'
import userinfo from '@/views/userinfo.vue'
import edit from '@/views/edit.vue'
import Home from '@/views/Home.vue'
import Article from '@/views/Article.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/userinfo',
    component: userinfo,
    meta: {
      istoken: true
    }
  },
  {
    path: '/edit',
    component: edit,
    meta: {
      istoken: true
    }
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/article/:id',
    component: Article
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
