<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Spinner />
  </div>
</template>

<script>
import {Spinner} from "modvue";

export default {
  name: "app",
  components: {
    Spinner
  }
};
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
</style>
