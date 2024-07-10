const app = Vue.createApp({
  data() {
    return { 
      goals: [], 
      goalText : '',
    };
  },
  computed: {
    printGoal() {
      if (this.goals.length === 0) {
        return 'No goals have been added yet - please start adding some!';
      } else {
        return '';
      }
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalText);
      this.goalText='';
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
