<template>
    <div class="home">
        <h1>Movie List!</h1>
        <p>These were the top-rated films of the 20th Century.</p>

        <p v-if="filteredGenres.length > 0">
          <span class="genre" v-for="genre in filteredGenres" @click="removeGenreFilter(genre)">
            <span class="remove">&#10006;</span> {{genre}}
          </span>
          </br>
          <span class="filter-note">
            Showing {{filteredMovies.length}} of {{movies.length}} movies.
          </span>
        </p>
        <p v-else>
          Click on a movie's genre to filter.
        </p>

        <ul class="movie-list">
          <li
            v-for="movie in filteredMovies"
            class="grid-container"
          >
            <div class="poster">
                <img :src="movie.poster_path" />
            </div>
            <div class="movie-details">
              <div
                :style="{'background-image': 'url(' + movie.backdrop_path + ')'}"
                class="movie-details-background"></div>
              <h2>{{movie.title}} ({{movie.release_date | parseYear}})</h2>
              <div>
                <Genre v-for="genre in movie.genres" :genre="genre"/>
              </div>
              <p>
                {{movie.overview}}
              </p>
              <p class="rating">
                  <span class="rating-title">Viewer Rating:</span> {{movie.vote_average}} / 10
                  <FavoriteButton :movie="movie"/>
              </p>
              <!-- img :src="movie.backdrop_path" /-->
            </div>
          </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import FavoriteButton from "@/components/FavoriteButton.vue";
import Genre from "@/components/Genre.vue";
import { mapState, mapActions } from 'vuex';

export default {
    name: "home",
    components: {
        FavoriteButton,
        Genre
    },
    computed: mapState({
      movies: state => state.movies.results,
      filteredMovies: (state) => {
        if (state.filteredGenres.length > 0) {
          return state.movies.results.filter((movie) => {
            return movie.genres.filter(genre => state.filteredGenres.includes(genre)).length > 0;
          });
        }
        return state.movies.results;
      },
      filteredGenres: state => state.filteredGenres
    }),
    methods: {
      ...mapActions(['removeGenreFilter']),
      clearGenreFilter: function ( genre ) {
        this.removeGenreFilter(genre);
      }
    },
    filters: {
        parseYear: (releaseDate) => {
          return new Date(releaseDate).getFullYear();
        }
    }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid grey;
  margin-bottom: 5px;
}
.grid-container {
  display: inline-grid;
  grid-template-columns: auto auto;
  height: 278px;
}
.poster {
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.poster > img {
  flex-shrink: 0;
}
.movie-details {
  padding: 10px;
  position: relative;
}
.rating {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
.rating-title {
  font-weight: 700;
  padding-right: 15px;
}
.genre {
  border: 1px solid grey;
  padding: 3px;
  margin-left: 10px;
  font-size: 12px;
  border-radius: 5px;
}
.movie-details-background {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: .1;
    background-repeat: no-repeat;
    background-position: 50% 0;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-size: cover;
}
.remove {
  color: red;
  font-size: 14px;
}
.filter-note {
  font-size: 12px;
}
</style>
