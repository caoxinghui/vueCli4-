<template>
  <div id="app">
     <!-- <One />
     <Two /> -->

    <!-- <components :is='component'>
    </components> -->

    <!-- <keep-alive>
      <components :is='component'>
      </components>
    </keep-alive> -->

    <keep-alive :include="['one1','two2']" :exclude="['two2']">
      <components :is='component'>
      </components>
    </keep-alive>

    <button @click='component = "One"'>One</button>
    <button @click='component = "Two"'>Two</button> 
  </div>
</template>
<script>
// 1.引入局部组件
  import One from "./components/One";
  import Two from "./components/Two";
  export default {
    name:"app",
    // 注册组件
    components:{
      One,
      Two
    },
    data(){
      return{
        component:'One'
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
</style>
