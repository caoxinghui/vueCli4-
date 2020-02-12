<template>
    <div class='footer'>
        <p>{{copyright}}{{footerTitle}}</p>
    </div>
</template>
<script>
    export default {
        name:'Footer',
        props:{
            footerTitle:{
                type:String,
                required:true,
                default:'footer 传值'
            }
        },
        data(){
            return{
                copyright:'Copyright 2020 Vue '
            }
        }
    };
</script>
<style scoped>
.footer{
    background: #222;
    padding:6px;
}
p{
    color:lightgreen;
    text-align: center;
}
</style>
