<template>
  <div class="two">
    <h2>TWO</h2>
    <ul>
      <li v-for='(user,index) in pricePeople' :key='index'>
        <span class='name'>{{user.name}}</span>
        <span class='price'>{{user.price}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Two',
  // props:['people'],
  computed:{
    // pricePeople(state){
    //   let price = this.people.map(item=>{
    //     return {
    //       name:'**'+item.name+'****',
    //       price:item.price/2
    //     };
    //   })
    //   return price;
    // }
    // people(){
    //   return this.$store.state.people;
    // },
     pricePeople(){
      return this.$store.getters.pricePeople;
    }
  }
//   props:['people']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
.two ul{
    padding: 0;
    list-style-type: none;
}
.two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
