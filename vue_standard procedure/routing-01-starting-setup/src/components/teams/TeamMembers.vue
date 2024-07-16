<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  components: {
    UserItem
  },
  data() {
    return {
		teamName: '',
		members: []
    };
  },
  methods: {
	loadTeamMembers(route) {
		const teamId = route.params.teamId; // $route는 로드한 라우트에 대한 최신정보를 담고 있음. url이 바뀌면 업데이트되므로 언제나 최신 매개변수를 포함
		const selectedTeam = this.teams.find(team => team.id === teamId);
		const members = selectedTeam.members;

		for (const member of members) {
			const selectedUser = this.users.find(user => user.id === member)
			this.members.push(selectedUser);
		}
		this.teamName = selectedTeam.name;
	}
  },
//   created() { // vue는 캐시 기능을 사용함. -> url이 바뀐다고 컴포는트가 파기되고 새로 created 되지 않기 때문에 url만 바뀌고 화면에는 변화가 없게됨.
// 	const teamId = this.$route.params.teamId; // $route는 로드한 라우트에 대한 최신정보를 담고 있음. url이 바뀌면 업데이트되므로 언제나 최신 매개변수를 포함
// 	const selectedTeam = this.teams.find(team => team.id === teamId);
// 	const members = selectedTeam.members;

// 	for (const member of members) {
// 		const selectedUser = this.users.find(user => user.id === member)
// 		this.members.push(selectedUser);
// 	}
// 	this.teamName = selectedTeam.name;
//   },
	create() {
    this.loadTeamMembers(this.$route);
	},
  watch: {
    $route(newRoute) { // 변경된 $route값인 newRoute가 인수로 전달됨
      this.loadTeamMembers(newRoute)
		}
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>