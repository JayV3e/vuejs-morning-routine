<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import json from './data.json'

var tasks = json[0].tasks

export default {
  name: 'App',
  tasks: tasks
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
