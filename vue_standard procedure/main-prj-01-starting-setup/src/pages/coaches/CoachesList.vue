<template>
	<div>
		<base-dialog :show="!!error" title="에러 발생!" @close="handleError"> <!-- error: 문자열 전달됨, !error: 반대값 전달, !!error : boolean 전달(false: null or undefined , 값이 있으면 true)-->
			<p>{{  error }}</p>
		</base-dialog>
		<section>
			<coach-filter @change-filter="setFilters"></coach-filter>
		</section>
		<section>
			<base-card>
				<div class="controls">
					<base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
					<base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
				</div>
				<div v-if="isLoading">
					<base-spinner></base-spinner>
				</div>
				<ul v-else-if="hasCoaches">
					<coach-item v-for="coach in filteredCoaches"
						:key="coach.id" 
						:id="coach.id" 
						:first-name="coach.firstName"
						:last-name="coach.lastName"
						:rate="coach.hourlyRate"
						:areas="coach.areas"
					>
					</coach-item>
				</ul>
				<h3 v-else>No Coaches found.</h3>
			</base-card>
		</section>
	</div>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
	export default {
		components: {
			CoachItem,
			CoachFilter
		},
		data() {
			return {
				isLoading: false,
				error: null,
				activeFilters: {
					frontend: true,
					backend: true,
					career: true
				}
			}
		},
		computed: {
			filteredCoaches() {
				const coaches = this.$store.getters['coaches/coaches'] // [namespace/getterName]
				return coaches.filter(coach => {
					return Object.keys(this.activeFilters).some(key => this.activeFilters[key] && coach.areas.includes(key))
				});
			},
			// filteredCoaches() {
			// 	const coaches = this.$store.getters['coaches/coaches'] // [namespace/getterName]
			// 	return coaches.filter(coach => {
			// 		if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
			// 			return true;
			// 		}
			// 		if (this.activeFilters.backend && coach.areas.includes('backend')) {
			// 			return true;
			// 		}
			// 		if (this.activeFilters.career && coach.areas.includes('career')) {
			// 			return true;
			// 		}
			// 		return false;
			// 	});
			// },
			hasCoaches() {
				return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
			},
			isCoach() {
				return this.$store.getters['coaches/isCoach'];
			},
		},
		created() {
			this.loadCoaches();
		},
		methods: {
			setFilters(updatedFilters) {
				this.activeFilters = updatedFilters;
			},
			async loadCoaches(refresh = false) { // refresh의 default 값을 false로 설정
				this.isLoading = true;
				try {
					await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh}); // Refresh 버튼 눌렀을때만 true
				} catch (error) {
					this.error = error.message || 'Something went wrong!!'
				}
				this.isLoading = false;
			},
			handleError() {
				this.error = null;
			}
		}
	}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>