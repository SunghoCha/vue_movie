<template>
    <h2>Manage Goals</h2>
    <input type="text" v-model="inputText" />
    <button @click="setGoal1">Set Goal</button>

    <input type="text" ref="goal"/>
    <button @click="setGoal">Set Goal</button>
    <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Plase enter at least a few characters... 공백 입력 불가</p>
        <button @click="confirmError">Okay</button>
    </error-alert>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'
    export default {
        components: {
            ErrorAlert
        },
        data() {
            return {
                inputText : '',
                inputIsInvalid: false,
            }
        },
        methods: {
            setGoal1() {
                if (this.inputText === '') {
                    alert("empty text");
                }
            },
            setGoal() {
                const enteredValue = this.$refs.goal.value;
                if (enteredValue === '') {
                    this.inputIsInvalid = true;
                    alert("Input must not be empty");
                }
            },
            confirmError() {
                this.inputIsInvalid = false;
            }
        }
    }
</script>

<style>

</style>