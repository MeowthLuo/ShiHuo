<template>
    <header id="header">
        <h1>{{title}}</h1>
        <p @click="handleBack()"></p>
    </header>
</template>
<script>
export default {
    name:"headerCom",
    props:{
        title:{
            type:String,
            default:""
        },
        icon:{
            type:String,
            default:""
        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        }
    }
}
</script>

<style>
    #header{
    width: 100%;
    height: 1rem;
    background: #fff;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}
#header>h1{
    font-size: .32rem;
    font-style: normal;
    color: #ccc;
}
#header>p{
    position: absolute;
    left: .1rem;
    font-size:.4rem;
    color: #ccc;
}

</style>