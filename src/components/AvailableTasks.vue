<template>
  <div id="AvailableTasks">
    <h1> À faire aujourd'hui</h1>
    <div v-if="this.tasks">
      <draggable v-model="tasks">
          <ListedTask v-for="task in tasks"
          :key="task.id"
          v-bind:name="task.name"
          v-bind:id="task.id"
          v-bind:allowedTime="task.allowedTime"
          v-bind:timeSpent="task.timeSpent"
          v-on:more-time="moreTime"
          v-on:less-time="lessTime"
          v-on:delete-task="deleteTask" ></ListedTask>
      </draggable>
      <sui-button primary @click="startTasks">Commencer les tâches</sui-button>
      <br/>

      <h1>Ajouter une nouvelle tâche</h1>
      <AddTask
      v-bind:tasks="tasks">
    </AddTask>
      </div>
    <div v-else>Loading...</div>



  </div>
</template>

<script>
import data from "../App";
import ListedTask from "./AvailableTasks/ListedTask";
import draggable from "vuedraggable";
import AddTask from "./AvailableTasks/AddTask";

export default {
  name: "AvailableTasks",
  components: {
    ListedTask,
    AddTask,
    draggable
  },
  methods: {
    startTasks: function() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.$router.push({ path: "/RunTasks", params: { tasks: this.tasks } });
    },
    moreTime: function(id) {
      // TODO ne refresh pas
      var newId;
      this.tasks.filter(function(obj, index) {
        if (obj.id == id) {
          newId = index;
        }
      });
      if (this.tasks[newId].allowedTime != 0) {
        this.tasks[newId].allowedTime += 15;
      }
    },
    lessTime: function(id) {
      // TODO ne refresh pas
      var newId;
      this.tasks.filter(function(obj, index) {
        if (obj.id == id) {
          newId = index;
        }
      });
      if (this.tasks[newId].allowedTime != 0) {
        this.tasks[newId].allowedTime -= 15;
      }
    },
    deleteTask: function(id) {
      var removeIndex = this.tasks
        .map(function(item) {
          return item.id;
        })
        .indexOf(id);
      this.tasks.splice(removeIndex, 1);
    }
  },
  data() {
    return {
      tasks: data.tasks
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
