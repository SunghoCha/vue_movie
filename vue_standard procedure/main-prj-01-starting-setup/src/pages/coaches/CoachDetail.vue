<template>
	<div>
		<section>
			<base-card>
				<h2>{{ fullName }}</h2>
				<h3>${{ rate }}/hour</h3>
			</base-card>
		</section>
		<section>
			<base-card>
				<header>
					<h2>멘토링 신청하기</h2>
					<base-button link :to="contactLink">Contact</base-button>
				</header>
				<router-view></router-view>
			</base-card>
		</section>
		<section>
			<base-card>
				<base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
				<p>{{ description }}</p>
			</base-card>
		</section>
	</div>
</template>

<script>
	export default {
		props: ['id'],
		data() {
			return {
				selectedCoach: null
			};
		},
		created() {
			// 타입 확인 (넘어온 coachId는 Long -> number로 처리되고 this.id는 String)
			console.log("Type of this.id:", typeof this.id);
			const coaches = this.$store.getters['coaches/coaches'];
			coaches.forEach(coach => {
				console.log("Type of coach.id:", typeof coach.id);
			});

			// 요청 데이터 확인
			console.log('Number of coaches:', coaches.length);
			coaches.forEach(coach => {
				console.log('Coach ID:', coach.id);
				console.log('First Name:', coach.firstName);
				console.log('Last Name:', coach.lastName);
				console.log('Areas:', coach.areas);
				console.log('Description:', coach.description);
				console.log('Hourly Rate:', coach.hourlyRate);
			});

			this.selectedCoach = coaches.find(coach => String(coach.id) === String(this.id));
		},
		computed: {
			fullName() {
				console.log(this.selectedCoach.firstName);
				return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
			},
			areas() {
				return this.selectedCoach.areas;
			},
			rate() {
				return this.selectedCoach.hourlyRate;
			},
			contactLink() {
				return this.$route.path + '/' + this.id + '/contact';
			},
			description() {
				return this.selectedCoach.description;
			}
		}
	}
</script>

<style lang="scss" scoped>

</style>