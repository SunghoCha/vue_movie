<script setup>
  import { ref, onMounted, watch } from 'vue';
  import ChildComp from './components/ChildComp.vue';

  let count = ref(0); // 상태변수 초기값(state)
  let title = "Hello Vue"
  let color = ref('green');

  onMounted(() => {
    console.log('mounted');
  })

  const increaseCount = () => {
    count.value++; // ref 안에 있는 값을 가져오는 컨셉
  }

  watch(color, () => {
    console.log('color 변경');
  })
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
      <button @click="increaseCount">count++</button>
      <p>{{ count }}</p>
  </div>
  <ChildComp :color=color bgColor="yellow"/>
  <button @click="color='red'">change color</button>
</template>

<style scoped>

</style>
