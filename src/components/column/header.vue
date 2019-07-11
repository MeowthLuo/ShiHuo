<template>
  <div class="head">
    <div class="goback">
      <router-link
        to="/home"
        tag="img"
        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_back_b142dc1.png"
      ></router-link>
    </div>
    <span class="d-title">识货-栏目</span>
    <div class="ico_list">
      <img
        src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/common/widget/header/head_list_4a4f511.png"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  width: 1rem;
}
.goback > img {
  width: 100%;
  height: 100%;
}
.d-title {
  position: absolute;
  left: 25%;
  top: 20%;
  font-size: 0.45rem;
  width: 50%;
  font-weight: 500;
}
.ico_list {
  position: absolute;
  right: 0;
  height: 1rem;
  width: 1rem;
}
.ico_list > img {
  width: 100%;
  height: 100%;
}
</style>
