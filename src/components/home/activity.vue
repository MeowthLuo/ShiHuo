<template>
<div>
    <h2>热门活动</h2>
    <ul>
        <li>
            <a> 
                <div class="img"><img src="http://shihuo.hupucdn.com/appZone/201805/0911/8c8778d4d917f0fb719a2f40ff3b71eb.jpg"/></div>
                <p class="one">数码测评</p>
                <p class="two">全面解析热门数码产品</p>
            </a>
        </li>
        <li>
            <a> 
                <div class="img"><img src="http://shihuo.hupucdn.com/appZone/201811/1214/7d721a0762b1a4762557aa33c75e6404.jpg"/></div>
                <p class="one">花鸟市场行</p>
                <p class="two">今天穿这样</p>
            </a>
        </li>
      <router-link to="/activity" tag="li">
            <a> 
                <div class="img"><img src="http://shihuo.hupucdn.com/appHome/201808/1710/5e683699826e2a13abd239e4e4e36793.jpg"/></div>
                <p class="one">skullcandy骷髅头耳机</p>
                <p class="two">券后低至89元起</p>
            </a>
        </router-link>
      <router-link to="/discuss" tag="li">
            <a> 
                <div class="img"><img src="http://shihuo.hupucdn.com/appZone/201804/1310/87609edab6d859bb211b0243418109b5.jpg"/></div>
                <p class="one">#什么跑鞋值得买#</p>
                <p class="two">晒晒你最爱的跑鞋</p>
            </a>
        </router-link>
        <router-link to="/basketball" tag="li">
            <a> 
                <div class="img"><img src="http://shihuo.hupucdn.com/appZone/201807/2411/b9541b36f94bfa8c6c51482e7536eb35.jpg"/></div>
                <p class="one">实战性价比之选</p>
                <p class="two">球星支线</p>
            </a>
        </router-link>
        <router-link to="/column" tag="li">
            <a> 
                <div class="img"><img src="http://shihuo.hupucdn.com/appZone/201904/1215/74d68d16fe92f589562be729a89ee9a3.jpg"/></div>
                <p class="one">5折上新，95分专属抢购</p>
                <p class="two">低价折扣超值精选</p>
            </a>
        </router-link>
    </ul>
</div>  
</template>

<script>
export default {
    
}
</script>
<style scoped>
    h2{
        font-weight: 900;
        height: .7rem;
        line-height: .7rem;
        padding: 0 .4rem;
        margin-bottom: .13333rem;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
        padding: 0 .15rem
        
    }
    li{
        width: 32%;
        height: 2.3rem;
        margin-right: 1.3%;
        margin-bottom: .33333rem;
    }
    a{
        display: block;
        width: 100%;
        height: 2.03rem;
    }
    .img{
        width:100%;
        height: 1.34rem;
        overflow: hidden;
        margin-bottom: .13333rem;
    }
    .img>img{
        width: 100%;
    }
    .one{
        font-weight: 700;
        font-size: .24rem;
        width: 100%;
    }
    .two{
        color: #666;
        text-align: left;
        line-height: .4rem;
    }
</style>
