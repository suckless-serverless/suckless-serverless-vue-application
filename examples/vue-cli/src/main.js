import { VueApplication } from 'modvue'

new VueApplication().run('app')
  .then(() => { console.log('VueApplication Rendered')})
  .catch(console.error)
