<template>
    <div class='users'>
        <ul>
            <li @click='user.show = !user.show' v-for="(user,index) in people" :key='index'>
                <h2>{{user.name}}</h2>
                <h3 v-show='user.show'>{{user.weChat}}</h3>
            </li>
        </ul> 
    </div>
</template>
<script>
    export default {
        name:'Users',
        data(){
            return{
                people:[
                    {name:'xinghui1',weChat:'18822514340',show:false},
                    {name:'xinghui2',weChat:'18822514340',show:false},
                    {name:'xinghui3',weChat:'18822514340',show:false},
                    {name:'xinghui4',weChat:'18822514340',show:false},
                    {name:'xinghui5',weChat:'18822514340',show:false}
                ]
            }
        }
    };
</script>
<style scoped>
    h1{
        color:red;
    }
</style>
