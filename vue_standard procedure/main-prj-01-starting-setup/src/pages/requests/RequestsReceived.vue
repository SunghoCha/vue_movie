<template>
	<div>
		<base-dialog :show="!!error" title="에러 발생!!" @close="handleError"> <!-- error: 문자열 전달됨, !error: 반대값 전달, !!error : boolean 전달(false: null or undefined , 값이 있으면 true)-->
			<p>{{  error }}</p>
		</base-dialog>
		<section>
			<base-card>
				<header>
					<h2>Requests Received</h2>
				</header>
				<base-spinner v-if="isLoading"></base-spinner>
				<ul v-else-if="hasRequests && !isLoading">
					<request-item v-for="request in receivedRequests" 
						:key="request.id"
						:email="request.userEmail"
						:message="request.message"></request-item>
				</ul>
				<h3 v-else>You haven't received any requests yet!</h3>
			</base-card>
		</section>
	</div>
</template>

<script>
	import RequestItem from '../../components/requests/RequestItem.vue'; 
	export default {
		components: {
			RequestItem,
		},
		data() {
			return {
				isLoading: false,
				error: null
			};
		},
		computed: {
			receivedRequests() {
				return this.$store.getters['requests/requests'];
			},
			hasRequests() {
				return this.$store.getters['requests/hasRequests'];
			}
		},
		created() {
			this.loadRequests();
		},
		methods: {
			async loadRequests() {
				this.isLoading = true;
				try {
					await this.$store.dispatch('requests/fetchRequests');
				} catch (error) {
					console.log('Error details:', error);
					this.error = 'Someting failed!!!!';
				}
				this.isLoading = false;
			},
			handleError() {
				this.error = null;
			}
		},
	}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>