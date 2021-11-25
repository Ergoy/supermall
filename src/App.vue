<template>
  <div id="app">
    <router-view></router-view>
    <div>34567890</div>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from './components/content/MainTabBar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
