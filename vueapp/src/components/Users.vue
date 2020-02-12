<template>
  <div class="users">
    <ul>
      <li @click="user.show = !user.show" v-for="(user,index) in sbquser" :key="index">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.weChat}}</h3>
      </li>
    </ul>
    <button @click="deleteUser">deleteUser</button>
  </div>
</template>
<script>
export default {
  name: "Users",
  props: {
    sbquser: {
      type: Array,
      required: false,
      default: function() {
        return [{ name: "111", weChat: "22222", show: false }];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    deleteUser() {
      this.sbquser.pop();
    }
  }
};
</script>
<style scoped>
h1 {
  color: red;
}
</style>
