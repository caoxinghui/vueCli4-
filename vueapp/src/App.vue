<template>
  <div id="app">
    <!-- <h1>app.vue</h1> -->
    <!-- 调用组件 -->
    <!-- <Header></Header> -->
    <Header :headerTitle='title' @titleChange='updataTitle'/>
    <!-- <Users :sbquser='people'/>
    <hr>
    <Users :sbquser='people' />
    <Footer :footerTitle='title'/> -->
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
    },
    data(){
      return{
        title:'父组件给子组件 传值27',
         people:[
                    {name:'xinghui1',weChat:'18822514340',show:false},
                    {name:'xinghui2',weChat:'18822514340',show:false},
                    {name:'xinghui3',weChat:'18822514340',show:false},
                    {name:'xinghui4',weChat:'18822514340',show:false},
                    {name:'xinghui5',weChat:'18822514340',show:false}
                ]
      }
    },
    methods:{
      updataTitle(data){
        this.title = data;
      }
    }
  }
</script>
<style scoped>
h1{
  color:green;
}
</style>
