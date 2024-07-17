<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() { // :to에 문자열보다 객체를 전달하도록 하자 (가독성, 유지보수성, 쿼리스트링 추가 등..)
      // return '/teams/' + id + '?sort=asc'";
      return { 
        name: 'team-members', 
        params: { teamId: this.id }, // 경로가 /teams 에서 /newTeams로 바뀐다고해도 이 코드는 변경되지 않는 장점
        query: { sort : 'asc' }
      }; 
    }
  }
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>