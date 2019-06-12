import { VueApplication } from 'modvue'

new VueApplication().start('app')
  .then(() => { console.log('VueApplication Rendered')})
  .catch(console.error)
