<template>
     <div class="wrap">
        <div class="head">
            <div class="goback">
                <router-link to="/home" src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png" tag="img"></router-link>

            </div>
            <span class="d-title">
                #什么跑鞋值得买#
            </span>
            <div class="ico_list">
                <img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png" />
            </div>
        </div>
        <div class="topic-detail" >
            <div class="top-banner">
                <div class="ad">
                    <img src="http://shihuo.hupucdn.com/column/201804/1310/53f81f02c73b273292b4945a26ae85b2.jpg" />
                    <div class="title">
                        <h2>#什么跑鞋值得买#</h2>
                        <p class="num">
                            <span>___</span>
                            107人参与
                            <span>___</span>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <div class="intro">
                不同价位不同的要求，请大家各抒己见，说说各价位上最值得买的跑鞋
            </div>
            <div class="seeMore">
                <a href="#">
                    <span>___</span>
                    查看详情 More
                    <span>___</span>
                </a>
            </div>
            <div class="hot-topic">
                <div class="hottitle">
                    <span>热门评论</span>
                </div>
                <div class="hotlist">
                    <ul>
                        <li v-for="(item,index) in disList" :key="index">
                            <a href="#" class="authora">
                                <div class="author">
                                    <a href="#" class="authorpic">
                                        <img :src="item.data.avatar" />
                                    </a>
                                    <div class="nameM">
                                        <p class="name">{{item.data.author_name}}</p>
                                        <p class="time">{{item.data.date}}</p>
                                    </div>
                                </div>
                                <div class="content">
                                    <a href="#" class="contenta">
                                        <div class="tit">{{item.data.intro}}</div>
                                        <div class="imgNum1">
                                            <div class="center" v-for="(itm,indx) in item.data.img_attr" :key="indx">
                            
                                                      <img :src="itm" />
                                          
                                            </div>
                                        </div>
                                        <div class="tag">
                                            <p class="like">{{item.data.praise}}</p>
                                            <p class="say">{{item.data.reply_count}}</p>
                                        </div>
                                    </a>

                                </div>

                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>


</template>
<script>
import{discussList} from "api/home.js"
export default {
    name:"discuss",
    data(){
        return{
            disList:[]
        }
    },
    async created(){
        let data=await discussList()
        this.disList=data.data.list
    }
}
</script>

<style scopd> 
 
  .wrap {
        width: 100%;
        height: 100%;
        overflow: auto;
        background: #f0f3f5
    }
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
    .ad {
        position: relative;
    }

    .ad>img {
        width: 100%;
        height: 100%;
    }

    .title {
        position: absolute;
        width: 100%;
        top: 35%;
        left: 0;
        color: #fff;
        text-align: center;
    }

    .title>h2 {
        font-size: .45rem;
    }

    .num {
        font-size: .3rem
    }
    .top-banner{
        margin-top: 1rem
    }
    .intro {
        padding: .35rem;
        font-size: .28rem;
        font-weight: 500;
        color: #666;
        background: #fff
    }

    .seeMore {
        color: #9c9c9c;
        font-size: .32rem;
        font-weight: 900;
        text-align: center;
        padding-bottom: .4rem;
        background: #fff
    }

    .seeMore>a>span {
        position: relative;
        top: -.16rem;

    }

    .hot-topic {
        margin-top: .2rem;
        background: #fff
    }

    .hottitle {
        padding: .35rem 0 0 .2rem;
        padding-bottom: 0;
        font-size: .35rem;
        font-weight: 600
    }

    .hotlist {
        padding-left: .26667rem;
        margin-bottom: .26667rem;
    }

    .hotlist>ul>li {
        border-bottom: .05rem solid #e6e6e6;
        padding: .26667rem .26667rem .26667rem 0;
    }

    .authora {
        display: block;
        width: 100%;
    }

    .authorpic {
        height: .90667rem;
        width: .90667rem;
        float: left;
        border-radius: .66667rem;
        overflow: hidden;
        margin-right: .26667rem;
    }
    .authorpic >img{
        width: 100%
    }
    .name {
        font-size: .31rem;
    }

    .time {
        font-size: .3rem
    }

    .imgNum1 {
        margin-top: .26667rem;
        margin-left: 1.2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start
    }
    .tit{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        margin-left: 1.2rem;
        font-size: .3rem
    }
    .center {
        float: left;
        margin-right: .13333rem;
        margin-bottom: .13333rem;
        width: 30%;
        height: 100%;
        padding-bottom: 32%;
        height: 0;
        overflow: hidden;
        position: relative;
    }

    .center>img {
        width: 100%;
        display: block;
    }
 
    .tag{
        margin-left: 1.2rem;
        margin-top: .2rem
    }
    .like {
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/topic/images/like_5a4d850.png) left center no-repeat;
        padding-left: .58667rem;
        background-size: .45333rem auto;
        height: .45333rem;
        display: inline-block;
        color: #a4a4a4;
        margin-right: .26667rem;
        line-height: .45333rem
    }

    .say {
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/topic/images/say_6b487a5.png) left center no-repeat;
        padding-left: .58667rem;
        background-size: .42667rem auto;
        line-height: .45333rem;
        height: .45333rem;
        display: inline-block;
        color: #a4a4a4;
    }

</style>
