<template>
    <div class="columnList">
        <Header></Header>
        <Content></Content> 
    </div>
</template>

<script>
import Header from "./header.vue"
import Content from "./content.vue"

export default {
    name:"column",
    components:{
        Header,
        Content
    }
}
</script>

<style>

</style>
