<template>
	<base-card>
		<base-button @click="setSelectedTab('stored-resources')" :mode="storeResourcesButtonMode">Stored Resources</base-button>
		<base-button @click="setSelectedTab('add-resources')" :mode="addResourcesButtonMode">Add Resources</base-button>
	</base-card>
	<component :is="selectedTab"></component>
</template>

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
				resources: this.storedResources	
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
			}
		}
		
	}
</script>

<style lang="scss" scoped>

</style>