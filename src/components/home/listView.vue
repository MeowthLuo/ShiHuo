<template>
    <div class="listview">
        <div class="list-view-top">
            <div class="list-menu">
                <ul class="listmenu">
                    <li v-for="(item,index) in listview" :key="index" @click="handToggle(index)" :class="active==index?'show':''">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="list-submenu ">
                <ul class="listsubmenu">
                    <li v-for="(item,index) in submenu" :key="index" @click="handTo(index)" :class="act==index?'bdg':'bd'">
                        {{item}}
                    </li>
                </ul>
            </div>
             </div>
            
            <div  class="list-view">
               
                <ul class="shihuo-news" v-for="(it, idx) in ulList" :key="idx"  v-if="idx==act" >
                     <Loading v-show="!loading"></Loading>
                    <li v-for="(item,index) in homeList[idx]" :key="index" v-show="loading">
                        <a class="link">
                            <div class="imgs">
                                <img :src="item.data.img"/>
                            </div>
                            <div class="details" v-show="item.show_type=='single3'">
                                <h2>{{item.data.title}}</h2>
                                <p class="details-list">
                                    <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" class="img01"/>
                                    {{item.data.intro}}
                                    <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png" class="img02"/>
                                </p>
                                <div class="money">
                                    <p class="from">{{item.data.merchant}}</p>
                                    <span class="price">￥{{item.data.price}}</span>
                                </div>
                            </div>
                            <div class="details" v-show="item.show_type=='single2'">
                                <h2>{{item.data.title}}</h2>
                                <div class="money">
                                      <div class="face" v-show="item.show_type=='single2'">
                                        <span>
                                            <img class="lazy" :src="item.data.avatar"/> 
                                        </span>
                                         {{item.data.author_name}}
                                    </div>
                                </div>
                                <div class="column-name">
                                 <div class="column_name" v-show="!item.data.column_name==''">
                                    <span >{{item.data.column_name}}</span>
                                </div>
                                </div>
                            </div>
                             <div class="details" v-show="item.show_type=='single1'">
                                <h2>{{item.data.title}}</h2>
                                <p class="details-list1">
                                  {{item.data.subtitle}}
                                </p>
                                <div class="money">
                                    <p class="from">{{item.data.merchant}}</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            
            </div>
    </div>
</template>

<script>
import{homeList} from "api/home.js"
import{oneList} from "api/home.js"
import{twoList} from "api/home.js"
import{threeList} from "api/home.js"
import { log } from 'util';
import Loading from 'common/loading/loading.vue'
export default {
    name:'liatview',
    components:{
        Loading
    },
    data(){
        return{
            listview:[
                "篮球",
                "跑步",
                "健身",
                "潮流",
                "推荐"
            ],
            submenu:[
                "全部",
                "单品推荐",
                "原创精品",
                "用户晒物"
            ],
            ulList:[
                {},
                {},
                {},
                {}
            ],
            active:0,
            act:0,

            homeList:[],
            loading:""
        }
    },
    methods:{
        handToggle(index){
            this.active=index
             if (this.active != []) {
            this.loading = true;
      }
        },
        handTo(index){
            this.act=index
        }
    },
    async created(){
        let data=await homeList(11)
        this.homeList.push(data.data);
        let dataone= await oneList()
        this.homeList.push(dataone.data);
        let datatwo= await twoList()
        this.homeList.push(datatwo.data);
        let datathree= await threeList()
        this.homeList.push(datathree.data)
        if (this.homeList != []) {
            this.loading = true;
      }
    },
}
</script>

<style  scoped>
    .listview{
        margin-top: .15rem;   
    }
    .show{
        color: #FF4338;
    }
    .bdg{
        color: #fff;
        background: #FF4338
    }
    .bd{
        background: #e6e6e6
    }
   .listmenu{
        display: flex;
        justify-content: space-around;
        
    }
   .listmenu>li{
        height: .8rem;
        font-size: .3rem;
        font-weight: 700;
        line-height: .8rem
    }
    .listsubmenu{
        display: flex;
        justify-content: space-around;
        margin-top: .03rem
    }
    .listsubmenu>li{
        height: .65rem;
        font-size: .2rem;
        font-weight: 700;
        line-height: .65rem;
        text-align: center;
        width: 1.2rem
    }
    .list-view{
        background: #fff;
        padding-top: .26667rem;
        padding-left: .26667rem;
        padding-bottom: 1rem;
     
        overflow-x: auto
    }
    .link{
        width: 100%;
        height: 2.65rem;
        padding: .26667rem;
        padding-left: 0;
        border-bottom: 1px solid #e6e6e6;
        display: flex
    }
    .shihuo-news>li{
        height: 2.66rem;
    }
    .listmenu li.show:after{
         content: "";
        width: .45333rem;
        display: block;
        margin-left: .1rem;
        margin-top: -.1rem;
        border-radius: .04rem;
        height: .05333rem;
        background-color: #FF4338;
    }

    .imgs{
        width: 30%;
        float: left;
        position: relative;
    }
    .imgs>img{
        width: 100%;
        height: 100%;
    }
    .details{
        margin-left: .26667rem;
        width: 67%;
        display: flex;
        flex-direction: column;
        justify-content: space-between
    }
    .details>h2{
        font-size: .28rem;
        color: #333;
        font-weight: 400;
        max-height: 1.12rem;
        overflow: hidden;
        word-break: break-all;
        line-height: .56rem;
    }
    .details-list{
        width: 100%;
        font-size: .25rem;
        color: #666;
        height: .5rem;

    }
    .img01{
        width: .24rem;
        display: inline-block;
        margin: 0 .13333rem 0 0;
    }
    .img02{
        width: .24rem;
        display: inline-block;
        margin: 0 .13333rem;
    }
    .money{
        font-size: .3rem;
        color: #a4a4a4;
        width: 100%;
        height: .41rem;
    }
    .from{
        float: left;
        color: #999;
    }
    .price{
        color: #FF4338
    }
    .column_name{
        color: #999;
        font-size: .26667rem;
        border: 1px solid #a8a8a8;
        border-radius: .08rem;
        padding: 0 .13333rem;
        display: inline-block;
        max-width: 1.7rem;
        overflow: hidden;
        vertical-align: middle;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: .13333rem;
    }
      .face{
       display: flex;
        font-size: .2rem;
   }
    .face>span{
       display: inline-block;
        border-radius: .26667rem;
        width: .3333rem;
        height: .3333rem;
        overflow: hidden;
        text-align: center;
        vertical-align: middle;
        margin-right: .15rem;
   }
    .lazy{
        width: 100%;
        display: block;
        margin: 0;
   }
   .details-list1{
       color: #FF4338
   }
   .column-name{
       max-width: 1.7rem;
   }
 

</style>
