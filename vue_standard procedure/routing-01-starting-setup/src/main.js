import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        { 
            path: '/teams', 
            component: TeamsList,
            children: [ // ex) /temas/t1
                { path: ':teamId', component: TeamMembers, props: true }, // <router-view>는 root route들만 인식하므로 children은 parent route에서 따로 <router-view> 설정을 해줘야함
            ]
        }, // our-domain.com/teams => teamsList
        { path: '/users', component: UsersList }, 
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active'
});

const app = createApp(App)

app.use(router);

app.mount('#app');
