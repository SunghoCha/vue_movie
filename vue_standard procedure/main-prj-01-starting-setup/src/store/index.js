import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';

const store = createStore({
	modules: {
		coaches: coachesModule,
		requests: requestsModule,
	},
	state() {
		return {
			userId: 1
		};
	},
	getters: {
		userId(state) {
			return state.userId;
		}
	},
	plugins: [createPersistedState({
		paths: ['coaches' ,'requests']
	})]
});

export default store;