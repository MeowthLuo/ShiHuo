export default {
  path:"/praise",
  //路由懒加载：const homeFn = () => import('views/home/index.vue')
  component:() => import('components/praise/index.vue'),
  name:"praise"

}