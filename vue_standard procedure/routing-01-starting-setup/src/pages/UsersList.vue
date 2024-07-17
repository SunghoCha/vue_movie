<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { changesSaved: false };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      //this.$router.forward();
      //this.$router.backward();
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  beforeRouterEnter(to, from, next) {
    console.log('UsersList Comp beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('UserList cmp beforeRouteLeave');
    console.log(to, from);
    
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm('변경된 데이터가 저장되지 않았습니다. 그래도 이동하시겠습니까?')
      next(userWantsToLeave);
    }
   
    
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>