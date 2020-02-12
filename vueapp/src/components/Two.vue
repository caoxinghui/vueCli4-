<template>
  <div class="two">
    <h1>{{ msg }}</h1>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'two2',
  data(){
    return{
      msg:'Two'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.two{
    background:'#999';
    color:red;
}
</style>
