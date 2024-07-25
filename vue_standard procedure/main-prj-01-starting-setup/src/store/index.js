import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
	modules: {
		coaches: coachesModule,
		requests: requestsModule,
		auth: authModule,
	},
	plugins: [createPersistedState({
		paths: ['coaches' ,'requests']
	})]
});

export default store;