<template>
  <div>
    <!-- show -->
    <div class="show">
      <div class="show_one">
        <div class="show_tow" v-for="(item,index) in dicList" :key="index">
          <li class="show_tow_1">
            <div class="show_tow_2">
              <img
                :src="item.data.avatar"
                alt
              />
            </div>
            <div class="show_tow_11">
              <p class="show_p1">{{item.data.author_name}}</p>
              <p class="show_p2">{{item.data.date}}</p>
            </div>
          </li>
          <li class="show_tow3">
            <div class="show_tow3_p">{{item.data.title}}</div>
            <p class="show_tow3_img">
              <img
                :src="item.data.img"
                alt
              />
            </p>
            <div class="show_tow3_tag">
              <span class="like">{{item.data.praise}}</span>
              <span class="say">{{item.data.reply_count}}</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { discoverList } from "../../api/discover";
export default {
  name:"descoverShow",
  async created() {
    let data = await discoverList();
    this.dicList = data.data;
    // console.log(this.dicList)
  },
  data() {
    return {
      dicList:[],
    }
  },
};
</script>

<style  scoped>
/* show */
.show {
  background: #fff;
  padding-left: 0.2rem;
  padding-bottom: 0.53333rem;
  min-height: 16rem;
}
.show .show_tow {
  border-bottom: 1px solid #e6e6e6;
  padding: 0.1rem 0.3rem 0.1rem 0;
}
.show .show_tow .show_tow_1 {
  /* border-bottom: 1px solid #e6e6e6; */
  padding: 0.1rem 0.1rem 0.1rem 0;
}
.show .show_tow .show_tow_1 .show_tow_2 {
  width: 0.7rem;
  height: 0.7rem;
  float: left;
  border-radius: 0.66667rem;
  overflow: hidden;
  margin-right: 0.26667rem;
}
.show .show_tow .show_tow_1 .show_tow_2 img {
  display: block;
  width: 100%;
}
.show .show_tow .show_tow_1 .show_tow_11 {
  font: 12px/1.5 Helvetica, sans-serif;
  color: #444;
}
.show .show_tow .show_tow_1 .show_tow_11 .show_p1 {
  font-size: 18px;
}
.show .show_tow .show_tow_1 .show_tow_11 .show_p2 {
  font-size: 18px;
  color: #999;
}
.show .show_tow .show_tow3 {
  color: #444;
  text-decoration: none;
  margin-left: 0.92rem;
  font-size: 0.3rem;
}
.show .show_tow .show_tow3 .show_tow3_p {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  word-break: break-all;
}
.show .show_tow .show_tow3 .show_tow3_img {
  margin: 0.3rem 0;
}
.show .show_tow .show_tow3 .show_tow3_img img {
  width: 100%;
}
.show .show_tow .show_tow3 .show_tow3_tag {
  font-size: 0.4rem;
}
.show .show_tow .show_tow3 .show_tow3_tag .like {
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/like_537e53f.png)
    left center no-repeat;
  padding-left: 0.58667rem;
  background-size: 0.45333rem auto;
  height: 0.45333rem;
  display: inline-block;
  color: #a4a4a4;
  margin-right: 0.26667rem;
  line-height: 0.45333rem;
}
.show .show_tow .show_tow3 .show_tow3_tag .say {
  background: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/say_348570f.png)
    left center no-repeat;
  padding-left: 0.58667rem;
  background-size: 0.4rem auto;
  line-height: 0.45333rem;
  height: 0.45333rem;
  color: #a4a4a4;
}
</style>
