

export default {
  path:"/newest",
  component:() => import('views/newest/index.vue'),
  name:"newest",
  meta:{
    footerFlag:false
  },
}