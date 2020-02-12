import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

//配置路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    //路由独享的守卫
    // beforeEnter: (to, from, next) => {
    //   // alert('非登录状态 不可以进入');
    //   // next(false);
    //   if(to.path == '/login' || to.path == '/register'){
    //           next();
    //       }else{
    //         alert('还没有登录 请先登录！');
    //         next('/login');
    //       }
    // }
  },
  {
    path: '/about',
    name: 'About',
    redirect:'/about/Contact',
    component: () => import('../views/about/About.vue'),
    children:[
      {
        path: '/about/Contact',
        name:"contactLink",
        redirect:'/personname',
        component: () => import('../views/about/Content.vue'),
        children:[
          {
            path:'/phone',
            name:"phoneNumber",
            component: () => import('../views/about/contact/Phone.vue'),
          },
          {
            path:'/personname',
            name:"personName",
            component: () => import('../views/about/contact/PersonName.vue'),
          }
        ]
      },
      {
        path: '/history',
        name:"historyLink",
        component: () => import('../views/about/History.vue'),
      },
      {
        path: 'delivery',
        name:"deliveryLink",
        component: () => import('../views/about/Delivery.vue'),
      },
      {
        path: '/orderingGuide',
        name:"orderingGuideLink",
        component: () => import('../views/about/OrderingGuide.vue'),
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    meta:{
      auth:true
    }
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

export default router
