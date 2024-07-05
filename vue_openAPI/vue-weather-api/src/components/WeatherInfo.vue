<template>
    <div class="weather-info">
        <div class="icon">
            <img :src="`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`" :alt="props.weatherData.icon">
        </div>
        <div class="temp">{{ convertToCelsius(props.weatherData.temp) }}&deg;C</div>
        <div class="text">{{ props.weatherData.text }}</div>
        <div class="location">{{ props.weatherData.city }}, {{ props.weatherData.location }}</div>
    </div>
</template>
<script setup>
    const props = defineProps({
        weatherData : Object,
    })

    const convertToCelsius = ((kelvinTemp) => {
        return (kelvinTemp - 273.15).toFixed(1);
    })
</script>
<style lang="scss">
    .weather-info {
        padding: 20px;
        & > div {
            margin-bottom: 20px;
            padding: 20px;
            border: 1px solid #ccc;
    }
    .icon img {
      width: 140px;
    }
    .temp {
      font-size: 4em;
    }
    .text {
      font-size: 2em;
    }
  }
</style>