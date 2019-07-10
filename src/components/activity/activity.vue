<template>
     <div id="wrap">
        <!-- 头部 -->
        <div class="menuTop">
            <ul class="menuTopUl">
                <li v-for="(item,index) in actBanner" :key="index" @click="handclick(index)" :class="active==index?'show':''">
                    <a class="menuTopa">
                        <img :src="item.url"/>
                    </a>
                </li> 
            </ul>
        </div>
        <div class="hotBrand">
                <h2>
                    <span></span>
                    热销产品
                    <span></span>
                </h2>
            </div>
        <div class="new">
            <h2>
                <span></span>
                最新上架
                <span></span>
            </h2>
            <div class="list-block" v-for="(item,index) in actList" :key="index">
                
                <p class="lista">
                   <span>{{item.title}}</span><span>{{item.subtitle}}</span>
                </p>
                <ul class="newUl">
                    <li class="newLi" v-for="(itm,indx) in item.goods_info" :key="indx">
                        <a class="newA">
                            <div class="imglist">
                                <img :src="itm.img"/>
                            </div>
                            <div class="imgtitle">{{itm.title}}</div>
                            <div class="price">
                                <span v-if="itm.quan_price==''">￥{{itm.price}}</span>
                                <span v-if="!itm.quan_price==''">券后{{itm.price}}</span>
                            </div>
                        </a>
                    </li>         
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { actList } from "api/home.js";
export default {
  name: "actList",
  async created() {
    let data = await actList();
    this.actList = data.data.newDate;
  },
  methods:{
      handclick(index){
          this.active=index
      }
  },
  data() {
    return {
      actList: [],
      active:"",
      actBanner: [
        {
          url:
            "http://sh1.hoopchina.com.cn/app/assets/youhui/1.0.2/images/menu_all_484bd6a.png"
        },
        {
          url:
            "http://sh1.hoopchina.com.cn/app/assets/youhui/1.0.2/images/menu_yd_80ef80a.png"
        },
        {
          url:
            "http://sh1.hoopchina.com.cn/app/assets/youhui/1.0.2/images/menu_nz_6ba8207.png"
        },
        {
          url:
            "http://sh1.hoopchina.com.cn/app/assets/youhui/1.0.2/images/menu_sm_60e5a5f.png"
        },
        {
          url:
            "http://sh1.hoopchina.com.cn/app/assets/youhui/1.0.2/images/menu_qt_33e8d13.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.show{
    background: red
}
#wrap {
  background-color: #f0f3f5;
}
.menuTop {
  width: 100%;
  height: 1.04rem;
  background: #fff;
}
.menuTopUl {
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 20px rgba(243, 3, 3, 0.1);
  z-index: 11;
}
.menuTopUl > li {
  float: left;
  width: 16.666%;
}
.menuTopa > img {
  width: 100%;
  height: 100%;
}
.hotBrand {
  padding-top: 0.12rem;
  background: #fff;
}
.hotBrand > h2 {
  text-align: center;
  font-size: 14px;
}
.hotBrand > h2 > span {
  border-top: 1px solid #dedede;
  width: 15px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
}
.new {
  width: 100%;
  margin-top: 0.2rem;
}
.list-block {
  padding: 0 0.12rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
}
.new> h2 {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  text-align: center;
  align-items: center;
  background: #fff
}
.new > h2 > span {
  border-top: 0.05rem solid #dedede;
  width: 0.3rem;
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.2rem;
}
.lista {
  display: block;
  color: #333;
  height: 0.6rem;
  line-height: .6rem;
  text-align: center;
  align-items: center;
}
.lista > span:nth-child(2){

}
.lista > span:nth-child(2) {
  color: #dd1712;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  font-weight: 800;
  font-size: 0.2rem;
}
.newUl {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.newLi {
  padding: 0 0.15rem;
  padding-bottom: 0.12rem;
  float: left;
  width: 33.33%;
  text-align: center;
}
.newA {
  width: 2.16rem;
  height: 3.12rem;
}
.imglist {
  width: 2.16rem;
  height: 2.24rem;
}
.imglist > img {
  width: 100%;
  height: 100%;
}
.imgtitle {
  color: #333;
  font-size: 0.26rem;
  width: 100%;
  overflow: hidden;
  height: 0.53rem;
  line-height: 0.53rem;
}
.price > span {
  color: red;
  font-size: 0.25rem;
  font-weight: 400;
}
</style>
