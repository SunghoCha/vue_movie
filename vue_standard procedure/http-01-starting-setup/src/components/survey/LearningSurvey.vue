<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">{{ error }}</p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null
    };
  },
<<<<<<< HEAD
//   emits: ['survey-submit'],
=======
  // emits: ['survey-submit'],
>>>>>>> b2423ee96fad2166f69985e89aca7ee4e6ee6781
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
<<<<<<< HEAD
	}
}
=======

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.error = null;
      fetch('http://localhost:80/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          name: this.enteredName, 
          rating: this.chosenRating 
        },)
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('데이터를 저장할 수 없습니다.');
        } 
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        this.error = error.message; // 데이터를 저장할 수 없습니다.
      })
      

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
>>>>>>> b2423ee96fad2166f69985e89aca7ee4e6ee6781
};

</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>