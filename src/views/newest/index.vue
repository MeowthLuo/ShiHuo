<template>
  <div class="newest">
    <!-- header -->
    <div class="new">
      <div class="new_header">
        <img
          @click="$router.back(-1)"
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
        />
      </div>
      <span class="newest-title">识货最新文章</span>
      <div class="newest_list">
        <img
          src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
        />
      </div>
    </div>

    <!-- mian -->
    <div class="mian">
      <div class="mian_show">
        <li class="mian_showP" v-for="(item,index) in nwesList" :key="index">
          <div class="mian_showImg">
            <img
              :src="item.data.img"
              alt
            />
          </div>
          <div class="mian_showText">
            <h1>{{item.data.title}}</h1>
            <h2>{{item.data.intro}}</h2>
            <div class="mian_showTextImg">
              <i>
                <img
                  :src="item.data.avatar"
                  alt
                />
              </i>{{item.data.author_name}}
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import { newestList } from "../../api/newest";
export default {
  name: "newest",
  methods: {},
  async created() {
    let data = await newestList();
    this.nwesList = data.data.list;
    console.log(this.nwesList)
  },
  data() {
    return {
      nwesList:[]
    }
  },
};
</script>

<style scoped>
/* header */
.new {
  background-color: #f7f7f7;
  height: 4em;
  width: 100%;
  position: fixed;
  top: 0;
  text-align: center;
  z-index: 90;
  border-bottom: 1px sodivd #e6e6e6;
}
.new_header {
  position: absolute;
  left: 0;
  height: 1rem;
  width: 1rem;
}
.new_header > img {
  width: 100%;
  height: 100%;
}
.newest-title {
  position: absolute;
  left: 25%;
  top: 20%;
  font-size: 0.4rem;
  width: 50%;
  font-weight: bolder;
}
.newest_list {
  position: absolute;
  right: 0;
  height: 1rem;
  width: 1rem;
}
.newest_list > img {
  width: 100%;
  height: 100%;
}

/* mian */
.mian {
  padding-top: 1rem;
}
.mian .mian_show {
  background: #fff;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
  width: 100%;
  overflow: hidden;
}
.mian .mian_show .mian_showP {
  padding: 0.2rem;
  padding-left: 0;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
}
.mian .mian_show .mian_showP .mian_showImg {
  width: 30%;
  float: left;
  position: relative;
}
.mian .mian_show .mian_showP .mian_showImg img {
  width: 100%;
}
.mian .mian_show .mian_showP .mian_showText {
  width: 66%;
  position: relative;
  margin-left: 0.26667rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.mian .mian_show .mian_showP .mian_showText h1 {
  font: 12px/1.5 Helvetica, sans-serif;
  font-size: 0.28rem;
  color: #333;
  font-weight: 400;
  max-height: 1rem;
  overflow: hidden;
  word-break: break-all;
}
.mian .mian_show .mian_showP .mian_showText h2 {
  font: 12px/1.5 Helvetica, sans-serif;
  font-size: 0.28rem;
  color: #666;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.mian .mian_show .mian_showP .mian_showText .mian_showTextImg {
  font-size: 0.28rem;
  color: #666;
}
.mian .mian_show .mian_showP .mian_showText .mian_showTextImg i {
  display: inline-block;
  border-radius: 0.2rem;
  width: 0.4rem;
  height: 0.4rem;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  margin-right: 10px;
}
.mian .mian_show .mian_showP .mian_showText .mian_showTextImg i img {
  width: 100%;
}
</style>  