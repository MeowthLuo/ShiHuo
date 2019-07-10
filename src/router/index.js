import Vue from "vue"
import Router from "vue-router";
Vue.use(Router)


import home from "./home/index.js"
import discover from "./discover/index.js"
import equip from "./equip/index.js"
import column from "./home/column.js"
import basketball from "./home/basketball.js"
import discuss from "./home/discuss"
import activity from "./home/activity"


export default new Router({
    routes:[
        {
            path: '/', 
            redirect: '/home'
        },
       home,
       equip,
       discover,
       column,
       basketball,
       activity,
       discuss
       
    ]
    })