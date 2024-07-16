<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <ul>
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
      results: []
    };
  },
  methods: { // fetch는 데이터가 도착하면 이를 수신할 수 있는 객체를 반환하고 데이터가 도착했을 때 코드를 설정 및 실행함
    loadExperiences() { // 이때 리스너는 fetch의 결과값 뒤에 then 메서드를 추가하여 설정
      fetch('http://localhost:80/hello2')
      .then((response) => { // fetch의 결과로 반환된 응답데이터를 인수로 받음
        if ( response.ok) {
          return response.json();
        }
      })
      .then((responseJson) => { // 이전 then이 리턴하는 반환값을 인수로 받음
        console.log(responseJson);
        // const results = [];
        // for (const id in data) {
        //   results.push({
        //     id: id,
        //     name: data[id].name,
        //     rating: data[id].rating,
        //   })
        // }
        // this.results = results;
        this.results = responseJson.data
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