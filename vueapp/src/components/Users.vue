<template>
    <div class='users'>
        <h1 >User</h1>
        <ul @click='changeArray'>
            <li v-for="(user,index) in content" :key='index'>{{user}}</li>
        </ul> 
    </div>
</template>
<script>
    export default {
        name:'Users',
        // props:['content'],
        props:{
            content:{
                type:Array,
                required:false,
                default:['2','3']
            }
        },
        data(){
            return{
                // content:[]
            }
        },
        methods:{
            changeArray(){
                this.content.push('2222');
            }
            
        }
    };
</script>
<style scoped>
    h1{
        color:red;
    }
</style>
