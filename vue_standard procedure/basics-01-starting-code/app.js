const app =Vue.createApp({ // html을 컨트롤하기 위한 vue 인스턴스 생성
    data() { // data는 function을 필드값으로 가지는 함수이고 항상 객체를 반환한다.
        return {
            courseGoal: 'Finish the courese and learn Vue!',
            vueLink: 'https://vuejs.org/'
        }; // data에서 반환하는 객체의 어떤 부분이든 vue가 control하는 html내에서 사용가능
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        }
    } // methods는 메서드 및 함수로 만들어진 객체를 갖는다.
});

app.mount('#user-goal') // 컨트롤하기 위한 html의 특정요소를 id값으로 설정함