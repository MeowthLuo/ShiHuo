import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import vant from "./vant/index.js"
import loading from 'common/loading/loading.vue'
Vue.use(loading)
Vue.config.productionTip = false

new Vue({
  vant,
  router,
  render: h => h(App),
}).$mount('#app')
