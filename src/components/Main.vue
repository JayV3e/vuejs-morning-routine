<template>
    <sui-grid :columns="3" divided id="Main">
    <sui-grid-column id="leftColumn">
      <Weather />
    </sui-grid-column>
    <sui-grid-column id="midColumn">
      <AvailableTasks />
    </sui-grid-column>
    <sui-grid-column id="rightColumn">
      <Calendar />
    </sui-grid-column>
  </sui-grid>
</template>

<script>
import AvailableTasks from './AvailableTasks'
import Weather from './Weather'
import Calendar from './Calendar'

export default {

  name: 'Main',
  components: {
    AvailableTasks,
    Weather,
    Calendar
  },
  methods: {
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul {
  list-style-type: none;
}
/*
#rightColumn {
  width :70%
}
#leftColumn {
  width :30%
} */
</style>
