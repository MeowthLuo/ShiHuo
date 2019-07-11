<template>
      <div id="wrap">
        <div class="head">
            <router-link class="goback" to="/home" tag="div">
                
                    <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" />
                </router-link>
            <span class="d-title">
                篮球专区
            </span>
            <div class="ico_list">
                <img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" />
            </div>
        </div>
        <div class="content">
            <div class="menu_block">
                <ul>
                    <li v-for="(item,index) in bannerList" :key="index">
                        <a class="menu_block_a">
                            <img :src="item.url" />
                            <p>{{item.title}}</p>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li v-for="(item,index) in bannerList1" :key="index">
                        <a class="menu_block_a">
                            <img :src="item.url" />
                            <p>{{item.title}}</p>
                        </a>
                    </li>
                </ul>
                <div class="swiper-container hot-container" ref="banner">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide  hot-slide" v-for="(item ,index) in dataone" :key="index">
                            <a class="swiper-slide-a">{{item.msg1}}</a>
                            <a class="swiper-slide-b">{{item.msg2}}</a>
                        </div>
                    
                    </div>
                </div>
            </div>
            <div class="hotactivty">
                <h2>热门活动</h2>
                <ul>
                    <li>
                        <a>
                            <div class="img">
                                <img
                                    src="http://shihuo.hupucdn.com/appZone/201811/2311/e5e9c867a2016694abe40d752c81080a.jpg" />
                            </div>
                            <h3 class="p1">应季机能风</h3>
                            <span class="p2">酷战雨雪</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="img">
                                <img
                                    src="http://shihuo.hupucdn.com/appZone/201811/1019/7e5b5b66171686cf805178be1c793bf0.jpg" />
                            </div>
                            <h3 class="p1">实战性价比之选</h3>
                            <span class="p2">球星支线</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div class="img">
                                <img
                                    src="http://shihuo.hupucdn.com/appZone/201904/1215/74d68d16fe92f589562be729a89ee9a3.jpg" />
                            </div>
                            <h3 class="p1">5折上新，95分专属抢购</h3>
                            <span class="p2">低价折扣超值精选</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="loveList">
                <h2>
                    欲望清单
                    <a href="#" class="more">
                        查看更多 >
                    </a>
                </h2>
                <div class="swiper-container swiper2" ref="swiper2">
                    <div class="swiper-wrapper swiper02">
                        <div class="swiper-slide swiper-slide2 ">
                            <img src="http://shihuo.hupucdn.com/article/2019-07-04/bc90cc602e7c4ca19d8f39d89f65a85a.jpg?imageView2/0/w/300/h/300/interlace/1"/>
                            <p>硬拆件</p>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                            <img src="http://shihuo.hupucdn.com/ucditor/20190703/756x752_98b1c768cfa297f0ac5cb519df06052c.jpeg?imageView2/0/w/300/h/300/interlace/1"/>
                            <p>LBJ16开箱</p>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                            <img src="http://shihuo.hupucdn.com/ucditor/20190602/1080x752_292c70566be5c52d24a3c25156387ef2.jpeg?imageView2/0/w/300/h/300/interlace/1"/>
                            <p>答案1代</p>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                            <img src="http://shihuo.hupucdn.com/ucditor/20190620/580x780_efa3fd08d6dba138b78a477a9476a512.jpeg?imageView2/0/w/300/h/300/interlace/1"/>
                            <p>利拉德5评测</p>
                        </div>
                        <div class="swiper-slide swiper-slide2">
                            <img src="http://shihuo.hupucdn.com/article/2019-05-06/720ed584ad0bd96c7bdf1be2ff35ee31.jpg?imageView2/0/w/300/h/300/interlace/1"/>
                            <p>乔丹的封神之路</p>
                        </div>
                        <div class="swiper-slide swiper-slide3">
                            <a class="seeMore">
                            <img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/index/more_76fa7ac.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="listView">
                <div class="listTop">
                    <ul>
                        <li>全部</li>
                        <li>单品推荐</li>
                        <li>达人清单</li>
                        <li>用户晒物</li>
                    </ul>
                </div>
                <div class="listMenu">
                    <ul>
                        <li v-for="(item,index) in ball" :key="index">
                            <a href="#" class="listMenua">
                                <div class="listimg">
                                    <img :src="item.data.img"/>
                                </div>
                                <div class="listdetails">
                                    <h2>{{item.data.title}}</h2>
                             
                                    <p class="listmsg" v-show="item.show_type=='single3'">
                                        <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" class="img01"/>
                                        <span>{{item.data.intro}}</span>
                                        <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_right.png" class="img02"/>
                                    </p>
                                    <div class="face" v-show="item.show_type=='single2'">
                                        <span>
                                            <img class="lazy" :src="item.data.avatar"/> 
                                        </span>
                                         {{item.data.author_name}}
                                    </div>
                         
                                    <div class="listfrom">
                                        <div class="listname"  v-show="item.show_type=='single3'">
                                           {{item.data.merchant}}
                                            <span>￥{{item.data.price}}</span>
                                        </div>
                                        <div class="column_name"  v-show="item.show_type=='single2'">
                                            <span>{{item.data.column_name}}</span>
                                        </div>
                                        <div class="listguanzhu">
                                            <img src="http://sh1.hoopchina.com.cn/images/trademobile/look.png"/>
                                            <div class="hits">{{item.data.hits}}</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "css/swiper.min.css"
import Swiper from "swiper"
import{ballList} from "api/home.js"
export default {
    name:"basketball",
    data(){
        return{
            dataone:[{
                msg1:"球鞋百科知多少",
                msg2:"编织横行时代"
            },
            {
                msg1:"为什么买AJ",
                msg2:"球鞋百科知多少",
            },
            {
                msg1:"AJ潮流效应",
                msg2:"签名鞋Logo说"
            }       
            ],
            ball:[],
            bannerList:[{
                title:"篮球鞋",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/qiuyi2.png"
            },
            {
                title:"篮球上装",
                url:" http://sh1.hoopchina.com.cn/images/trade/app/lanqiuxie2.png"
            },
            {
                title:"篮球下装",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/lanqiu2.png"
            },
            {
                title:"篮球配件",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/qiuyi2.png"
            },
            {
                title:"篮球",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/lanqiuhuju1.png"
            },],
            bannerList1:[
            {
                title:"Jordan",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/Jordan.png"
            },
            {
                title:"ADIDAS",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/adidas.png"
            },
            {
                title:"NIKE",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/nike1.png"
            },
            {
                title:"UA",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/ua.png"
            },
            {
                title:"全部",
                url:"http://sh1.hoopchina.com.cn/images/trade/app/morebrand.png"
            }    

            ]

        }
    },
   async created(){
          let data=await ballList()
          this.ball=data.data
   },

    mounted() {
     var mySwiper = new Swiper('.hot-container', {
            direction: 'vertical', // 垂直切换选项
            loop: true,
            autoplay: true,
        })
    var mySwiper1 = new Swiper('.swiper2', {
    slidesPerView: 2.5,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})
    }
}
</script>

<style scoped>
     .head {
        background-color: #f7f7f7;
        height: 1rem;
        width: 100%;
        position: fixed;
        top: 0;
        text-align: center;
        z-index: 90;
        border-bottom: 1px solid #e6e6e6;
    }

    .goback {
        position: absolute;
        left: 0;
        height: 1rem;
        width: 1rem
    }

    .goback>img {
        width: 100%;
        height: 100%;
    }

    .d-title {
        position: absolute;
        left: 25%;
        top: 20%;
        font-size: .45rem;
        width: 50%;
        font-weight: 800
    }

    .ico_list {
        position: absolute;
        right: 0;
        height: 1rem;
        width: 1rem
    }

    .ico_list>img {
        width: 100%;
        height: 100%;
    }

    .content {
        position: absolute;
        left: 0rem;
        top: 1rem;
        overflow:scroll;
        width: 100%;
        height: 100%;
        background: #f7f7f7
    }

    .menu_block {
        background: #fff;
        padding: 0 .1rem;
        margin-bottom: .1333rem;
        width:100%
    }

    .menu_block>ul {
        display: flex;
        border-bottom: .025rem solid #e6e6e6;
        padding: .1rem 0;
    }

    .menu_block_a {
        display: block;
        height: 1.33rem;
        width: 1.44rem;
        text-align: center;
    }

    .menu_block_a>img {
        width: 100%;
    }

    .hot-container {
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/index/hottest_32eac13.jpg) .08rem .3rem no-repeat;
        background-size: 2rem;
        padding-left: 1.7rem;
        height: .8rem;
        width: 100%;

    }

    .swiper-slide-a {
        display: inline-block;
        height: .42667rem;
        line-height: .42667rem;
        margin-top: .37333rem;
        font-size: .34667rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 48%;
        padding-left: .53333rem;
        border-right: 1px solid #e6e6e6;
    }

    .swiper-slide-b {
        display: inline-block;
        height: .42667rem;
        line-height: .42667rem;
        margin-top: .37rem;
        font-size: .34667rem;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 48%;
        padding-left: .33333rem;
    }

    .hot-slide {
        width: 5.4rem;
    }

    .hotactivty {
        margin-top: .2rem;
        background: #fff;
        width: 100%
    }

    .hotactivty>h2 {
        line-height: .4rem;
        padding: .2rem .3rem;
    }

    .hotactivty>ul {
        overflow: hidden;
        margin-left: .3rem
    }

    .hotactivty>ul>li {
        float: left;
        width: 32%;
        margin-right: 1.3%;
        margin-bottom: .33333rem;
    }

    .hotactivty>li>a {
        display: block;
    }

    .img {
        height: 1.78667rem;
        overflow: hidden;
        margin-bottom: .13333rem;
    }

    .img>img {
        width: 100%;
        height: 100%;
    }

    .p1 {
        margin: .08rem 0 .08rem 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow:hidden;
        font-size: 24px;
    }

    .p2 {
        margin: 0 .08rem;
        font-size: 24px;
    }

    .loveList>h2 {
        font-weight: 700;
        font-size: .3rem;
        color: #333;
        height: .75rem;
        line-height: .75rem;
        position: relative;
        padding-left: .3rem
    }

    .more {
        float: right;
        font-weight: 400;

    }
    .loveList{
        width: 100%;
        margin: 0 auto;
        background: #fff;
        margin-bottom: .26667rem;
        padding-left: .26667rem;
        overflow: hidden;
    }
    .swiper2{
        width: 7.5rem;
        height: 3rem;
    }
    .swiper-slide2{
        text-align: center;
        font-size: .33rem;
        background: #fff;
        padding: 0 .10667rem;
        padding-bottom: .26667rem;
        height: 2.86667rem;
    }
    .swiper-slide2>img{
        width: 100%;
        height: 2.4rem;
    }
    .swiper-slide2>p{
        color: #333;
        font-size: .28rem;
        height: .5rem;
        overflow: hidden;
        text-align: left;
    }
    .swiper-slide3{
        text-align: center;
        font-size: .33rem;
        background: #fff;
        padding: 0 .10667rem;
        padding-bottom: .26667rem;
        height:100%;
        width: 100%
    }
    .seeMore{
        width: 1rem;
        height: 2rem;
    }
    .seeMore>img{
        width: 1rem;
        height: 2rem;
        margin-top: .85rem
    }
    .listView{
        width: 100%;
        height: 100%;
        background: #fff
    }
    .listTop{
        height: 1.06667rem;
        line-height: 1.06667rem;
        padding: 0 .15rem 0 .7rem;
        background-color: #FFF;
        border-bottom: 1px solid #eee;
    }
    .listTop>ul{
        display: flex;
        justify-content: space-between;
        align-items: center
    }
    .listTop>ul>li{
        font-size: .23rem;
        font-weight: 900;
        color: #333;
    }
    .listMenu{
        padding-left: .3rem
    }
    .listMenu>ul>li{
       
        height: 3rem;
         padding: .2rem;
       
    }
    .listMenua{
        display: flex;
        justify-content: space-between;
        height: 2.66rem;
         padding: .2rem;
        height: 2.66rem;
        border-bottom:1px solid #e6e6e6;
        background: #fff
    }
    .listimg{
        width: 30%;
        float: left;
        height: 2.25rem;
    }
    .listimg>img{
        width: 100%;
        height: 100%;
    }
    .listdetails{
        width: 65%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .listdetails>h2{
        font-size: .28rem;
        color: #333;
        font-weight: 400;
    }
    .listmsg{
        display: flex;
        justify-content: space-around;
    }
    .listmsg{
        font-size: .23rem
    }
    .listmsg>img{
        width: .16rem;
        height: .16rem;
        display: inline-block;
        margin: 0 .13333rem;
    }
    .listfrom{
        font-size: .21rem;
        color: #a4a4a4;
        width: 100%;
        height: .41rem;
    }
    .listname{
        float: left;
    }
    .listname>span{
        color:#FF4338
    }
    .listguanzhu{
        float: right;
        text-align: left;
        height: .39rem;
        display: flex;
        justify-content: space-between;
        align-content: center
    }
    .listguanzhu>img{
        width: .28rem;
        height: .24rem;
        display: block;
        margin-right: .05rem;
        margin-top: .05rem;
    }
    .hits{
        height: .24rem;
    }
    .column_name{
        color: #999;
        font-size: .26667rem;
        border: 1px solid #a8a8a8;
        border-radius: .08rem;
        padding: 0 .13333rem;
        display: inline-block;
        max-width: 3rem;
        overflow: hidden;
        vertical-align: middle;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: .13333rem;
    }
   .face>span{
       display: inline-block;
        border-radius: .26667rem;
        width: .53333rem;
        height: .53333rem;
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
   .face{
       display: flex
   }
</style>
