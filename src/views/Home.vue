<template>
    <div class="home">
        <h1>Movie List!</h1>
        <p>These were the top-rated films of the 20th Century.</p>

        <ul class="movie-list">
        <li v-for="movie in movies.results">
            <div>
            <div class="left">
                <img
                :src="movie.poster_path"
                />
            </div>
            <div class="right"
                :style="{'background-image': 'url(' + movie.backdrop_path + ')'}"
            >
                <div>{{movie.title}} {{movie.release_date | parseYear}}</div>
                <div>{{movie.genres}}</div>
                <div>{{movie.overview}}</div>
                <div>{{movie.backdrop_path}}</div>

                <p class="rating">
                    <span>Viewer Rating:</span> {{movie.vote_average}} / 10
                    <FavoriteButton :movie="movie"/>
                </p>

            </div>
            </div>
        </li>
        </ul>
    </div>
</template>

<script>
// @ is an alias to /src
import FavoriteButton from "@/components/FavoriteButton.vue";
import { mapState, mapActions } from 'vuex';

export default {
    name: "home",
    components: {
        FavoriteButton
    },
    computed: mapState({
        movies: state => state.movies,
    }),
    filters: {
        parseYear: (releaseDate) => {
            return new Date(releaseDate).getFullYear();
        }
    }
};
</script>

<style scoped>
.left {
    display: inline-block;
    width: 20%;
height: 120px;
}
.right {
    display: inline-block;
    width: 80%;
}
</style>
