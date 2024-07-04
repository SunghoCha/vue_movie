import { createWebHistory, createRouter } from "vue-router";
import TitlePage from '../components/TitlePage';

const router = createRouter({
    history: createWebHistory(),
    [
        { path: '/', component: TitlePage}
    ]
})

export default router;