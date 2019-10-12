import Vue from 'vue'
import Router from 'vue-router'
import products from '@/views/products'
import details from '@/views/details'
import cart from '@/views/cart'
import checkout from '@/views/checkout'
import completion from '@/views/completion'
import dashboard from '@/views/dashboard'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: products
    },
    {
      path: "/index.html",
      redirect: "/"
    },
    {
      path: "/products",
      redirect: "/"
    },
    {
      path: '/details/:Pid',
      name: 'details',
      component: details
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout
    },
    {
      path: '/completion',
      name: 'completion',
      component: completion
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    }
  ],
  linkExactActiveClass: "active"
})
