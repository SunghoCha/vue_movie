<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: !email.isValid}">
        <label for="email">E-Mail</label>
        <input type="email" id="email" v-model.trim="email.val" @blur="clearValidity('email')"/>
        <p v-if="!email.isValid">Enter a valid email.</p>
      </div>
      <div class="form-control" :class="{invalid: !password.isValid}">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password.val" @blur="clearValidity('password')"/>
        <p v-if="!password.isValid">Enter a valid password.</p>
      </div>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{ swithModeButtonCaption }}</base-button>
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
    computed: {
      submitButtonCaption() {
        if (this.mode === 'login') {
          return 'Login';
        } else {
          return 'Signup';
        }
      },
      swithModeButtonCaption() {
        if (this.mode === 'login') {
          return 'Signup instead';
        } else {
          return 'Login instead';
        }
      }
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
        if (!this.formIsValid) {
          return;
        }
        
        if (this.mode === 'login') {
          // ..
        } else {
          this.$store.dispatch('signup', {
            email: this.email.val,
            password: this.password.val
          }); // namespace 사용안함
        }
      },
      switchAuthMode() {
        if (this.mode === 'login') {
          this.mode = 'signup'
        } else {
          this.mode = 'login'
        }
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

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>