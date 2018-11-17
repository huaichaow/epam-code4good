<template>
  <div class="home">
    <div>
      <h1 class="title">志愿者统计</h1>
      <div class="statistics">
        <router-link to="/user" class="population icon-label">
          <span class="icon small"></span>
          <span class="text">2303</span>
        </router-link>
        &nbsp;|&nbsp;
        <router-link to="/ranking" class="ranking icon-label">
          <span class="icon small"></span>
          <span class="text">排行榜</span>
        </router-link>
      </div>
    </div>
    <div class="map">
      <div class="region-list active postition-1">
        <div class="area-box">
          <span class="dot"></span>
          <span class="pulse delay-01"></span>
          <span class="pulse delay-02"></span>
          <span class="pulse delay-03"></span>
          <div class="show-regin"><span>甘肃</span></div>
        </div>
      </div>
      <div class="region-list warn postition-2">
        <div class="area-box">
          <span class="dot"></span>
          <span class="pulse delay-01"></span>
          <span class="pulse delay-02"></span>
          <div class="show-regin"><span>四川</span></div>
        </div>
      </div>
    </div>

    <div class="button">立即加入</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      title: '志愿者平台'
    }
  }
}
</script>

<style lang="sass" scoped src="./Home.sass"></style>

<style>
.region-list {
  position: absolute;
  left: 0;
  top: 0
}

@keyframes warn {
  0% {
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    opacity: 1
  }
  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    opacity: 0
  }
}

.area-box .dot {
  position: absolute;
  left: 0;
  width: 10px;
  height: 10px;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  background: #a2a9b4;
  opacity: 1;
  filter: alpha(opacity=100)
}

.area-box .pulse {
  position: absolute;
  top: -28px;
  left: -28px;
  height: 66px;
  width: 66px;
  border: 2px solid #b7b7b7;
  -webkit-border-radius: 48px;
  -moz-border-radius: 48px;
  border-radius: 48px;
  -webkit-box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
  -moz-box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
  box-shadow: 0 0 4px #82878f, 0 0 10px #82878f inset;
  opacity: .12;
  filter: alpha(opacity=0);
  animation: warn 2s ease-out both;
  animation-iteration-count: infinite;
  background: 0 0
}

.area-box .delay-01 {
  animation-delay: 0s;
}

.area-box .delay-02 {
  -webkit-animation-delay: .4s;
  -moz-animation-delay: .4s;
  -o-animation-delay: .4s;
  animation-delay: .4s
}

.area-box .delay-03 {
  -webkit-animation-delay: .8s;
  -moz-animation-delay: .8s;
  -o-animation-delay: .8s;
  animation-delay: .8s
}

.region-list.active .area-box .dot {
  background: #009fd9
}

.region-list.active .area-box .pulse {
  border-color: #009fd9;
  top: -39px;
  left: -39px;
  height: 88px;
  width: 88px;
  -webkit-box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset;
  -moz-box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset;
  box-shadow: 0 0 12px #0080d9, 0 0 20px #0080d9 inset
}

.region-list.waite .area-box .dot {
  background: #f90
}

.region-list.waite .area-box .pulse {
  border-color: #f90
}

.show-regin {
  z-index: 66
}

.region-list .show-regin span {
  position: relative;
  color: #ccc
}

.show-regin span {
  width: 80px;
  position: absolute;
  left: 8px;
  top: -11px;
  padding: 6px 10px;
  font-size: 14px;
  color: #ccc;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  text-align: center;
  white-space: nowrap;
}

.region-list.active .show-regin span {
  position: relative;
  color: #ccc
}

.postition-1 {
  left: 50%;
  top: 50%;
}
.postition-2 {
  left: 58%;
  top: 58%;
}
</style>
