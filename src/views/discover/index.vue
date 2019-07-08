<template>
  <div>
    <!-- banna -->
    <div class="opn">
      <div class="ban">
        <li>
          <a href>
            <img
              src="http://shihuo.hupucdn.com/appHome/201811/1200/843bce9c5e893f33ccb55e1e7acd61fd.jpg?imageView2/2/w/750/h/268/interlace/1"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="http://shihuo.hupucdn.com/appHome/201812/0920/b42ed3c3eca82633072c47a1bf3b53a9.jpg?imageView2/2/w/750/h/268/interlace/1"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="http://shihuo.hupucdn.com/appHome/201812/1023/736a64832b272c088c9fe01837b0ac4e.jpg?imageView2/2/w/750/h/268/interlace/1"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="http://shihuo.hupucdn.com/appHome/201812/0900/d31d0002502c7181c272e5bac796375e.jpg?imageView2/2/w/750/h/268/interlace/1"
              alt
            />
          </a>
        </li>
        <li>
          <a href>
            <img
              src="http://shihuo.hupucdn.com/appHome/201812/1300/0767ee290a165c7c519696b8c047436c.jpg?imageView2/2/w/750/h/268/interlace/1"
              alt
            />
          </a>
        </li>
      </div>
    </div>

    <!-- npplk -->
    <div class="npplk">
      <div class="npplk_1">
        <li>
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png"
            alt
          />
        </li>
        <p>公测</p>
      </div>
      <div class="npplk_1">
        <li>
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-huati_624fa93.png"
            alt
          />
        </li>
        <p>栏目</p>
      </div>
      <div class="npplk_1">
        <li>
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-new_86b6c1f.png"
            alt
          />
        </li>
        <p>最新</p>
      </div>
      <div class="npplk_1">
        <li>
          <img
            src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-hot_2a01f3a.png"
            alt
          />
        </li>
        <p>最热</p>
      </div>
    </div>

    <!-- mian -->
    <div class="hmian">
      <li class="hmian_p">
        <h2>热门话题</h2>
      </li>
      <div class="hmian_m">
        <div class="hmian_k">
          <div class="hmian_i">
            <li>
              <img
                src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
                alt
              />
            </li>
            <div class="hmian_hh">
              <p># 晒穿搭，AJ11 CONCORD 领回家 ！ ！ #</p>
            </div>
          </div>
          <div class="hmian_i">
            <li>
              <img
                src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
                alt
              />
            </li>
            <div class="hmian_hh">
              <p># 晒穿搭，AJ11 CONCORD 领回家 ！ ！ #</p>
            </div>
          </div>
          <div class="hmian_i">
            <li>
              <img
                src="http://shihuo.hupucdn.com/column/201811/2215/2e79d7e6da19d652db2c54020574701e.jpg"
                alt
              />
            </li>
            <div class="hmian_hh">
              <p># 晒穿搭，AJ11 CONCORD 领回家 ！ ！ #</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- nav -->
    <div class="nav">
      <div class="nav_one">
        <div class="nav_tow">
          <li class="opkl">今日推荐</li>
          <li>今日推荐</li>
          <li>今日推荐</li>
          <li>今日推荐</li>
          <li>今日推荐</li>
          <li>今日推荐</li>
          <li>今日推荐</li>
          <li>今日推荐</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "discover"
};
</script>

<style>
/* banna */
body {
  background: #ebebeb;
}
.opn {
  background: #fff;
  width: 100%;
  height: 2.68rem;
  overflow: auto;
}

.opn .ban {
  width: 37.5rem;
  height: 2.68rem;
  overflow: auto;
}

.opn .ban li {
  float: left;
  width: 7.5rem;
  height: 100%;
}

.opn .ban li img {
  width: 100%;
}

/* npplk */
.npplk {
  background: #fff;
  width: 37.5rem;
  height: 1.41rem;
  color: black;
  margin-bottom: 0.2rem;
}

.npplk .npplk_1 {
  padding-top: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 1.875rem;
  height: 1.21rem;
  float: left;
  font-size: 0.24rem;
  color: black;
}

.npplk .npplk_1 li {
  width: 0.72984rem;
  height: 0.62rem;
  color: black;
  margin-bottom: 0.1rem;
  /* background-image: url(http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/find/index/icon-zhongce_65770bc.png); */
}

.npplk .npplk_1 li img {
  width: 100%;
}

/* hmian */
.hmian {
  background: #fff;
  width: 100%;
  height: 2.575rem;
  margin-bottom: 0.15rem;
  border-bottom: 0.005rem sloid #fff;
  overflow: hidden;
}

.hmian .hmian_p {
  color: #646464;
  font-size: 12px;
  padding: 0.2rem;
}

.hmian .hmian_m {
  width: 100%;
  height: 1.6rem;
  padding: 0 0.3rem;
  overflow: auto;
}

.hmian .hmian_m .hmian_k {
  width: 10rem;
  height: 1.5rem;
}

.hmian .hmian_m .hmian_k .hmian_i {
  float: left;
  padding-right: 0.15rem;
  width: 2.8rem;
  height: 1.25rem;
  overflow: hidden;
  position: relative;
}

.hmian .hmian_m .hmian_k .hmian_i .hmian_hh {
  position: absolute;
  width: 95%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 0 0.26667rem;
  font-size: 0.29rem;
  color: #fff;
  font-family: Helvetica, sans-serif;
}

.hmian .hmian_i img {
  width: 100%;
}

/* nav */
.nav {
  width: 100%;
  background: #fff;
  min-height: 16rem;
}

.nav_one {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-bottom: 0.2rem;
  border-bottom: 1px #ececec solid;
  overflow: auto;
}
.nav .nav_one .nav_tow {
  width: 666px;
  height: 100%;
}

.nav .nav_one .nav_tow li {
  height: 0.8rem;
  line-height: 0.8rem;
  display: inline-block;
  margin: 0 0.26667rem;
}

.nav .nav_one .nav_tow .opkl{
  color: red;
}
</style>
