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

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: "我"
    }
  }
}
</script>

<style lang="sass" scoped src="./User.sass"></style>
