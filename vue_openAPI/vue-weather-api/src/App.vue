<script setup>
  import Navbar from './components/Navbar.vue'
  import MainComp from './components/MainComp.vue'
  import About from './components/About.vue'
  import { ref, onMounted } from 'vue';
  import { useStore} from 'vuex';

  const store = useStore(); // store 객체 가져오기

  // 앱이 실행되면 날씨 데이터 가져오기
  onMounted(() => {
    store.dispatch('getWeather');f
  })

  const onSearchCity = (city) => {
    weatherData.value.city = city;
    getWeather();
  }
</script>

<template>
  <Navbar/>
 <div v-if="$store.state.toggle">
    <MainComp/>
  </div>
  <div v-else>
    <About/>
  </div>
</template>
<style scoped lang="scss">

</style>
