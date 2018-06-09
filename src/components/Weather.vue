<template>
  <div id="Weather">
    <h1>Météo <h3 v-if="weather"> pour {{ weather.city.name}}</h3></h1>
    <div v-if="weather">
       <sui-table class="table" basic="very" celled collapsing>
         <sui-table-body>
          <sui-table-row v-for="threeHoursInfo in weather.list.slice(0,10)" :key="threeHoursInfo.id">

            <sui-table-cell>
                  {{threeHoursInfo.dt_txt | showDate}}
            </sui-table-cell>

            <sui-table-cell>
                  {{threeHoursInfo.dt_txt | showHour}}
            </sui-table-cell>

            <sui-table-cell>
                Min : {{threeHoursInfo.main.temp_min | toCelsius}}
            </sui-table-cell>

            <sui-table-cell>
                Max : {{threeHoursInfo.main.temp_max | toCelsius}}
            </sui-table-cell>

            <sui-table-cell>
              {{threeHoursInfo.weather[0].main}}
            </sui-table-cell>

          </sui-table-row>

        </sui-table-body>
       </sui-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import secrets from "../../config.json"

const URL = "http://api.openweathermap.org/data/2.5/forecast?q=";
var city = "Montreal,CA";

export default {
  name: "Weather",
  mounted() {
    this.getWeather();
  },
  methods: {
    getWeather: function() {
      this.loading = true;
      axios
        .get(URL + city + "&appid=" + secrets[0].WEATHER_API_KEY)
        .then(response => (this.weather = response.data))
        .catch(error => {
          console.log(error);
        })
      this.loading = false;
    }
  },
  filters: {
    toCelsius: function(value) {
      return (value - 273.15).toFixed(1);
    },
    toFarenheit: function(value) {
      return (value * (9 / 5) - 459.67).toFixed(1);
    },
    showDate: function(value) {
      return value.slice(5, 10);
    },
    showHour: function(value) {
      return value.slice(11, 16);
    }
  },
  data() {
    return {
      weather: null,
      loading: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  margin: auto;
}
</style>
