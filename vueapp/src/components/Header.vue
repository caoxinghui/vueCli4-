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
                title:'Vue1 多组件455wewewewe'
            }
        },
        methods:{
            changeTitle(){
                // this.headerTitle = '子组件改变父组件的值2222',
                // 注册事件 参数1：事件名称 参数2：传的值
                this.$emit('titleChange','xinghui子组件改变父组件的值');
            }
        },
        //生命周期函数
        
        beforeCreate(){
            alert('这时Vue实例还没创建 所有的data还没有 不可以用watch监听');
        },
        created(){
            alert('这时实例已经创建 可以得到data, 调用watch,但是页面还是空白')
        },
        beforeMount(){
            alert('页面还是空白，这时render函数被调用')
        },
        mounted(){
            alert('页面挂载了，可以看到页面的内容，也可以访问DOM');
        },
        beforeUpdate(){
            alert('数据更新之前，就是虚拟DOM打补丁之前。')
        },
        updated(){
            alert('数据已经更新完毕！')
        },
        beforeDestroy(){
            alert('离开页面之前，清楚定时器！')
        },
        destroyed(){
            alert('实例已经完全被销毁！')
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
