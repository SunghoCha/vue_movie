<template>
	<form @submit.prevent="submitForm">
		<div class="form-control" :class="{invalid: !email.isValid}">
			<label for="email">Your E-Mail</label>
			<input type="email" id="email" v-model.trim="email.val" @blur="clearValidity('email')"/>
			<p v-if="!email.isValid">Enter a valid email.</p>
		</div>
		<div class="form-control" :class="{invalid: !message.isValid}">
			<label for="message">Message</label>
			<textarea rows="5" id="message" v-model.trim="message.val" @blur="claerValidity('message')"></textarea>
			<p v-if="!message.isValid">Enter a non-empty message.</p>
		</div>
		<p class="erros" v-if="!formIsValid">Please fix the above errors and submit again.</p>
		<div class="actions">
			<base-button>Send Message</base-button>
		</div>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				email: {
					val: '',
					isValid: true,
				},
				message: {
					val: '',
					isValid: true,
				},
				formIsValid: true
			};
		},
		methods: {
			clearValidity(input) {
				this[input].isValid = true;
			},
			validateForm() {
				if (this.email.val === '' || !this.email.includes('@')) {
					this.email.isValid = false;
					this.formIsValid = false;
				}
				if (this.message.val === '') {
					this.message.isValid = false;
					this.formIsValid = false;
				}
			},
			submitForm() {
				this.validateForm();
			},
		}
	}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
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

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>