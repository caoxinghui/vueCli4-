import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  state: {
    people:[
      {name:'马冬梅',price:'200'},
      {name:'马云',price:'5000'},
      {name:'马化腾',price:'1000'}
    ]
  },
  getters:{
    pricePeople(state){
      let price = state.people.map(item=>{
        return {
          name:'**'+item.name+'****',
          price:item.price/2
        };
      })
      return price;
    }
  },
  mutations: {
    reduce(state,user){
      console.log(user)
      state.people.forEach(item => {
        item.price -= user;
      });
    }
  },
  actions: {
    reduce(context,people){
      context.commit('reduce',people)
    }
  },
  modules: {
  }
})
