<template>
    <div class='footer'>
        <p>{{copyright}}</p>
    </div>
</template>
<script>
    export default {
        name:'Footer',
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
