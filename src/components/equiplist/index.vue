<template>
  <div class="tj-area">
      <div class="h2">最新推荐</div>
      <ul id="new-tag-list">

        <li class="clearfix" v-for="(item,index) in info" :key="index">
          <a
            href="">
            <div class="imgs"><img
                :src="item.img">
            </div>
            <div class="txt-area">
              <div class="title">{{ item.name }}</div>
              <div class="txt"><img style="margin-right:10px;"
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-1_5297253.png">{{ item.intro }}<img
                  style="margin-left:10px;"
                  src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/quote_right_711acf3.png">
              </div>
              <div class="price clearfix">
                <div class="t1">淘宝 <s>{{ item.price }}</s></div>
                <div class="t2"><img
                    src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/zhuangbei/index/icon-2_2bc8bc4.png">
                  {{ item.hits }}</div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      
    </div>
  
</template>

<script>
import {getEquip} from "api/equip";
export default {
  name:"equiplist",
  async created(){
    let data = await getEquip();
    this.info=data.data.info;
  },
  data(){
    return{
      info:[]
    }
  }
}
</script>
