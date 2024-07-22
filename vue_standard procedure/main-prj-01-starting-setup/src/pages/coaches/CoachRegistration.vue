<template>
	<seciton>
		<base-card>
			<h2>Register as a coach now!</h2>
			<coach-form @save-data="saveData"></coach-form>
		</base-card>
	</seciton>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue'

	export default {
		components: {
			CoachForm
		},
		methods: {
			saveData(data) {
				this.$store.dispatch('coaches/registerCoach', data)
				this.$router.replace('/coaches'); // 이동시켜주면서 동시에 뒤로가기 못하게 막는 기능
			}
		}
	}
</script>

<style scoped>

</style>