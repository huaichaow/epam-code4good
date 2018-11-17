<template>
  <div id="app">
    <div id="nav">
      <div class="center-fixed">
        <div class="nav-item back"></div>
        <div class="nav-item title">{{title}}</div>
        <div class="nav-item menu"></div>
      </div>
    </div>
    <div id="content">
      <router-view @setTitle="setTitle"/>
    </div>
    <div id="foot">
      <div class="center-fixed">
        <router-link to="/" class="menu-item">
          <div>
            <div class="icon" style="background-image: url(/img/icon_tab_bar2@3x.png)"></div>
            <div class="text">首页</div>
          </div>
        </router-link>
        <router-link to="/about" class="menu-item">
          <div>
            <div class="icon" style="background-image: url(/img/icon_tab_bar1@3x.png)"></div>
            <div class="text">附件</div>
          </div>
        </router-link>
        <router-link to="/register" class="menu-item">
          <div>
            <div class="icon" style="background-image: url(/img/icon_tab_bar3@3x.png)"></div>
            <div class="text">通知我</div>
          </div>
        </router-link>
        <router-link to="/user" class="menu-item">
          <div>
            <div class="icon" style="background-image: url(/img/icon_tab_bar4@3x.png)"></div>
            <div class="text">我</div>
          </div>
        </router-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: ""
    }
  },
  methods: {
    setTitle(title) {
      this.title = title || "";
    }
  }
}
</script>

<style lang="sass" src="./App.sass"></style>
