const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
     
    };
  },
  methods: {
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
    setName(event, text) {
      this.name = event.target.value + ' ' + text;
    }
  },
});

app.mount('#events');
