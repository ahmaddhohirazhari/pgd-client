import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import UserDetailView from '../views/UserDetailView.vue'
import CreateUserView from '../views/CreateUserView.vue'

import CustomerView from '@/views/CustomerView.vue'
import CreateCustomerView from '@/views/CreateCustomerView.vue'
import CustomerDetailView from '@/views/CustomerDetailView.vue'

import LoginView from '../views/LoginView.vue'
import NotFoundView from '../components/NotFoundView.vue'
// import TestView from '../views/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/user',
      name: 'user',
      component: UserView
    },
    {
      path: '/user/:id',
      name: 'userDetail',
      component: UserDetailView
    },
    {
      path: '/user/create',
      name: 'createUser',
      component: CreateUserView
    },
    {
      path: '/customer',
      name: 'customer',
      component: CustomerView
    },
    {
      path: '/customer/:id',
      name: 'customerDetail',
      component: CustomerDetailView
    },
    {
      path: '/customer/create',
      name: 'createCustomer',
      component: CreateCustomerView
    },
    {
      path: '/:catchAll(.*)', // Semua path yang tidak cocok akan ditangani di sini
      name: 'notFound',
      component: NotFoundView
    }
  ]
})

// Simpan halaman sebelumnya dalam localStorage
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' || to.name) {
    localStorage.setItem('previousRoute', from.fullPath)
  }
  next()
})

let previousRoute = null

// Simpan halaman sebelumnya sebelum navigasi
router.beforeEach((to, from, next) => {
  previousRoute = from.fullPath
  next()
})

// Guard navigasi untuk memeriksa otorisasi
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // Jika pengguna mencoba mengakses halaman selain halaman login dan belum login, arahkan mereka ke halaman login
  if (to.name !== 'login' && !token) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  }
  // Jika pengguna mencoba mengakses halaman login dan sudah login, arahkan mereka kembali ke halaman sebelumnya
  else if (to.name === 'login' && token) {
    next(previousRoute || { name: 'home' })
  } else {
    next() // Lanjutkan navigasi
  }
})

export default router
