import Vue from 'vue'
import { Application } from 'suckless-serverless'
import App from './App.vue'

export default class VueApplication extends Application {
  handle (root) {
    return new Promise((resolve, reject) => {
      new Vue({
        render: h => h(App)
      }).$mount('#' + root)
    })
  }
}
