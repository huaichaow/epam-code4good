<template>
  <div class="user">

    <div class="avatar">
      <div class="photo"></div>
      <div class="info">
        <div class="line1">
          <div class="name">那年夏天</div>
          <div class="id">ID: 12345678</div>
        </div>
        <div class="line2">
          <span class="icon"></span>
          <span class="age">25</span>
        </div>
      </div>
    </div>

    <div class="location">
      <div class="icon"></div>
      <div class="address">
        <div class="line1">陕西.宝鸡</div>
        <div class="line2">宝鸡市宝鸡县城南路花园小区</div>
      </div>
    </div>

    <div class="score-title">
      <div class="label">我的积分</div>
      <div class="rank">
        <div class="icon"></div>
        <div>排行榜</div>
      </div>
    </div>
    <div class="score-main">
      <div class="count-number">
        <div class="count f30">3500</div>
        <div>总积分</div>
      </div>
      <div class="count-text">
        <div class="count-people">你最近一次的得分是<b>77</b>分</div>
        <div class="count-pro">领先<span>26%</span>同龄人</div>
      </div>
    </div>
    <div class="basic-info">
      <div class="info-group">
        <label>手机号码</label>
        <span>13333333333</span>
      </div>
      <div class="info-group">
        <label>邮箱地址</label>
        <span>1333@133.com</span>
      </div>
      <div class="info-group">
        <label>详细地址</label>
        <span>江苏省苏州市工业园区星湖街328号12栋</span>
      </div>
      <div class="info-group">
        <label>专业技能</label>
        <span>打包</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      title: "我",
      profile: null
    }
  },
  methods: {
    loadData() {

    }
  }
}
</script>

<style lang="sass" scoped src="./ViewUser.sass"></style>
