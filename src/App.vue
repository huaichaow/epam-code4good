<template>
  <div id="app">
    <div id="nav">
      <div class="center-fixed">
        <div class="nav-item back"></div>
        <div class="nav-item title">{{title}}</div>
        <div class="nav-item menu" @click="toggleSearchPanel()" v-if="!showSearch"></div>
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
            <div class="text">附近</div>
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

    <div class="search-panel" v-if="showSearch">
      <div class="input">
        <div class="search-box">
          <input ref="searchInput" @keypress="searchPress" placeholder="请输入搜索内容">
          <span class="close" @click="doSearch"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      title: "",
      showSearch: false
    }
  },
  methods: {
    setTitle(title) {
      this.title = title || "";
    },
    toggleSearchPanel() {
      this.showSearch = !this.showSearch;
      if (this.showSearch) {
        setTimeout(()=>{
          this.$refs.searchInput.focus();
        })
      }
    },
    doSearch() {
      this.showSearch = !this.showSearch;
    },
    closeSearch() {
      this.showSearch = false;
    },
    searchPress(e) {
      if (e.which === 13) {
        this.closeSearch();
      }
    }
  }
}
</script>

<style lang="sass" src="./App.sass"></style>
