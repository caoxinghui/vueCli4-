<template>
<!-- html -->
  <div class="header" @click='changeTitle'>
      <h1>{{headtit}}</h1>
  </div>
</template>

<script>
// 逻辑
export default {
  name: 'Header',
  props:['headtit'],
  data(){
    return{
      msg:'xinghui'
    }
  },
  methods:{
      changeTitle(){
        //   this.headtit = 'Hello World'
        // 1:事件名 2：传的值
        this.$emit('CheangeHeader','Hello World');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    background: blue;
}
</style>
