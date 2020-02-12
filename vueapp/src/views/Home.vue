<template>
  <div class='about'>
    <button @click='goToMenu' class='btn btn-success'>goToMenu33</button>
  </div>
</template>

<script>
export default {
name:'about',
components:{

},
data() {
  return {

  }
},
methods:{
  goToMenu(){
    // this.$router.go(-1);
    // this.$router.replace("/menu");
    // this.$router.replace("Menu");
    this.$router.push({path:'/menu',data:'erer'});
    
  }
},
created() {

},
mounted() {

}
}
</script>
<style scoped>

</style>

