<template>
<!-- html -->
  <div class="footer">
      <h1>{{title}}</h1>
  </div>
</template>

<script>
// 逻辑
export default {
  name: 'Footer',
  props:['title'],
  data(){
    return{
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    background: #888;
}
</style>
