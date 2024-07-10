const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      fullname: '',
      lastName: '',
    };
  },
  computed: {
    fullname() {
        if (this.name === '') {
          return '';
        }
        return this.name + ' ' + this.lastName; // watch와 다르게 여러 의존성을 한 번에 처리 가능 (-> 애초에 watch의 용도는 다른 곳에 있음)
    },
  },
  watch: {
    // name(value) { // value는  watch의 대상인 name의 값을 의미
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + this.lastName; // 마치  name이 변경되면 따라서 같이 변경되어야 할 것들을 원자성으로 묶어주느 느낌(~트랜잭션하고 비슷한 개념도 있는건가)
    //   }
    // },                                          // computed를 watch로 구현할 수 있지만 의존성이 1개가 아닐경우 중복코드가 발생. 예를 들면 fullname에 영향을 주는 것이 name뿐만 아니라 lastname도 있는 경우..
    // lastName(value) {                           // 비슷한 로직이 두 번 반복됨
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // } //watch => 모든 프로퍼티 변화가 아닌 일부 프로퍼티의 변화에 반응하여 데이터 프로퍼티를 업데이트 해야하는 경우 유용함 (연산 프로퍼티는 출력값을 동적으로 계산할 때 주로 사용)
    counter(value) { // 제한조건을 설정하는 작업 같은 경우 watch가 유용함 (다른 예로 특정 데이터가 변경되면 보내는 http 요청, 특정 값이 변경되면 설정하는 타이머 등..)
      if (value > 50) {
        this.counter = 0;
      }
    }
  },
  methods: {
    outputFullName() {
      if (this.name == '') {
        return '';
      }
      return this.name + 'text';
    },
    resetInput() {
      this.name = '';
    },
    setName(event, text) {
      this.name = event.target.value;
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted!')
    },
    addCount() {
      this.counter++;
    },
    removeCount() {
      this.counter--;
    },
  },
});

app.mount('#events');
