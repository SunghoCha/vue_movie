<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">데이터가 없습니다.</p>
      <ul v-else> 
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {

    return {
      results: [],
      isLoading: false,
      error : null
    };
  },
  methods: { // fetch는 데이터가 도착하면 이를 수신할 수 있는 객체를 반환하고 데이터가 도착했을 때 코드를 설정 및 실행함
    loadExperiences() { // 이때 리스너는 fetch의 결과값 뒤에 then 메서드를 추가하여 설정
      this.isLoading = true;
      this.error = null;
      fetch('http://localhost:80/survey')
      .then(response => { // fetch의 결과로 반환된 응답데이터를 인수로 받음
        if ( response.ok) {
          return response.json();
        }
      })
      .then(responseJson => { // 이전 then이 리턴하는 반환값을 인수로 받음
        this.isLoading = false; // fetch가 끝난 이후에 설정하면 fetch는 비동기이기 때문에 fetch가 끝나기전에 실행되버림. 그래서 then 안에 넣어야 순서가 보장됨
        console.log(responseJson);
        this.results = responseJson.data
      })
      .catch(error => { // 추후에는 에러 객체 내부에서 자세한 내용 가져다가 출력
        console.log(error);
        this.isLoading = false;
        this.error = '데이터를 가져오는데 실패하였습니다.'
      })
    }
  },
  mounted() {
    this.loadExperiences()
  },

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>