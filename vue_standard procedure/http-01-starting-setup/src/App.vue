<template>
<<<<<<< HEAD
  <learning-survey ></learning-survey>
=======
  <learning-survey></learning-survey>
>>>>>>> b2423ee96fad2166f69985e89aca7ee4e6ee6781
  <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  components: {
    LearningSurvey,
    UserExperiences,
  },
<<<<<<< HEAD
//   data() {
//     return {
//       savedSurveyResults: [],
//     };
//   },
//   methods: {
//     storeSurvey(surveyData) {
//       const surveyResult = {
//         name: surveyData.userName,
//         rating: surveyData.rating,
//         id: new Date().toISOString(),
//       };
//       this.savedSurveyResults.push(surveyResult);
//       console.log(surveyResult);
//     },
//   },
=======
  // data() {
  //   return {
  //     savedSurveyResults: [],
  //   };
  // },
  // methods: {
  //   storeSurvey(surveyData) {
  //     const surveyResult = {
  //       name: surveyData.userName,
  //       rating: surveyData.rating,
  //       id: new Date().toISOString(),
  //     };
  //     this.savedSurveyResults.push(surveyResult);
  //     console.log(surveyResult);
  //   },
  // },
>>>>>>> b2423ee96fad2166f69985e89aca7ee4e6ee6781
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>