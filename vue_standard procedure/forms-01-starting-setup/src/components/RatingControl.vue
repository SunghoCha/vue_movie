<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}">
            <button type="button" @click="activate('poor')">Poor</button>
        </li>
        <li :class="{active: activeOption === 'average'}">
            <button type="button" @click="activate('average')">Average</button>
        </li>
        <li :class="{active: activeOption === 'great'}">
            <button type="button" @click="activate('great')">Great</button>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['modelValue'],
        emits: ['update:modelValue'],
        data() {
            return {
                activeOption: this.modelValue,
            };
        },
        computed: {

        },
=======
        // data() {
        //     return {
        //         activeOption: this.modelValue,
        //     };
        // },
		computed: {
			activeOption() {
				return this.modelValue;
			}
		},
>>>>>>> ec36a1294fdea5f2dcc2bd21a720f0e31f05f5cf
        methods: {
            activate(option) {
                this.activeOption = option;
                this.$emit('update:modelValue', option);
            }
        }
    }
</script>

<style scoped>
.active {
    border-color: #a00078;
}

.active button {
    color:#a00078;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
   margin: 0 1rem;
   border: 1px solid #ccc;
   padding: 1rem;
   display: flex;
   justify-content: center;
   align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>