<template>
  <div id="app">
    <Header :headtit='title' @CheangeHeader='Fn1'/>
    <Users :content='people' />
    <Footer :title='title'/>
  </div>
</template>
<script>
// 1:传值  2：传引用
// 1.引入局部组件
  import Users from "./components/Users";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  // import HelloWorld from "./components/HelloWorld";
  export default {
    name:"app",
    // 注册组件
    components:{
      // HelloWorld,
      Users,
      Header,
      Footer
      // "users-ee":Users,
      // Users
    },
    data(){
      return{
        title:'父组件传给子组件',
        people:[
                    'xinghui','lilei'
                ]
      }
    },
    methods:{
      Fn1(item){
        // console.log(item);
        this.title=item;
      }
    }
  }
</script>
<style>
 h1{
   color:green;
 }
</style>
