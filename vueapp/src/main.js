import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// let token = '121212';
// 全局守卫 前置钩子
// router.beforeEach((to,from,next)=>{
//   // console.log(to)
//   // next();
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('还没有登录 请先登录！');
//     next('/login');
//   }
// })
//全局 后置钩子 没有next
// router.afterEach((to,from)=>{
//   alert('after each')
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
