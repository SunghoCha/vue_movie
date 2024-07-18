<template>
		<transition-group tag="ul" name="user-list"> <!-- 여러 요소에 대해 transition 적용. transition과 다르게 DOM에 요소를 렌더링함. 유효한 html요소(커스텀 컴포넌트 포함)를 tag로 설정 가능 -->
			<li v-for="user in users" :key="user.id" @click="removeUser(user)"> <!-- Vue는 추가 또는 삭제되지 않은 요소를 새로운 위치로 이동시킬때 내부적으로 css의 transform을 이용함 -->
				{{ user.name }}
			</li>
		</transition-group>	
	<div>
		<input type="text" ref="userNameInput"/>
		<button @click="addUser">Add User</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: [
        { id: 1, name: 'Max' },
        { id: 2, name: '사람1' },
        { id: 3, name: '사람2' },
        { id: 4, name: '사람3' },
        { id: 5, name: '사람4' },
        { id: 6, name: '사람5' },
        { id: 7, name: '사람6' }
      ],
			nextUserId: 8,

			}
		},
		methods: {
			addUser() {
				const enteredUserName = this.$refs.userNameInput.value;
				this.users.unshift({ id: this.nextUserId++, name: enteredUserName });
			},
			removeUser(selectedUser) {
				this.users = this.users.filter(user => user !== selectedUser);
			}
		}
	}
</script>

<style scoped>
ul {
	list-style: none;
	margin: 1rem 0;
	padding: 0;
}
li {
	border: 1px solid #ccc;
	padding: 1rem;
	text-align: center;
}
.user-list-enter-from,
.user-list-leave-to {
	opacity: 0;
	transform: translateX(-30px);
}
.user-list-enter-active {
	transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from  {
	opacity: 1;
	transform: translateX(0);
}
.user-list-leave-active {
	transition: all 1s ease-in;
	position: absolute;
}
.user-list-move {  
	transition: transform 0.8s ease;
}
</style>