import { createRouter, createWebHistory } from 'vue-router'

import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams'},
        { 
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true }, // $route객체에서 접근가능해서 유용
            components: { default: TeamsList, footer: TeamsFooter },
            children: [ // ex) /temas/t1
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true }, // <router-view>는 root route들만 인식하므로 children은 parent route에서 따로 <router-view> 설정을 해줘야함
            ]
        }, // our-domain.com/teams => teamsList
        { 
            path: '/users', 
            components: { default: UsersList, footer: UsersFooter },
            beforeEnter(to, from, next) {
                console.log('user beforeEnter');
                console.log(to, from);
                next();
            }
        }, 
        { path: '/:notFound(.*)', component: NotFound }
    ],
    linkActiveClass: 'active',
    scrollBehavior (_, _2, savedPosition) { // 3번째 인수만 받기 위한 처리. to, from 인수로 받고 사용안할 시 발생하는 에러 대처용
        // console.log(to, from, savedPosition);
        if (savedPosition) {
            return savedPosition;
        }
        return { left: 0, top: 0}
    }
});

router.beforeEach(function(to, from, next) { // 페이지 이동 승인 전
    console.log('Global beforeEach');
    console.log(to, from);
    if (to.meta.needsAuth) {
        console.log('Needs auth!');
        next();
    } else {
        next();
    }
   
});

// 이동을 거부하도록 설정할 수 없음. 서버에 분석 데이터를 보내는데 유용
router.afterEach(function(to, from) { // 모든 이동 액션 끝에 실행됨. 한 번 실행되면 이동이 승인되기 때문에 next함수 필요없음
    // sending analytics data
    console.log('Global afterEach');
    console.log(to, from);
});

export default router;