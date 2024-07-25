import {createRouter, createWebHistory} from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistation from './pages/coaches/CoachRegistration.vue';
import ContactCoache from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';

const router =  createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', redirect: '/coaches'},
		{ path: '/coaches', component: CoachesList },
		{ 
			path: '/coaches/:id', 
			component: CoachDetail,
			props: true, // id값을 prop으로 받을 수 있게 됨 
			children: [
				{ path: 'contact', component: ContactCoache }, // /coaches/c1/contact
			] 
		},
		{ path: '/register', component: CoachRegistation},
		{ path: '/requests', component: RequestsReceived},
		{ path: '/auth', component: UserAuth},
		{ path: '/:notFound(.*)', component: NotFound},
	]
});

export default router;