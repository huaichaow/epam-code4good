import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.mixin({
  mounted() {
    if (this.title) {
      this.$emit("setTitle", this.title);
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
