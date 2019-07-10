<template>
  <div id="app">
    <router-view></router-view>
     <router-view name="basketball"></router-view>
    <Footer v-if="$route.meta.footerFlag"></Footer>
  </div>
</template>

<script>
import Footer from "common/footer/footer.vue"
export default {
  name: 'app',
  components:{
    Footer,
  }
}
</script>

<style>
    #app{
      width: 100%;
      height: 100%;
      overflow: auto
    }
</style>
