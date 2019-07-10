export default {
    path:"/basketball",
    //路由懒加载：const homeFn = () => import('views/home/index.vue')
    component:()=>import('components/basketball/basketball.vue'),
    name:"basketball",
    meta:{
        footerFlag:false
    },
  

}

// export default {
//     path:"/home",
//     //路由懒加载：const homeFn = () => import('views/home/index.vue')
//     component:() => import('views/home/index.vue'),
//     name:"home",
//     meta:{
//         footerFlag:true
//     },
//     children:[{
//         path:"basketball",
//         component:()=>import('components/basketball/basketball.vue'),
//         name:"basketball"
//     }]
// }
