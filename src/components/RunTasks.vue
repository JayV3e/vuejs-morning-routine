<template>
    <sui-grid :columns="2" divided id="RunTasks">
    <sui-grid-column id="leftColumn">
      <div v-if="tasks">
        <OneToDoTask v-for="task in tasks" :key="task.id"
          v-bind:message="task.message"
          v-bind:name="task.name"
          v-bind:id="task.id"
          v-bind:allowedTime="task.allowedTime"
          v-bind:timeSpent="task.timeSpent"
          v-on:selectedTask='selectedTask'
          >
        </OneToDoTask>
      </div>
      <div v-else>
        <sui-dimmer active>
          <sui-loader />
        </sui-dimmer>
      </div>
    </sui-grid-column>
    <sui-grid-column id="rightColumn">
      <div v-if="tasks">
        <OneToDoTask
        v-bind:message="tasks[runningTask].message"
        v-bind:name="tasks[runningTask].name"
        v-bind:id="tasks[runningTask].id"
        v-bind:allowedTime="tasks[runningTask].allowedTime"
        v-bind:timeSpent="tasks[runningTask].timeSpent">
        </OneToDoTask>
        <sui-button primary @click="startTask(tasks[runningTask])">Start Task !</sui-button>
        <sui-button secondary @click="stopTask">Stop Task !</sui-button>
      </div>
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import OneToDoTask from './RunTasks/OneToDoTask'
import ActiveTask from './RunTasks/ActiveTask'

export default {
  name: 'RunTasks',
  components: {
    OneToDoTask,
    ActiveTask
  },
  methods: {
    selectedTask: function (id) {
      // TODO make it look better. Need to find index to swap runningtask.
      var newId
      this.tasks.filter(function (obj, index) {
        if (obj.id === id) {
          newId = index
        }
      })
      this.runningTask = newId
    },
    startTask: function (task) {
      this.timerIsRunning = true
      this.$options.interval = setInterval( function () {
        if (task.timeSpent < task.allowedTime) {
        task.timeSpent += 1
        }
        else {
          task.stopTask
          console.log("c'est fini")
        }}, 1000)
    },
    stopTask: function () {
      this.timerIsRunning = false
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
      clearInterval(this.$options.interval)
    }
  },
  data () {
    return {
      tasks: null,
      runningTask: 0
    }
  },
  mounted () {
    this.tasks = JSON.parse(localStorage.tasks)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}

#rightColumn {
  width :70%
}
#leftColumn {
  width :30%
}
</style>
