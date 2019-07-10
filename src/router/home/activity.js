export default {
    path:"/activity",
    //路由懒加载：const homeFn = () => import('views/home/index.vue')
    component:()=>import('components/activity/activity.vue'),
    name:"activity",
    meta:{
        footerFlag:false
    }

}