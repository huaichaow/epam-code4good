import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import _ from 'lodash'

Vue.config.productionTip = false

Vue.mixin({
  mounted() {
    if (this.title) {
      this.$emit("setTitle", this.title);
    }
  },
  methods: {
    httpGet(url) {
      return axios.get(url).then(data => {
        return _.get(data, "data.data");
      })
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
