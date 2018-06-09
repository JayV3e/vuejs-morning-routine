<template>
  <div>
        {{name}}

        {{allowedTime | minSec}}

        <div id="setTime">
          <button id="minus" v-on:click="lessTime">-</button><button id="add" v-on:click="moreTime">+</button><sui-icon name="trash" v-on:click="deleteTask" />
        </div>
      </div>
</template>

<script>
export default {
  name: 'ListedTask',
  props: {
    name: String,
    id: Number,
    allowedTime: Number
  },
  methods: {
    moreTime: function () {
      this.$emit('more-time', this.id)
    },
    lessTime: function () {
      this.$emit('less-time', this.id)
    },
    deleteTask: function () {
      this.$emit('delete-task', this.id)
    }
  },
  filters: {
    minSec: function (time) {
      var minutes = Math.floor(time / 60)
      var seconds = time - minutes * 60
      if (seconds === 0) {
        seconds = '00'
      }
      return minutes + ':' + seconds
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
