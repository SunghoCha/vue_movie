<template>
<div class="container">
  <h1>영화정보</h1>
  <div>
    <div v-for="(item, i) in data" :key="i" class="item"> <!-- :key="키값" 반복문을 사용할 때는 각각의 자료를 구분하기 위한 키값이 필요-->
      <figure>
        <img :src="require(`@/${item.imgUrl}`)" :alt="item.title + ' image'"> <!-- 이미지 경로 지정 주의해서 할 것-->
      </figure>
      <div class="info">
        <h3 :style="textColor"> {{ item.title }} </h3> <!-- :속성명="데이터" -->
        <p>개봉: {{ item.year }}</p>
        <p>장르: {{ item.category }}</p>
        <button @click="$emit('increaseLike', i)">좋아요</button> <span>{{ item.like }}</span>
        <p>
          <button @click="$emit('openModal', i)">상세보기</button> <!-- $(emit(이름, 전달할 값))-->
        </p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
    name: "MoviesComponent",
    props: {
        data: Array,

    },
}
</script>
<style>
    .container {
        padding: 20px;
    }
</style>