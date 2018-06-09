<template>
    <div id="ActiveTask">
      <sui-card class="centered"
      v-bind:class="{greenBackground : timerIsRunning }">
        <!-- <sui-image src="static/images/avatar/large/kristy.png" /> -->
        <sui-card-content>
          <sui-card-header><h1>{{name}}</h1></sui-card-header>
                 <sui-card-description>{{message}}</sui-card-description>
        </sui-card-content>
        <sui-card-content extra>
        {{usedTime| minSec}} / {{allowedTime | minSec }}
          <!-- <sui-progress indicating :percent="percent" label="Timer" /> -->
       </sui-card-content>
      </sui-card>
      <sui-button primary @click="startTask">Start Task !</sui-button>
      <sui-button secondary @click="stopTask">Stop Task !</sui-button>
    </div>
</template>

<script>

export default {
  name: 'ActiveTask',
  props: {
    name: {
      default: 'name',
      type: String
    },
    message: {
      default: '',
      type: String
    },
    id: {
      default: null,
      type: Number
    },
    'allowedTime': {
      default: 60,
      type: Number
    },
    'usedTime': {
      default: 0,
      type: Number
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
  },
  computed: {
    percent : function () {
      return this.timeSpent / this.allowedTime * 100
    }
  },
  data () {
    return {
      timerIsRunning: false
    }
  },
  methods: {
    startTask: function () {
      this.timerIsRunning = true
      this.$options.interval = setInterval(() => { this.$emit('one-more-sec', this.id) }, 1000)
    },
    stopTask: function () {
      this.timerIsRunning = false
      clearInterval(this.$options.interval)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.greenBackground {
  background-color : #7FFFD4
}
</style>
