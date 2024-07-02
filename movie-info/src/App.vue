<template>
  <h1>영화정보</h1>
  <div>
    <div v-for="(item, i) in data" :key="i" class="item"> <!-- :key="키값" 반복문을 사용할 때는 각각의 자료를 구분하기 위한 키값이 필요-->
      <figure>
        <img :src="require(`${item.imgUrl}`)" :alt="item.title + ' image'"> <!-- 이미지 경로 지정 주의해서 할 것-->
      </figure>
      <div class="info">
        <h3 :style="textColor"> {{ item.title }} </h3> <!-- :속성명="데이터" -->
        <p>개봉: {{ item.year }}</p>
        <p>장르: {{ item.category }}</p>
        <button @click="increaseLike(i)">좋아요</button> <span>{{ item.like }}</span>
        <p>
          <button @click="isModal=true">상세보기</button>
        </p>
      </div>
    </div>
  </div>

  <div class="modal" v-if="isModal">
    <div class="inner">
      <h3>{{ data[0].title }}</h3>
      <p>영화 상세정보</p>
      <div>{{ data }}</div>
      <button @click="isModal=false">닫기</button>  
    </div>
  </div>
</template>

<script>
  import data from './assets/movies';
  console.log(data);
  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        textColor : "color: blue",
        data: data,
        }
    },
    methods: {
      increaseLike(i) {
        this.data[i].like += 1;
      }
    }
  }
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}

body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}

h1,
h2,
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 0.5rem;
}

button {
  margin-right: 10px;
  margin-top: 1rem;
}

.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}

.item figure {
  width: 30%;
  margin-right: 1rem;
}

.item img {
  width: 100%;
}

.item .info {
  width: 100%;
}

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal .inner {
  background: #fff;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
}
</style>
