<template>
  <div class="praiseBox">
    <div class="top_bar">
      <div class="goback">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
          @click="goback()"
        />
      </div>
      <div class="searchBox">
        <form id="searchform" action="#">
          <div class="search">
            <input
              type="search"
              class="input"
              name="search"
              placeholder="请输入产品名或商品名"
              id="searchVal"
              value
            />
            <input type="reset" class="reset" value style="display: none;" />
          </div>
        </form>
        <a href="javascript:void(0);" class="cancel" style="display: none;">取消</a>
      </div>
      <div class="ico_list">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
        />
      </div>
      <div class="scroll_top" style="display: none;">
        <img
          src="//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/top_11d5d37.png"
        />
      </div>
    </div>
    <div class="top_ddd">
    <van-dropdown-menu>
      <van-dropdown-item title="筛选" ref="item">
    <van-switch-cell v-model="switch1" title="包邮" />
    <van-switch-cell v-model="switch2" title="团购" />
    <van-button block type="info" @click="onConfirm">确认</van-button>
  </van-dropdown-item>
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
</div>
<div class="list-content float-model">
<ul style="">
<li v-for="(item,index) in info" :key="index">
<a href="http://m.shihuo.cn/sports/detail/13.html?sourceType=#qk=list">
<div class="img">
<img width="100%" :src="item.img">
</div>
<div class="grid">
<p class="title">
{{ item.name }}<span>
包邮</span><span>
团购</span>
</p>
<p class="intro">{{ item.intro }}</p>
<p class="price">
<span class="red">
<i>¥</i>
{{ item.price }}</span>
起</p>
<p style="display: none;">暂无售卖</p>
</div>
<div class="hits">
热度：{{item.hits }}</div>
</a>
</li>
</ul>
</div>
  </div>
</template>
<script>
import {getPraise} from "api/praise";
export default {
  name: "praise",
  async created(){
    let data = await getPraise();
    this.info=data.data.info;
  },
  data() {
    return {
      value1: 0,
      value2: 'a',
      switch1: false,
      switch2: false,
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      info:[]
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
    },
    goback(){
      this.$router.back()
    }
  }
  
};
</script>
<style>
.praiseBox{
  padding-top:1.86rem;
}
.praiseBox .top_bar {
  background-color: #f7f7f7;
  height: 4em;
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 90;
  border-bottom: 1px solid #e6e6e6;
  overflow: hidden;
}
.top_ddd{
  position: fixed;
  top: 0.96rem;
  left: 0;
  width: 100%;
  height: .9rem;
  z-index: 2003;
  margin-bottom: .5rem;
  background: #ccc;
}
.praiseBox .top_bar .goback {
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
.praiseBox .top_bar .goback img {
  display: block;
  height: 82%;
}
.praiseBox .searchBox {
  width: 79%;
  padding: 0.2rem 0.26667rem;
  position: absolute;
  z-index: 1;
  left: 10%;
  background-color: #f7f7f7;
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.praiseBox .searchBox .search {
  overflow: hidden;
  font-size: 1.1em;
  border: 0 none;
  color: #666;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background: #e8e8e8
    url(//sh1.hoopchina.com.cn/images/trademobile/search/zoom.png) 9px center
    no-repeat;
  background-size: 1.3em;
}
.flexibile-model .searchBox .search {
  background-position: 0.24rem center;
  -webkit-border-radius: 0.13333rem;
  border-radius: 0.13333rem;
}
.praiseBox .searchBox .search .input {
  width: 100%;
  border: 0;
  background: 0 0;
  color: #666;
  font-size: 1.1em;
  height: 2.2rempx;
  outline: 0;
  text-align: left;
  padding: 0 10% 0 13%;
  float: left;
  box-sizing: border-box;
}
.praiseBox .searchBox .search .input[type="search"] {
  height: 2.2em;
}
.praiseBox .searchBox .search input.reset {
  left: 77%;
  top: 10%;
  height: 80%;
  background: url(//sh1.hoopchina.com.cn/images/trademobile/search/search_close.png?v=2016092101)
    center no-repeat;
  background-size: 60%;
}
.praiseBox .searchBox .cancel {
  color: #666;
  font-size: 1.3em;
  padding-left: 10px;
  display: inline-block;
  position: absolute;
  right: 10px;
  top: 12px;
}
.praiseBox .top_bar .ico_list {
  position: absolute;
  right: 0;
  top: 0;
  width: 4em;
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
.praiseBox .change-list-btn {
  position: fixed;
  width: 0.61333rem;
  height: 0.61333rem;
  top: 0.33333rem;
  right: 1.26667rem;
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: contain;
  background-size: contain;
  background-color: transparent;
}
.praiseBox .change-list-btn.model2 {
  background-image: url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/sports/list/model-2_c134d07.png);
}
.praiseBox .top_bar .ico_list img {
  height: 82%;
}
.praiseBox .change-list-btn.show {
  z-index: 91;
}
.van-dropdown-menu {
    height: .9rem;
    background-color: #fff;
    -webkit-user-select: none;
    user-select: none;
}
.van-dropdown-menu__title {
    position: relative;
    font-size: 28px;
}
.van-dropdown-menu__title::after {
    position: absolute;
    top: 3px;
    right: -22px;
    border: 8px solid;
    border-color: transparent transparent currentColor currentColor;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    opacity: .8;
    content: '';
}
.van-cell {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 1.1rem;
    padding: 10px 15px;
    overflow: hidden;
    color: #323233;
    font-size: 32px;
    line-height: 24px;
    background-color: #fff;
}
.van-switch {
    display: inline-block;
    box-sizing: content-box;
    border: 4px solid rgba(0,0,0,.1);
    position: relative;
    width: 1rem;
    height: .4rem;
    border-radius: 1em;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
}
.van-switch--on .van-switch__node {
    -webkit-transform: translateX(1em);
    transform: translateX(0.6rem);
}
.van-switch__node {
    position: absolute;
    top: 0;
    left: 0;
    width: .4rem;
    border-radius: 100%;
    
    -webkit-transition: .3s;
    transition: .3s;
}
.van-button {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    height: 90px;
    margin: 0;
    padding: 0;
    font-size: 28px;
    line-height: 42px;
    text-align: center;
    border-radius: 2px;
    -webkit-appearance: none;
    -webkit-text-size-adjust: 100%;
}
.praiseBox .list-content {
    padding: .26667rem .26667rem 0;
    background-color: #FFF;
    overflow: hidden;
}
.praiseBox .list-content ul {
    width: 9.86667rem;
}
.praiseBox .list-content ul:before, .mainBox .searchapp .list-content ul:after {
    content: "";
    display: table;
}
.praiseBox .list-content.float-model li {
    width: 9.46667rem;
    height: 3.2rem;
    padding: .26667rem 0;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 0;
}
.praiseBox .list-content li {
    list-style-type: none;
    width: 4.6rem;
    height: 6.46667rem;
    margin: 0 .26667rem .13333rem 0;
    float: left;
}
.praiseBox .list-content.float-model li a {
    display: block;
    position: relative;
    height: 100%;
}
.praiseBox .list-content.float-model li .img {
    width: 2rem;
    height: 2rem;
    float: left;
}
.praiseBox .list-content.float-model li .grid {
    margin-left: .2rem;
    width: 6.46667rem;
    height: 2.66667rem;
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
.praiseBox .list-content.float-model li .title {
    text-overflow: inherit;
    white-space: normal;
    line-height: .46667rem;
    height: .96rem;
    font-size: 30px;
    color: black;
}
.praiseBox .list-content li .title span {
    display: inline-block;
    color: #FF4338;
    border: 1px solid #FF4338;
    vertical-align: middle;
    padding: 0 .13333rem;
    line-height: .4rem;
    height: .4rem;
    border-radius: .33333rem;
    margin: 0 .08rem .08rem;
    font-size: 18px;
}
.praiseBox .list-content li p {
    font-size: 24px;
    color: #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.praiseBox .list-content ul .price {
    font-size: 22px;
}
.praiseBox .list-content li .price .red {
    color: #FF4338;
    font-size: 30px;
}
.praiseBox .list-content ul p:last-child {
    line-height: 45px;
}
.praiseBox .list-content.float-model li .hits {
    position: absolute;
    right: 2.57rem;
    bottom: 0;
    color: #999;
    display: block;

}
.searchapp .list-content {
    padding: .26667rem .26667rem 0;
    background-color: #FFF;
    overflow: hidden;
    position: relative;
}
</style>
