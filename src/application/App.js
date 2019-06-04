import Vue from 'vue'
import App from './App.vue'

export default class VueApplication {
  start (root) {
    new Vue({
      render: h => h(App)
    }).$mount('#' + root)
  }
}
