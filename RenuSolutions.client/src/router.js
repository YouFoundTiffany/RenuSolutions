import { createRouter, createWebHistory } from 'vue-router'
// 1️⃣ changed createWebHashHistory to createWebHistory
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/services',
    name: 'Services',
    component: loadPage('ServicesPage')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: loadPage('PortfolioPage')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: loadPage('BlogPage')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: loadPage('ContactPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  // 2️⃣ updted createWebHashHistory to createWebHistory
  history: createWebHistory(),
  routes
})
