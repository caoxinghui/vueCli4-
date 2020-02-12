<template>
    <div class='header' @click='changeTitle'>
        <h1>{{title}} {{headerTitle}}</h1>
    </div>
</template>
<script>
    export default {
        name:'Header',
        props:{
            headerTitle:{
                type:String,
            }
        },
        data(){
            return{
                title:'Vue 多组件'
            }
        },
        methods:{
            changeTitle(){
                // this.headerTitle = '子组件改变父组件的值2222',
                // 注册事件 参数1：事件名称 参数2：传的值
                this.$emit('titleChange','xinghui子组件改变父组件的值');
            }
        }
    };
</script>
<style scoped>
    .header{
        background:green;
        padding:10px;
    }
    h1{
        color:#222;
        text-align:center;
    }
</style>
