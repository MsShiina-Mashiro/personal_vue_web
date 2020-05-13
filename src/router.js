import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/hello',
    children: [
      {
        path: '/hello',
        component: () => import('./views/Hello.vue'),
        meta: 'about'
      },
      {
        path: '/about',
        component: () => import('./views/About.vue'),
        meta: 'photo'
      },
      {
        path: '/photo',
        component: () => import('./views/Photo.vue'),
        meta: 'connect'
      },
      {
        path: '/connect',
        component: () => import('./views/Connect.vue')
      }]
    }
]
  
const router = new Router({
  routes
})


router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next();
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) return next('/login')
//   next()
// })


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       redirect: '/login'
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     },
//     {
//       path: '/home',
//       name: 'home',
//       component: Home,
//       redirect: '/hello',
//       children: [
//         {
//           path: '/hello',
//           component: () => import('./views/Hello.vue'),
//           meta: 'about'
//         },
//         {
//           path: '/about',
//           component: () => import('./views/About.vue'),
//           meta: 'photo'
//         },
//         {
//           path: '/photo',
//           component: () => import('./views/Photo.vue'),
//           meta: 'connect'
//         },
//         {
//           path: '/connect',
//           component: () => import('./views/Connect.vue')
//         }
//       ]
//     }
//   ]
// })
