<template>
<<<<<<< HEAD
    <div>

    </div>
=======
    <ul>
        <li>
            <h2>{{ name }} {{ isFavorite ? '(Favorite)': '' }}</h2>
            <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
            <button @click="toggleFavorite">{{ isFavorite ? 'Remove' : 'Add' }} Favorite</button>
            <ul v-if="detailsAreVisible">
                <li><strong>Phone:</strong> {{ phoneNumber }} </li>
                <li><strong>Email:</strong> {{ emailAddress }} </li>
            </ul>
            <button @click="deleteFriend">Delete</button>
        </li>
    </ul>
>>>>>>> c37bf21ca35579d50a03600bc8a3406230d41c8d
</template>

<script>
    export default {
<<<<<<< HEAD
        
    }
</script>

<style lang="scss" scoped>

=======
        // props: ['name', 'phoneNumber', 'emailAddress'],
        props: {
            id : {
                type: String,
                required: true
            },
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
        emits: ['toggle-favorite', 'delete-friend'],
        // emits: {
        //     'toggle-favorite' : function(id) {
        //         if (id) {
        //             return true;
        //         } else {
        //             console.warn('Id is missing!');
        //         }
        //     }
        // },
        data() {
            return {                
                detailsAreVisible : false,
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;                
            },
            toggleFavorite() {
                this.$emit('toggle-favorite', this.id);
            },
            deleteFriend() {
                this.$emit('delete-friend', this.id);
            }
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
>>>>>>> c37bf21ca35579d50a03600bc8a3406230d41c8d
</style>