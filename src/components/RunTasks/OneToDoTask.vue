<template>
  <div @click="selectTask">
   <sui-card class="centered">
     <sui-card-content>
       <sui-card-header>{{name}}</sui-card-header>
        <sui-card-meta slot="right"> {{points}} points</sui-card-meta>
        <sui-card-description>{{message}}</sui-card-description>
     </sui-card-content>

     <sui-card-content extra>
      {{timeSpent | minSec }}  / {{allowedTime | minSec }}
       <sui-progress  :percent="Math.round(this.timeSpent / this.allowedTime  * 100)"  />
    </sui-card-content>

   </sui-card>
 </div>
</template>

<script>
export default {
  name: 'OneToDoTask',
  data () {
    return {
      task: null,
      percent: 3
    }
  },
  methods: {
    selectTask: function () {
      this.$emit('selectedTask', this.id)
    }
  },
  props: {
    name: {
      default: "Entrer un nom",
      type:String
    },
    id: {
      default: 999,
      type:Number
    },
    allowedTime: {
      default: 60,
      type:Number
    },
    message: {
      default: '',
      type:String
    },
    timeSpent: {
      default: 0,
      type:Number
    },
    points: {
      default: 100,
      type:Number
    }
  },
  filters: {
    minSec: function (time) {
      var minutes = Math.floor(time / 60)
      var seconds = time - minutes * 60
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      return minutes + ':' + seconds
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
