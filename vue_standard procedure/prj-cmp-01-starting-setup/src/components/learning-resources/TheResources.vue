<template>
	<base-card>
		<base-button @click="setSelectedTab('stored-resources')" :mode="storeResourcesButtonMode">Stored Resources</base-button>
		<base-button @click="setSelectedTab('add-resources')" :mode="addResourcesButtonMode">Add Resources</base-button>
	</base-card>
	<keep-alive :include="['AddResources', 'StoredResources']">
		<component :is="selectedTab"></component> 
	</keep-alive>
</template>
<!-- 자식을 동적 컴포넌트 사용한 시점에서 자식에서 부모로 emit을 통해서 데이터 전달하기 번거로움 -> provide/inject 사용-->
<script>
import AddResources from './AddResources.vue';
import StoredResources from './StoredResources.vue';
	export default {
		components: {
			AddResources,
			StoredResources,
		},
		data() {
			return {
				selectedTab: 'stored-resources',
				storedResources: [
                    { 
                        id: 'official-guide',
                        title: 'Official Guide',
                        description: 'The official Vue.js documentation',
                        link: 'https://vuejs.org'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to google...',
                        link: 'https://google.org'
                    }
                ],
			};
		},
		provide() {
			return {
				resources: this.storedResources,
				addResource: this.addResource,
				removeResource: this.removeResource,
			// provide는 자식들에게 전달하기 위한 정보를 메모리에 저장해놓는데 
			// 새로운 데이터(객체, 배열..)를 생성해서 메모리주소가 바뀔 경우 이를 참조하는 자식들이 변경사항을 인지하지 못함
			// 이를 방지하기 위한 쉬운 한 가지 방법은 새롭게 생성해서 메모리를 할당하지 말고 기존의 메모리 주소값을 가진 데이터의 값을 변경해서 사용
			};
		},
		computed: {
			storeResourcesButtonMode() {
				return this.selectedTab === 'stored-resources' ? null : 'flat';
			},
			addResourcesButtonMode() {
				return this.selectedTab === 'add-resources' ? null : 'flat';
			}
		},
		methods: {
			setSelectedTab(tab) {
				this.selectedTab = tab;
			},
			addResource(title, description, link) {
				const newResource = {
					id: new Date().toISOString(),
					title: title,
					description: description,
					link : link
				};
				this.storedResources.unshift(newResource); // 배열의 맨 앞에 추가
				this.selectedTab = 'stored-resources';
			},
			removeResource(resourceId) {
				const resIndex = this.storedResources.findIndex(res => res.id === resourceId);
				this.storedResources.splice(resIndex, 1);
			}
		}
	}
</script>

<style scoped>

</style>