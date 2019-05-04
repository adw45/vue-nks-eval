<template>
    <button
        class="favorite"
        v-if="!isFavorite(movie)"
        @click="addToFavorites(movie)"
    >
        Add to favorites
    </button>
    <span v-else class="remove-favorite-header">
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
            this.addFavorite(movie);
        },
        removeFromFavorites: function ( movie ) {
            this.removeFavorite(movie);
        },
        isFavorite: function ( movie ) {
            return this.favorites.filter(fave => fave.id == movie.id).length > 0;
        }
    }
};
</script>

<style scoped>
.favorite {
  background-color: #6395ED;
  color: white;
  border-radius: 0px;
  font-size: 20px;
  width: 160px;
}
.remove-favorite-header {
  font-weight: 700;
  padding-right: 15px;
}
.remove_favorite {
  font-weight: 500;
  font-size: 12px;
}
</style>
