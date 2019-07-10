


export default {
    path: "/discover",
    //路由懒加载：const homeFn = () => import('views/discover/index.vue')
    component: () => import('views/discover/index.vue'),
    name: "discover",
    redirect:"/discover/discoverShow",
    meta:{
        footerFlag:true
    },
    children: [
        {
            path: "discoverShow",
            component: () => import("../../components/discoverShow/index.vue"),
            name: "discoverShow",
            meta:{
                footerFlag:true
            },
        },
        {
            path: "basketballList",
            component: () => import("../../components/basketballList/index.vue"),
            name: "basketballList",
            meta:{
                footerFlag:true
            },
        },
    ]
}