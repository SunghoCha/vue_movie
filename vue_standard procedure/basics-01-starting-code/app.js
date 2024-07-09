const app =Vue.createApp({
    data() { // data에서 반환하는 객체의 어떤 부분이든 vue가 control하는 html내에서 사용가능
        return {
            courseGoal: 'Finish the courese and learn Vue!'
        };
    }
});

app.mount('#user-goal')