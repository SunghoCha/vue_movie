<template>
    <ul>
        <li>
            <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)': '' }}</h2>
            <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <button @click="toggleFavorite">{{ friendIsFavorite ? 'Remove' : 'Add' }} Favorite</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ phoneNumber }} </li>
                <li><strong>Email:</strong> {{ emailAddress }} </li>
            </ul>
        </li>
    </ul>
</template>

<script>
    export default {
        // props: ['name', 'phoneNumber', 'emailAddress'],
        props: {
            name: {
                type: String,
                required: true
            },
            phoneNumber: {
                type: String,
                required: true
            },
            emailAddress: {
                type: String,
                required: true
            },
            isFavorite: {
                type: Boolean,
                required: false,
                default: false,
            } 
        },
        data() {
            return {                
                detailsAreVisible : false,
                friendIsFavorite : this.isFavorite,
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;                
            },
            toggleFavorite() {
                this.friendIsFavorite = !this.friendIsFavorite;
            }
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
</style>