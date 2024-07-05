import { createStore } from 'vuex';

// store 만들기
export default createStore({
    state: {
        // initial state
        count: 0,
    },
    mutations: {
        // mutations(데이터 변경)
        addCount(state, payload) {
            state.count += 1 + payload;
        }
    }
})