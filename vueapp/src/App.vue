<template>
  <div id="app">
    <!-- <h1>app.vue</h1> -->
    <!-- 调用组件 -->
    <!-- <Header></Header> -->
    <Header />
    <Users />
    <Footer />
  </div>
</template>
<script>
// 1.引入局部组件
  import Users from "./components/Users";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  export default {
    name:"app",
    // 注册组件
    components:{
      // users:Users
      Users,
      Header,
      Footer
    }
  }
</script>
<style scoped>
h1{
  color:green;
}
</style>
