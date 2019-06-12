import Vue from 'vue'
import 'arrive'
import App from './App.vue'

export default class VueApplication {
  start (root) {
    return new Promise((resolve, reject) => {
      // const timer = setTimeout(() => reject(new Error('Error mounting the app')), 3000)
      document.arrive('.container', function () {
        // 'this' refers to the newly created element
        // clearTimeout(timer)
        console.log('rendered')
        resolve('')
        // document.unbindArrive('.full-width')
      })
      new Vue({
        render: h => h(App)
      }).$mount('#' + root)
    })
  }
}
