<template>
    <div class='header'>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
    export default {
        name:'Header',
        data(){
            return{
                title:'Vue 多组件'
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
