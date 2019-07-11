<template>
  <div class="min_Box">
    <div class="top_bar">
      <div class="goback">
        <img src="../../../public/img/left.png" @click="toback()" />
      </div>
      <span class="d-title">热销排行</span>
      <div class="ico_list">
        <img src="../../../public/img/ddd.png" />
      </div>
      <div class="header_nav" id="header_nav">
        <div class="inner">
          <ul>
            <li>
              <a href class="icons index">首页</a>
            </li>
            <li>
              <a href class="icons me">我的</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="scroll_top">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/top_11d5d37.png"
        />
      </div>
    </div>
    <div class=".page-content">
      <van-tabs>
        <van-tab
          v-for="(item,index) in chillist"
          :title="item.name"
          :key="index"
        >
        
        <div class="prolist">
          <ul id="list">
            <li class="clearfix" v-for="(itm,idx) in info" :key="idx">
      <a href="http://www.shihuo.cn/sports/detail/96786.html?styleId=165375#qk=goods">
        <div class="img">
          <img :src="itm.img">
        </div>
        <div class="info">
        <div :class="idx<3?'sort':'sort2'"> <span>{{idx+1}}</span></div>
          <p class="title"> {{ itm.name }}</p>
          <p class="size"> {{ itm.childCategory }}</p>
          <p class="price">{{ itm.price }}</p>
        </div>
      </a>
    </li>
          </ul>
        </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { getHotsell } from "api/hotsell";
import {getHotsellList} from "api/selllist"
export default {
  name: "hotsell",
  async created() {
    let data = await getHotsell();
    this.chillist = data;
    let listdata = await getHotsellList();
    this.info=listdata.data.info;
  },
  data() {
    return {
      chillist: [],
      info:[]
    };
  },
  methods: {
    toback() {
      this.$router.back();
    }
  }
};
</script>
<style>

.min_Box {
  padding-top: 1rem;
  position: relative;
}
.min_Box .top_bar {
  background-color: #f7f7f7;
  height: 1rem;
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 90;
  border-bottom: 1px solid #e6e6e6;
}
.min_Box .top_bar .goback {
  position: absolute;
  left: 0;
  width: 4em;
  top: 0;
  height: 4em;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
}
.min_Box .top_bar .goback img {
  display: block;
  height: 82%;
}
.min_Box .top_bar .d-title {
  position: absolute;
  top: 53%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #333;
  font-size: 1.6em;
  display: inline-block;
  overflow: hidden;
  font-weight: bolder;
  width: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.min_Box .top_bar .ico_list {
  position: absolute;
  right: 0;
  top: 0;
  width: 4em;
  height: 4em;
  -webkit-box-align: center;
  -moz-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
}
.min_Box .top_bar .ico_list img {
  height: 82%;
}
.min_Box .header_nav {
  position: absolute;
  width: 36%;
  height: 90px;
  right: 10px;
  top: 3.6em;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  z-index: 99;
  display: none;
}
.min_Box .header_nav:before {
  content: "";
  position: absolute;
  right: 8px;
  top: -5px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.7);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}
.min_Box .header_nav li:first-child {
  border-bottom: 1px solid #5c5c5c;
}
.min_Box .scroll_top {
  position: fixed;
  bottom: 5em;
  right: 10px;
  display: none;
  z-index: 10;
}
.min_Box .van-tab {
  font-size: 32px;
  line-height: 0.9rem;
}
.min_Box .page-content {
  height: 100%;
  width: 100%;
}
.min_Box .van-tabs--line .van-tabs__wrap {
  height: 90px;
}
.van-tabs--line {
    padding-top: 95px;
}
 .prolist {
    background-color: #FFF;
    min-height: 100px;
}
 .prolist li {
    padding: 10px 30px;
    border-bottom: 1px solid #e2e2e2;
    position: relative;
    padding-left: 10px;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
}
.prolist li a {
    display: block;
    clear: both;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
}
.prolist li .img {
    width: 28% !important;
    float: left;
}
.prolist li .img img {
    width: 100%;
    display: block;
}
.prolist li .info {
    width: 68%;
    float: right;
    color: #333;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    -webkit-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    justify-content: space-between;
}
.prolist li .info .sort {
    position: absolute;
    right: 12px;
    top: 0;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/sales/sort_kanqiu_358afba.png) no-repeat;
    color: #fff;
    width: 36px;
    height: 48px;
    line-height: 30px;
    text-align: center;
    background-size: 100% auto;
}
.prolist li .info .sort2 {
    position: absolute;
    right: 12px;
    top: 0;
    background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/sales/sort2_0773b7c.png) no-repeat;
    color: black;
    width: 36px;
    height: 48px;
    line-height: 30px;
    text-align: center;
    background-size: 100% auto;
}
.prolist li .info .title {
    font-size: 30px;
    line-height: 30px;
    width: 100%;
}
 .prolist li .info .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
 .prolist li .info .size {
    color: #999;
    font-size: 28px;
}
.prolist li .info .price {
    font-size: 30px;
    color: #FF4338;
    font-family: HelveticaNeue-CondensedBold;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
}
</style>
