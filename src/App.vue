<template>
  <LoginVue />
  <BarChart />
  <MyAxiosVue />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LoginVue from './components/Login.vue'
import BarChart from './components/BarChart.vue'
import MyAxiosVue from './components/MyAxios.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    LoginVue, 
    BarChart,
    MyAxiosVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
