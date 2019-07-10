<template>
      <div class="content">
    <!-- banner -->
        <div class="banner">
            <img src="http://shihuo.hupucdn.com/column/201905/2612/93b86fa82080eb048a39902dae9e1d86.png"/>
        </div>
    <!-- title -->
        <h3 class="title">识货周榜</h3>
    <!-- 列表 -->
    <ul class="shihuo-prolist">
        <li v-for="(item,index) in column" :key="index">
            <a class="prolist">
                <div class="img">
                    <img :src="item.data.img_path"/>
                </div>
                <div class="details">
                    <h2>
                        {{item.data.title}}
                    </h2>
                    <p>大家都在看</p>
                    <div class="from">
                        <div class="user-img">
                            <img :src="item.data.avatar"/>
                            
                            {{item.data.author_name}}
                                
                        </div>
                        <div class="guanzhu">
                            {{item.data.praise}}
                        </div>
                    </div>
                </div>
            </a>
        </li>
        
    </ul>
    </div>
</template>

<script>
import{columnList} from "api/home.js"
export default {
    name:"columncontent",
    async created(){
        let data=await columnList()
        this.column=data.data
    },
    data(){
        return{
            column:[]
        }
    },

}
</script>

<style scoped>
     .content{
        position: absolute;
        left: 0;
        top: 1rem;
        height: 100%;
        overflow: auto
    }
    /* banner */
    .banner{
        height: 3.8rem
    }
    .banner>img{
        width: 100%;
        height: 100%;
    }
    .title{
        position: relative;
        width: 7rem;
        height: .42rem;
        margin: .4rem .2rem;
        text-align: center
    }
    .title:before{
        content: "";
        width: 100%;
        height: .05rem;
        background-color: #e6e6e6;
        position: absolute;
        top: 50%;
        left: 0;
        z-index: -1;
    }
    .shihuo-prolist>li{
        width: 100%;
        height: 3.19rem;
    }
    .prolist{
        padding: 10px 0;
        margin: 0 10px;
        border-bottom: 1px solid #e6e6e6;
        display: flex;
        flex: 1;
        overflow: hidden;
        position: relative;
    }
    .img{
        width: 40%;
        height: 2.7rem;
        text-align: center;
        overflow: hidden;
        position: relative;
    }
    .img>img{
        width: 100%;
        height: 100%;
    }
    .details{
        margin-left:.12rem;
        width: 58%;
    }
    .details>h2{
        font-weight: 400;
        font-size: .3rem;
        line-height: .3rem;
        max-height: .8rem;
        color: #333;
    }
    .details>p{
        display: inline-block;
        font-size: .24rem;
        line-height: .61rem;
        height: .61rem;
        color: #666;
        margin: .38rem 0
    }
    .from{
        font-size: .3rem;
        width: 100%;
        line-height: .6rem;
        height: .6rem;
        color: #999;
        position: relative;
    }
    .user-img{
        height: 100%;
    }
    .user-img>img{
        height: 100%;
        border-radius: 50%;
        display: inline-block;
        vertical-align: top;
    }
    .guanzhu{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        text-align: right;
        height: 100%;
    }
    .guanzhu::before{
        content: "";
        display: inline-block;
        vertical-align: top;
        margin-right: 3px;
        background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/column/vote_icon_8caec38.png) no-repeat center left transparent;
        width: 10%;
        max-width: 15px;
        height: 100%;
        -webkit-background-size: contain;
        background-size: contain;
    }
</style>
