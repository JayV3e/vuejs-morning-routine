<template>
  <div id="ProjectsList">
    <h1>Projects List</h1>
    <div v-for="project in projects" :key="project.id">
      <div v-on:click="getTasks(project.id)">
        <ListedProject v-bind:name="project.name" v-bind:id="project.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ListedProject from './ListedProject'
import ListedTask from './ListedTask'

var token = '26df2dd3758b61b14521cb9d4976acf11a6add2a'
var urlProjects = 'https://beta.todoist.com/API/v8/projects'
var urlTasks = 'https://beta.todoist.com/API/v8/tasks'

export default {
  name: 'ProjectsList',
  components: {
    ListedProject,
    ListedTask
  },
  data () {
    return {
      projects: null,
      tasks: null,
      loading: false
    }
  },
  mounted () {
    this.getProjectsList()
  },
  methods: {
    getProjectsList: function () {
      this.loading = true
      axios.get(urlProjects, {headers: {Authorization: 'Bearer ' + token}})
        .then(response => (this.projects = response.data))
        .catch(error => { console.log(error) })
      this.loading = false
    },
    getTasks: function (id) {
      console.log('gettin tasks')
      this.loading = true
      axios.get(urlTasks, { headers: {Authorization: 'Bearer ' + token}, params: {'project_id': id} })
        .then(response => (this.tasks = response.data))
        .catch(error => { console.log(error) })
      this.loading = false
      if (this.tasks) {
        for (var index in this.tasks) {
          this.tasks[index].time = 120
        }
        console.log(this.tasks)
      }
    },
    startTask: function (id) {
      console.log(id)
    },
    start: function () {
      console.log(this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
