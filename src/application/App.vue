<template>
  <div @click="click">
    <img alt="Vue logo" :class="cssClass" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />
    {{ name }} => {{ number}}

    <div v-if="number==3" class="container">container</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      name: 'pepe',
      number: 0
    }
  },
  computed: {
    cssClass () {
      return {
        'full-width': (this.number === 0)
      }
    }
  },
  methods: {
    click () {
      this.number++
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.full-width{
  border-width: medium;
  border-color: red;
}
</style>
