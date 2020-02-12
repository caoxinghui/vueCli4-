<template>
  <div class="one">
    <h2>ONE</h2>
    <ul>
      <li v-for='(user,index) in pricePeople' :key='index'>
        <span class='name'>{{user.name}}</span>
        <span class='price'>{{user.price}}</span>
      </li>
    </ul>
    <button @click='reduce(2)'>打折</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: 'One',
  // props:['people'],
  computed:{
    // pricePeople(){
    //   let price = this.people.map(item=>{
    //     return {
    //       name:'**'+item.name+'****',
    //       price:item.price/2
    //     };
    //   })
    //   return price;
    // },
    people(){
      return this.$store.state.people;
    },
    // pricePeople(){
    //   return this.$store.getters.pricePeople;
    // }
    ...mapGetters(["pricePeople"])
  },
  methods:{
    ...mapActions(['reduce']),
    // reduce(price){
    //   // this.people.forEach(item => {
    //   //   item.price -= 1;
    //   // });
    //   // this.$store.commit('reduce');
    //   this.$store.dispatch('reduce',price)
    // }
  }
  
}
</script>
<style scoped>
.one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.one ul{
    padding: 0;
}
.one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
