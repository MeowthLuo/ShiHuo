export default {
    path:"/column",
    //路由懒加载：const homeFn = () => import('views/home/index.vue')
    component:()=>import('components/column/column.vue'),
    name:"column",
    meta:{
        footerFlag:false
    }
 
}