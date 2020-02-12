import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 注册全局组件
//1.引入
// import Users from "./components/Users";

Vue.config.productionTip = false;

// 2.注册全局组件
// Vue.component("users",Users);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
