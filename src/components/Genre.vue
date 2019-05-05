<template>
   <span
    @click="filterGenre(genre)"
    class="genre"
  >
    {{genre}}
  </span>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: "Genre",
    props: {
        genre: String
    },
    computed: mapState({
        filteredGenres: state => state.filteredGenres
    }),
    methods: {
        ...mapActions(['addGenreFilter']),
        filterGenre: function ( genre ) {
          this.addGenreFilter(genre);
        }
    }
};
</script>

<style scoped>
</style>
