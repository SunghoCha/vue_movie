const app =Vue.createApp({ // html을 컨트롤하기 위한 vue 인스턴스 생성
    data() { // data는 function을 필드값으로 가지는 함수이고 항상 객체를 반환한다.
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Finish the course and master Vue!',
            vueLink: 'https://vuejs.org/',
            htmlText: '<h1>html 태그(<h1>)를 포함한 데이터<h1>',
        }; // data에서 반환하는 객체의 어떤 부분이든 vue가 control하는 html내에서 사용가능
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA; // this를 통해서 vue 전역 객체에 접근 가능 (js의 this와는 다른 방식으로 작동)
            } else {
                return this.courseGoalB;

            }
        }
    } // methods는 메서드 및 함수로 만들어진 객체를 갖는다.
});

app.mount('#user-goal') // 컨트롤하기 위한 html의 특정요소를 id값으로 설정함( vue 앱은 하나의 HTML 요소에만 연결 가능하고 자식요소까지 제어 가능)