<template>
  <div>
    <div class='container'>
      <Header />
    </div>
    <div class='container'>
      <router-view></router-view>
    </div>
    <br>
    <div class='container'>
      <div ></div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name:'app',
  components:{
    Header,
  },
  data() {
    return {

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