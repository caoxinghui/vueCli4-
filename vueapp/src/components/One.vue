<template>
  <div class="one">
    <h1>{{ msg }}</h1>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'one1',
  data(){
    return{
      msg:'One'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.noe{
    background:'#999';
    color:red;
}
</style>
