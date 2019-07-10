export default {
    path:"/discuss",
    //路由懒加载：const homeFn = () => import('views/home/index.vue')
    component:()=>import('components/discuss/discuss.vue'),
    name:"discuss",
    meta:{
        footerFlag:false
    }
   

}