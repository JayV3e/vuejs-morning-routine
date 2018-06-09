<template>
  <div id="ProjectsList">
    <h1>Tasks List</h1>
      <sui-table v-if="tasks" basic="very" celled collapsing>
        <sui-table-body>
                  <!-- <div v-on:click="startTask(task.id)"> -->
        <ListedTask v-for="task in tasks" :key="task.id" v-bind:name="task.content" v-bind:id="task.id" v-bind:time="task.time"></ListedTask>
        </sui-table-body>
        <button v-on:click="start">Start</button>
      </sui-table>
  </div>
</template>

<script>
import axios from 'axios'
import ListedTask from './ListedTask'

var token = '26df2dd3758b61b14521cb9d4976acf11a6add2a'
var urlTasks = 'https://beta.todoist.com/API/v8/tasks'


export default {
  name: 'TasksList',
  components : {
    ListedTask,
  },
  data () {
    return {
      projects: null,
      tasks: null,
      loading : false
    }
  },
  mounted() {
    this.getProjectsList()
  },
  methods: {
    getProjectsList: function () {
      this.loading = true;
      axios.get(urlProjects, { headers: { Authorization: 'Bearer '+ token } } )
            .then(response => (this.projects =response.data))
            .catch(error => { console.log(error) })
      this.loading = false;
    },
    getTasks: function (id) {
      console.log('gettin tasks');
      this.loading = true;
      axios.get(URL_tasks, {headers: {Authorization: 'Bearer '+ token}, params:{"project_id":id}})
            .then(response => (this.tasks =response.data))
            .catch(error => {console.log(error)})
      this.loading = false;
      if (this.tasks){
        for (var index in this.tasks){
         this.tasks[index].time = 120;
        }
        console.log(this.tasks)
      }
    },
    startTask: function (id) {
      console.log(id)
  },
    start: function (){
      console.log(this)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
