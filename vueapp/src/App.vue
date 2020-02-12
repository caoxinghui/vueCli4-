<template>
  <div id="app">
    <!-- <h1>app</h1> -->
    <One/>
    <Two/>
  </div>
</template>

<script>
import One from './components/One.vue'
import Two from './components/Two.vue'

export default {
  name: 'App',
  components: {
    One,
    Two
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
body{
    font-family: Ubuntu;
    color: #555;
}
</style>
