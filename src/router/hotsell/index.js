export default {
  path:"/hotsell",
  //路由懒加载：const homeFn = () => import('views/home/index.vue')
  component:() => import('components/hotsell/index.vue'),
  name:"hotsell"

} 