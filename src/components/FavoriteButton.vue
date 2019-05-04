<template>
    <button
        class="favorite"
        v-if="!isFavorite(movie)"
        @click="addToFavorites(movie)"
    >
        Add to favorites
    </button>
    <span v-else>
        Favorite!
        <a
            @click="removeFromFavorites(movie)"
            class="remove_favorite"
        >
            (UnFavorite)
        </a>
    </span>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "FavoriteButton",
    props: {
        movie: Object
    },
    computed: mapState({
        movies: state => state.movies,
        favorites: state => state.favorites
    }),
    methods: {
        ...mapActions(['addFavorite', 'removeFavorite']),
        addToFavorites: function ( movie ) {
            console.log('adding: ' + movie);
            this.addFavorite(movie);
        },
        removeFromFavorites: function ( movie ) {
            console.log('removing: ' + movie);
            this.removeFavorite(movie);
        },
        isFavorite: function ( movie ) {
            return this.favorites.filter(fave => fave.id == movie.id).length > 0;
        }
    }
};
</script>

<style scoped>

</style>
