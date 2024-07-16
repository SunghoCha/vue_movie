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
  props: ['teamId'],
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
    loadTeamMembers(teamId) {
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      for (const member of members) {
        const selectedUser = this.users.find(user => user.id === member)
        this.members.push(selectedUser);
      }
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    this.loadTeamMembers(this.teamId);
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  }

  // ====== 라우팅을 이용해 이동 시 $route에 담긴 정보 바탕으로 로직 구현 ====== (라우팅(url) 변경되더라도 정보 업데이트 안되는 문제)
	// loadTeamMembers(route) {  //* 라우터는 기본 설정상 로드된 컴포넌트에 프로퍼티(props)를 추가하지 않으므로 props를 추가로 설정해줘야함(route 설정하는 곳에서) 
	// 	const teamId = route.params.teamId; // $route는 로드한 라우트에 대한 최신정보를 담고 있음. url이 바뀌면 업데이트되므로 언제나 최신 매개변수를 포함
	// 	const selectedTeam = this.teams.find(team => team.id === teamId);
	// 	const members = selectedTeam.members;

	// 	for (const member of members) {
	// 		const selectedUser = this.users.find(user => user.id === member)
	// 		this.members.push(selectedUser);
	// 	}
	// 	this.teamName = selectedTeam.name;
	// }


// ====== $route를 활용한 방법 ======
//   created() { // vue는 캐시 기능을 사용함. -> url이 바뀐다고 컴포넌트가 파기되고 새로 created 되지 않기 때문에 url만 바뀌고 화면에는 변화가 없게됨.
// 	const teamId = this.$route.params.teamId; // $route는 로드한 라우트에 대한 최신정보를 담고 있음. url이 바뀌면 업데이트되므로 언제나 최신 매개변수를 포함
// 	const selectedTeam = this.teams.find(team => team.id === teamId);
// 	const members = selectedTeam.members;

// 	for (const member of members) {
// 		const selectedUser = this.users.find(user => user.id === member)
// 		this.members.push(selectedUser);
// 	}
// 	this.teamName = selectedTeam.name;
//   },
// ====== 라우팅이 변경되면 기존 정보도 업데이트 하도록 watcher 추가 ====== (다른 곳에서 컴포넌트 재사용이 힘들어짐. 변수전달 방식(props) 사용불가)
	// create() {
  //   this.loadTeamMembers(this.$route);
	// },
  // watch: {
  //   $route(newRoute) { // 변경된 $route값인 newRoute가 인수로 전달됨
  //     this.loadTeamMembers(newRoute)
	// 	}
  // }

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