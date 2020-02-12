<template>
    <div>
        <h1>Admin</h1>
    </div>
</template>

<script>
export default {
    name:'app',
    components:{

    },
    data() {
        return {
            name:'xinghui'
        }
    },
    // beforeRouteEnter (to, from, next) {
    // // 在渲染该组件的对应路由被 confirm 前调用
    // // 不！能！获取组件实例 `this`
    // // 因为当守卫执行前，组件实例还没被创建
    //     // console.log('hello'+this.name);
    //     next(vm=>{
    //         alert('hello'+vm.name)
    //     });
    // },
    beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
        if(confirm("确认离开吗？")==true){
            next();
        }else{
            next(false)
        }
        // alert('hello'+this.name);
    },
    created() {

    },
    mounted() {

    }
}
</script>
<style scoped>

</style>