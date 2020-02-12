<template>
    <div>
        <slot name='header'></slot>
       <!-- <slot name='title'></slot> -->
       <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, rem!</h1>
       <!-- <slot name='text'></slot> -->
       <slot name='footer'></slot>
    </div>
</template>
<script>
    export default {
        name:'slot',
        data(){
            return{
                
            }
        }
    };
</script>
<style scoped>
    
</style>
