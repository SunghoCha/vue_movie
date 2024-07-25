<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email" @blur="clearValidity('email')"/>
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password" @blur="clearValidity('password')"/>
      </div>
      <base-button>Login</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">Signup instead</base-button>
    </form>
  </base-card>
</template>

<script>
  export default {
    data() {
      return {
        email: {
          val: '',
          isValid: true,
        },
        password: {
          val: '',
          isValid: true,
        },
        formIsValid: true,
        mode: 'login',
      };
    },
    methods: {
      clearValidity(input) {
        this[input].isValid = true;
      },
      validateForm() {
        this.formIsValid = true;
        if (this.email.val === '' || !this.email.val.includes('@')) {
          this.email.isValid = false;
          this.formIsValid = false;
        }
        if (this.password.val === '') {
          this.password.isValid = false;
          this.formIsValid = false;
        }
      },
      submitForm() {
        this.validateForm();
        if (this.formIsValid) {
        
        }
      },
      switchAuthMode() {

      }
    }
    
  }
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>