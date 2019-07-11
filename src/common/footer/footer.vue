<template>
    
    <div id="tabBar">
    <ul>
        <router-link v-for="(item,index) in tabBars" :key="index" :class="active==index?'footshow':''"  @click.native="handle(index)"  :to="item.path" tag
        ="li">
            <div>
                <img :src="item.url" v-show="!(active==index)"/>
                <img :src="item.url1" v-show="active==index"/>
            </div>
            <span>{{item.title}}</span>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
    name:"tabBar",
    data(){
        return{
            tabBars:[
                 {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/index.png?201903111600",
                    url1:"http://sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600",
                    title:"首页",
                    path:"/home"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600",
                    url1:"http://sh1.hoopchina.com.cn/images/trademobile/common/youhui-on.png?201903111600",
                    title:"优惠",
                    path:"/"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600",
                    url1:"http://sh1.hoopchina.com.cn/images/trademobile/common/find-on.png?201903111600",
                    title:"发现",
                    path:"/discover/discoverShow"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei.png?201903111600",
                    url1:"http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600",
                    title:"装备",
                    path:"/equip"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600",
                    url1:"http://sh1.hoopchina.com.cn/images/trademobile/common/more-on.png?201903111600",
                    title:"更多",
                    path:"/more"
                }
            ],
            active:0,
           
        }
    },
   methods:{
       handle(index){
           this.active=index;
       }
   }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0
}
     #tabBar{
        width: 100%;
        height: .8rem;
        position: fixed;
        left: 0;
        bottom:0;
        border-top: 1px solid #ccc;
        background: #fff
    }

     #tabBar>ul{
        width: 100%;
        height: 100%;
        display: flex;
        box-shadow: 0 0 0.32rem 0.02667rem rgba(0,0,0,.51);
        /* justify-content: space-between; */
    } 
    #tabBar>ul>li{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size:.2rem;
    }
     #tabBar>ul>li>div{
         width: .5rem;
         height: .5rem;
     }
      #tabBar>ul>li>div>img{
          width: 100%;
          height: 100%;
          display: block
      }
    .footshow{
        color:#c33;
    } 
</style>


