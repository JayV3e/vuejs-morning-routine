<template>
  <div id="Calendar">
    <h1>Calendrier</h1>
    <div v-if="calendar">
       {{ calendar}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Calendar',
  mounted () {
    this.getCalendar()
  },
  methods: {
    getCalendar: function () {
      console.log('allons chercher le calendrier')
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd<10) {
          dd = '0'+dd
      }

      if(mm<10) {
          mm = '0'+mm
      }

      today = mm + '/' + dd + '/' + yyyy;
      this.calendar = today
    }
  },
  data () {
    return {
      calendar : '123'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
