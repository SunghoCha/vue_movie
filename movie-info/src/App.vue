<template>
  <Navbar />
  <Event :text="text[eventTextNum]"/> <!-- 속성명(props 변수)="보낼 값" -->
  <SearchBar 
    :data="data_temp" 
    @searchMovie="searchMovie($event)"  
  />
  <p> <button @click="showAllMovies">전체보기</button> </p>
  <Movies
    :data="data_temp"
    @openModal="isModal=true; selectedMovie=$event"
    @increaseLike="increaseLike($event)"
  /> <!-- 전달된 값은 $event로 받음-->

  <Modal 
  :data="data_temp" 
  :isModal="isModal" 
  :selectedMovie="selectedMovie"
  @closeModal="isModal=false"
  /> <!-- 자식 컴포넌트에서 발생한 이벤트명(커스템 이벤트)은 앞에 @추가-->
</template>

<script>
  import data from './assets/movies'; // 영화 데이터
  import Navbar from './components/Navbar.vue'; // 네비게이션바
  import Modal from './components/Modal.vue';
  import Event from './components/Event.vue';
  import Movies from './components/Movies.vue';
  import SearchBar from './components/SearchBar.vue';
  
  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data: data, // 영화 데이터 원본
        data_temp: [...data], // 영화 데이터 사본
        selectedMovie: 0,
        text: [
          'NETPLIX 강렬한 운명의 드라마, 경기크리처',
          '디즈니 100주년 기념작, 위시',
          '그 날, 대한민국의 운명이 바뀌었다, 서울의 봄'
        ],
        eventTextNum: 0,
        interval: null,
      }
    },
    methods: {
      increaseLike(id) {
        this.data.find(item => {
          if (item.id == id) {
            item.like += 1;
          }
        })
      },
      searchMovie(title) {
        // 영화 제목이 포함된 데이터를 가져옴
        this.data_temp = this.data.filter(item => {
          return item.title.includes(title)
        });
      },
      showAllMovies() {
        // 전체 영화 목록 조회
        return this.data_temp = [...this.data];
      }
    },
    components: {
      Navbar: Navbar,
      Modal: Modal,
      Event: Event,
      Movies: Movies,
      SearchBar: SearchBar,
    },
    mounted() {
      console.log('mounted');
      this.interval = setInterval(() => {
        if (this.eventTextNum == this.text.length - 1) {
          this.eventTextNum = 0;
        } else {
          this.eventTextNum += 1;
        }
      }, 3000)
    },
    unmounted() {
      clearInterval(this.interval); // 인터발 해제
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
