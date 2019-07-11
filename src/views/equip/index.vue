<template>
  <div class="equipBox indexpage">
    <div id="equip">
      <div class="top_bar">
        <form class="searchBox" >
          <div class="search_box" style="width:90%">
            <div class="search">
              <input
                type="text"
                v-model="inputVal"
                class="input"
                placeholder="搜索全网低价好券"
                id="searchVal"
                @click="showshow()"
              />
            </div>
          </div>
          <a href="javascript:void(0);" :class="{show,cancel}" v-show="showit" @click="isnotshow()">取消</a>
          <div class="ico_list" v-show="!showit">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/head_list_4a4f511.png"
            />
          </div>
          <div class="header_nav" id="header_nav" style="display: none;">
            <div class="inner">
              <ul>
                <li>
                  <a href="//m.shihuo.cn#qk=gd&amp;order=1" class="icons index">首页</a>
                </li>
                <li>
                  <a href="//m.shihuo.cn/user#qk=gd&amp;order=8" class="icons me">我的</a>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </div>
<div class="search_page" id="search-page" style v-show="showit">
    <div class="inner" id="searchWrapper">
      <dl>
        <dt>热门搜索</dt>
        <dd class="sear_hot">
          <a href="http://www.shihuo.cn/column/362.html#qk=rs"></a>
        </dd>
        <dt class="his" style="display: none;">历史搜索</dt>
        <dd class="sear_record clearfix">
          <ul id="history" class="his" style="display: none;"></ul>
        </dd>
        <dd>
          <p class="clear_history his" style="display: none;">
            <a href="javascript:void(0);" id="clear_history">清空历史记录</a>
          </p>
        </dd>
      </dl>
    </div>
    <div class="inner" id="searchRelate" style>
      <ul>
        <li v-for="(word,dx) in listVal" :key="dx">
          <a href="/search/searchResult/goods?keywords=aj1">{{ word }}</a>
        </li>
      </ul>
    </div>
  </div>
    <div class="menu-area">
      <ul class="clearfix">
        <router-link to="/hotsell" tag="li">
          <a href>热销排行</a>
        </router-link>
        <router-link to="/praise" tag="li">
          <a href>好价精选</a>
        </router-link>
        <li>
          <a href>当季新款</a>
        </li>
      </ul>
    </div>
    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1"
          class="bg-loding-img"
          imgatr="http://shihuo.hupucdn.com/appZones/201701/1815/18dad2cc843300a3560cca54886957e5.png?imageView2/0/w/400/h/208/interlace/1"
        />
      </div>
      <a class="click" href>
        <div class="bg-color"></div>
        <div class="ban-txt">
          <div class="h2">
            <s>篮球</s>BASKETBALL
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            />
          </div>
          <div class="txt">
            <p></p>
            <p>韦德之道7开箱</p>
          </div>
          <div class="list clearfix" style="margin-top:0;"></div>
          <div class="left">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            />
          </div>
          <div class="right">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="tag-area">
      <div class="tag-list">
        <a href>篮球鞋</a>
        <a href>篮球服饰</a>
        <a href>篮球配件</a>
        <a href>
          篮球
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
      <div class="tag-list">
        <a href>Nike</a>
        <a href>adidas</a>
        <a href>Jordan</a>
        <a href>
          全部
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
    </div>
    <div class="bg-area"></div>
    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1"
          class="bg-loding-img"
          imgatr="http://shihuo.hupucdn.com/appZones/201701/1815/fa1b657f6d267f5ccb6c3213ba7cebd3.png?imageView2/0/w/400/h/208/interlace/1"
        />
      </div>
      <a class="click" href>
        <div class="bg-color"></div>
        <div class="ban-txt">
          <div class="h2">
            <s>跑步</s>RUNNING
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            />
          </div>
          <div class="txt">
            <p></p>
            <p>户外跑步选购</p>
          </div>
          <div class="list clearfix" style="margin-top:0;"></div>
          <div class="left">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            />
          </div>
          <div class="right">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="tag-area">
      <div class="tag-list">
        <a href>跑步</a>
        <a href>跑步服饰</a>
        <a href>跑步配件</a>
        <a href>
          运动补给
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
      <div class="tag-list">
        <a href>adidas</a>
        <a href>asics</a>
        <a href>New Balance</a>
        <a href>
          全部
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
    </div>
    <div class="bg-area"></div>
    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1"
          class="bg-loding-img"
          imgatr="http://shihuo.hupucdn.com/appZones/201701/1815/d5bdeb4f9dee46e6cf24e239da707bc3.png?imageView2/0/w/400/h/208/interlace/1"
        />
      </div>
      <a class="click" href>
        <div class="bg-color"></div>
        <div class="ban-txt">
          <div class="h2">
            <s>潮流</s>CASUAL
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            />
          </div>
          <div class="txt">
            <p>Maverick 泰克大象印花短袖等8款超低价</p>
            <p>年度鞋款回顾</p>
          </div>
          <div class="list clearfix">
            <div class="boxF">
              <div class="boxS">
                <div
                  class="boxT bg-loding-img-s"
                  imgatr="http://shihuo.hupucdn.com/trade/reposition/2017-11-29/7bffa5f42341f0c196db59b9fa89de60.png"
                  style="background-image:url(http://shihuo.hupucdn.com/trade/reposition/2017-11-29/7bffa5f42341f0c196db59b9fa89de60.png?imageView2/1/w/100/h/100)"
                ></div>
              </div>
            </div>
            <div class="boxF">
              <div class="boxS">
                <div
                  class="boxT bg-loding-img-s"
                  imgatr="http://shihuo.hupucdn.com/trade/goods/style/20170411/adecead744a0d0c0a81a4803c5c84a821491896490.jpg"
                  style="background-image:url(http://shihuo.hupucdn.com/trade/goods/style/20170411/adecead744a0d0c0a81a4803c5c84a821491896490.jpg?imageView2/1/w/100/h/100)"
                ></div>
              </div>
            </div>
            <div class="boxF">
              <div class="boxS">
                <div
                  class="boxT bg-loding-img-s"
                  imgatr="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzLzcwMTA3MzY3Ny9UQjJFeE9Hd1I0bHB1Rmp5MXpqWFhjQUtwWGFfISE3MDEwNzM2NzcuanBn"
                  style="background-image:url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzLzcwMTA3MzY3Ny9UQjJFeE9Hd1I0bHB1Rmp5MXpqWFhjQUtwWGFfISE3MDEwNzM2NzcuanBn?imageView2/1/w/100/h/100)"
                ></div>
              </div>
            </div>
            <div class="boxF">
              <div class="boxS">
                <div
                  class="boxT bg-loding-img-s"
                  imgatr="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI0MDI3NTY5OTQvVEIyX3lMSmVSMGxwdUZqU3N6ZFhYY2R4RlhhXyEhMjQwMjc1Njk5NC5qcGc"
                  style="background-image:url(http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2k0LzI0MDI3NTY5OTQvVEIyX3lMSmVSMGxwdUZqU3N6ZFhYY2R4RlhhXyEhMjQwMjc1Njk5NC5qcGc?imageView2/1/w/100/h/100)"
                ></div>
              </div>
            </div>
          </div>
          <div class="left">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            />
          </div>
          <div class="right">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="tag-area">
      <div class="tag-list">
        <a href>鞋类</a>
        <a href>服饰</a>
        <a href>配件</a>
        <a href>
          耳机
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
      <div class="tag-list">
        <a href>Converse</a>
        <a href>CASIO</a>
        <a href>Vans</a>
        <a href>
          全部
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
    </div>
    <div class="bg-area"></div>
    <div class="banner-area">
      <div class="bg-img">
        <img
          src="http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1"
          class="bg-loding-img"
          imgatr="http://shihuo.hupucdn.com/appZones/201701/1815/f08e00fd62f3e0b2561e45c9f5db0272.png?imageView2/0/w/400/h/208/interlace/1"
        />
      </div>
      <a class="click" href>
        <div class="bg-color"></div>
        <div class="ban-txt">
          <div class="h2">
            <s>健身</s>FITNESS
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-go_f747d60.png"
            />
          </div>
          <div class="txt">
            <p>Landcase 暗黑系列 大容量旅游运动背包 Z-301, adidas 运动短袖T恤 DN7389, adidas 运动短袖T恤 DN7389, Puma/彪马 跑步短袖T恤 853131</p>
            <p>战斗绳狂塑</p>
          </div>
          <div class="list clearfix" style="margin-top:0;"></div>
          <div class="left">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-1_2b1686e.png"
            />
          </div>
          <div class="right">
            <img
              src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/ban-2_9a175b7.png"
            />
          </div>
        </div>
      </a>
    </div>
    <div class="tag-area">
      <div class="tag-list">
        <a href>篮球鞋</a>
        <a href>篮球服饰</a>
        <a href>篮球配件</a>
        <a href>
          篮球
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
      <div class="tag-list">
        <a href>Nike</a>
        <a href>adidas</a>
        <a href>Jordan</a>
        <a href>
          全部
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-3_b996a60.png"
          />
        </a>
      </div>
    </div>
    <div class="bg-area"></div>
    <Equiplist />
  </div>
</template>

<script>
import Equiplist from "components/equiplist";
import {getSearch} from "api/search";
export default {
  name: "equip",
  components: {
    Equiplist
  },
  watch:{
    async inputVal(newVal){
      let data = await getSearch(newVal)
     this.listVal = data.data;
      
    }
  },
  data(){
    return{
      showit:false,
      show:false,
      cancel:"cancel",
      inputVal:"",
      listVal:[]
    }
  },
  methods:{
    showshow(){
      this.showit=true;
      this.show=true;
    },
    isnotshow(){
      this.showit=false;
      this.inputVal=""
    }
  }
};
</script>

<style >
.equipBox .top_bar {
  height: .85rem;
  width: 100%;
  background: #f7f7f7;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.equipBox {
  padding-top: 0.85rem;
  overflow-y: scroll;
}
.top_bar .cancel.show {
    display: block;
    float: left;
    font-size: .3rem;
    color: #666;
    width: .7rem;
    text-align: center;
    height: .73333rem;
    line-height: .73333rem;
    margin: .1rem 0;
}
.equipBox .top_bar .searchBox .search_box {
    float: left;
    width: 100%;
    overflow: hidden;
    height: 100%;
}
.equipBox .searchBox{
  height: .85rem;
}

.equipBox .top_bar .searchBox .search_box .search {
    width: 6.6rem;
    float: left;
    padding-left: .26667rem;
    position: relative;
    height: 100%;
}

.equipBox .top_bar .searchBox .search_box .search .input {
    width: 6.4rem;
    border-radius: .10667rem;
    margin: .2rem 0;
    height: .55333rem;
    line-height: .55333rem;
    border: 0;
    padding-left: .6rem;
    color: #666;
    font-size: .32rem;
    background: #ebebeb url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/widget/header/search_0b8e800.png) .13333rem center no-repeat;
    background-size: .34667rem;
    overflow: hidden;
}
.equipBox .top_bar .ico_list {
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
.equipBox .top_bar .ico_list {
    height: 100%;
    width: 10%;
}
.equipBox .top_bar .ico_list img {
    width: 100%;
    height: auto;
}
.equipBox .search_page {
    background: #fff;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    padding-top: 1.26667rem;
    overflow-y: scroll;
    z-index: 9;
}
.equipBox .search_page #searchWrapper {
    width: 100%;
    background: #fff;
    position: absolute;
    z-index: 81;
    left: 0;
    top: 1.26667rem;
}
.search_page dl {
    background: #fff;
    padding: .26667rem;
    padding-right: 0;
    padding-bottom: 0;
}
.search_page dl dt {
    font-size: .34667rem;
    color: #999;
    margin-bottom: .26667rem;
}
.search_page dl .sear_hot {
    margin-bottom: .13333rem;
}
.search_page dl .sear_hot a {
    font-size: .34667rem;
    display: inline-block;
    margin-right: .06667rem;
    margin-bottom: .26667rem;
    border: 1px solid #aeaeae;
    color: #444;
    padding: .13333rem;
    border-radius: 3px;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
}
.clearfix:before, .clearfix:after {
    display: table;
    content: "";
    line-height: 0;
    clear: both;
}
.search_page #searchRelate {
    background: #fff;
    overflow: hidden;
    position: absolute;
    z-index: 82;
    left: 0;
    top: 1.26667rem;
    width: 100%;
    height: 100%;
}
.search_page #searchRelate li {
    height: 1.18667rem;
    line-height: 1.18667rem;
    padding-left: .26667rem;
}
.search_page #searchRelate li a {
    display: block;
    color: #444;
    font-size: .4rem;
    border-bottom: 1px solid #e6e6e6;
    width: 100%;
    height: 100%;
}
.equipBox .menu-area li {
  width: 33.33%;
  padding: 0.2rem 0;
  float: left;
}

.equipBox .menu-area li a {
  display: block;
  text-align: center;
  color: #333;
  font-size: 0.28rem;
  border-right: 1px solid #d4d4d4;
}
.equipBox .clearfix:before,
.equipBox .clearfix:after {
  display: table;
  content: "";
  line-height: 0;
}

.equipBox .menu-area {
  width: 100%;
  height: 1.51rem;
}
.equipBox .clearfix:before,
.equipBox .clearfix:after {
  display: table;
  content: "";
  line-height: 0;
}
.equipBox .clearfix:after {
  clear: both;
}

.equipBox .clearfix:before,
.equipBox .clearfix:after {
  display: table;
  content: "";
  line-height: 0;
}
.equipBox .menu-area li a:before {
  content: "";
  display: block;
  margin: 0 auto 0.2rem;
}
.equipBox .menu-area li:nth-child(1) a:before {
  width: 1.14667rem;
  height: 0.58667rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-1_f79f337.png)
    no-repeat center center transparent;
  -webkit-background-size: contain;
  background-size: contain;
  margin-left: 40%;
}
.equipBox .menu-area li:nth-child(2) a:before {
  width: 0.58667rem;
  height: 0.58667rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-2_4b3ef21.png)
    no-repeat center center transparent;
  -webkit-background-size: contain;
  background-size: contain;
}

.equipBox .menu-area li:nth-child(3) a:before {
  width: 0.56rem;
  height: 0.50667rem;
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/zhuangbei-index-menu-3_680282c.png)
    no-repeat center center transparent;
  -webkit-background-size: contain;
  background-size: contain;
}

.equipBox .banner-area {
  position: relative;
  height: 3.9rem;
}

.equipBox .banner-area .bg-img img {
  width: 100%;
  height: 3.9rem;
}

.equipBox .banner-area .bg-color {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.9rem;
  background-color: #000;
  opacity: 0.5;
}

.equipBox .banner-area a.click {
  display: block;
  color: #fff;
}

.equipBox .banner-area .ban-txt {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  top: 0.53333rem;
  text-align: center;
  color: #fff;
}

.equipBox .banner-area .ban-txt .h2 {
  font-size: 0.6rem;
  text-shadow: 1px 1px 3px #666;
  text-decoration: none;
}
.equipBox s {
    text-decoration: none;
}
.equipBox .banner-area .ban-txt .h2 img {
  width: 44px;
  height: 44px;
  display: inline-block;
  margin: 0.06667rem 0 0 0.13333rem;
}

.equipBox .banner-area .ban-txt .txt {
  font-size: 28px;
  text-align: center;
  margin-top: 0.1rem;
}

.equipBox .banner-area .ban-txt .txt p {
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 auto;
}

.equipBox .banner-area .ban-txt .list {
  position: relative;
  z-index: 8;
}

.equipBox .banner-area .ban-txt .left {
  position: absolute;
  left: 0.53333rem;
  top: 0.4rem;
}

.equipBox .banner-area .ban-txt .left img {
  width: 0.47rem;
  height: 2.4rem;
}

.equipBox .banner-area .ban-txt .right {
  position: absolute;
  right: 0.53333rem;
  top: 0.4rem;
}

.equipBox .banner-area .ban-txt .right img {
  width: 0.33rem;
  height: 2.4rem;
}

.equipBox .banner-area .ban-txt .list {
  margin-top: 0.26667rem;
  position: relative;
  z-index: 8;
}

.equipBox .clearfix:before,
.equipBox .clearfix:after {
  display: table;
  content: "";
  line-height: 0;
}

.equipBox .tag-area .tag-list {
  display: -webkit-box;
}

.equipBox .tag-area .tag-list a {
  width: 100%;
  -webkit-box-flex: 1;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  display: -webkit-box;
  border-bottom: 1px #ececec solid;
  border-right: 1px #ececec solid;
  padding: 0.33333rem 0;
  text-align: center;
  font-size: 0.28rem;
}

.equipBox .bg-area {
  background-color: #f0f3f5;
  height: 0.26667rem;
}
.equipBox .tj-area {
  padding: 0.26667rem 0 0 0.26667rem;
}
.equipBox .tj-area .h2 {
  font-size: 0.32rem;
}
.equipBox .tj-area ul li {
  padding: 0.26667rem 0;
  border-bottom: 1px #e6e6e6 solid;
  position: relative;
}
.equipBox .tj-area ul li a {
  display: block;
  color: #444;
  text-decoration: none;
}
.equipBox .tj-area ul li .imgs {
  float: left;
  text-align: center;
  width: 2.5rem;
}
.equipBox .tj-area ul li .imgs img {
  max-width: 100%;
}
.equipBox .tj-area ul li .txt-area {
  padding: 0rem 0.2rem 0 0.33333rem;
  margin-left: 2.46667rem;
  margin-bottom: 0.2rem;
}
.equipBox .tj-area ul li .txt-area .title {
  font-size: 0.32rem;
  height: 0.9rem;
  overflow: hidden;
  word-break: break-all;
  word-wrap: break-word;
}
.equipBox .tj-area ul li .txt-area .txt {
  font-size: 26px;
  height: 80px;
  overflow: hidden;
}
.equipBox .tj-area ul li .txt-area .txt img {
  position: relative;
  margin-top: -2px;
  margin-right: 5px;
  width: 22px;
  display: inline-block;
}
.equipBox .tj-area ul li .txt-area .price {
  margin-top: 0.33333rem;
}
.equipBox .tj-area ul li .txt-area .price .t1 {
  float: left;
  font-size: 0.26rem;
}
.equipBox .tj-area ul li .txt-area .price .t2 {
  float: right;
  font-size: 0.24rem;
}
.equipBox .tj-area ul li .txt-area .price .t2 img {
  vertical-align: middle;
  position: relative;
  margin: -2px 0.06667rem 0 0;
  width: 0.25rem;
  display: inline-block;
}
.equipBox .tj-area ul li .txt-area .price .t1 s {
  color: #ff4338;
  font-weight: 700;
  text-decoration: none;
}
</style>
