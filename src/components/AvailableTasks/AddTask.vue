<template lang="html">
  <div>


  <sui-form class="example" id="newTask" @submit="addTask">
    <sui-form-field>
      <label>Nom de la Tâche</label>
      <input v-model="form.taskName">
      <label>Temps alloué</label>
      <input v-model="form.allowedTime" type="number">
    </sui-form-field>
    <sui-form-field>

    </sui-form-field>
    <sui-form-field>
      <label>Points</label>
      <input v-model="form.points">
    </sui-form-field>
    <sui-form-field>
      <label>Message</label>
      <input v-model="form.message">
    </sui-form-field>
    <sui-button type="submit">Ajouter</sui-button>
  </sui-form>
  <br/>
      <OneToDoTask
      v-bind:message="form.message"
      v-bind:name="form.taskName"
      v-bind:allowedTime="Number(form.allowedTime)"
      v-bind:points="Number(form.points)"
      >
      </OneToDoTask>
</div>
</template>

<script>
import OneToDoTask from '../RunTasks/OneToDoTask'
export default {
  name: 'AddTask',
  components: {
    OneToDoTask
  },
  props: {
    tasks: Array
  },
  methods: {
    addTask: function () {
      var newTask = {
        id : this.tasks.length,
        name: this.form.taskName,
        points: this.form.points,
        message: this.form.message,
        allowedTime: this.form.allowedTime,
        timeSpent : 0
      }
      this.tasks.push(newTask)
    }
  },
  mounted: function () {

  },
  data: function () {
    return {
      form : {
        taskName : '',
        allowedTime: 60,
        points: 100,
        message: ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example {
  width : 40%;
  margin: auto;
}
</style>
