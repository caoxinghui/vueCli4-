<template>
  <div id="app">
    <SoltDemo>
      <!-- <div slot='title'>
        
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ipsum repudiandae quasi repellat, minima reiciendis quod id laboriosam atque repellendus officiis, ducimus, distinctio quibusdam omnis ipsam quo voluptate debitis aut.</p>
      </div>
      <div slot='text'>
        <p>content</p>
        <h4>Lorem ipsum dolor sit amet.</h4>
      </div> -->
      <div slot='header'>
        <p>Header</p>
        <!-- <p>Header</p> -->
        <h2>{{title}}</h2>
      </div>
       
       <div slot='footer'>Footer</div>
    </SoltDemo>
  </div>
</template>
<script>
// 1.引入局部组件
  import SoltDemo from "./components/SoltDemo";
  export default {
    name:"app",
    // 注册组件
    components:{SoltDemo},
    data(){
      return{
        title:'Title',
      }
    },
    methods:{}
  }
</script>
<style scoped>
h1{
  color:green;
}
h2{
        color:red;
    }
    p{
      color:red;
    }
</style>
