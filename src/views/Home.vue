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
						<div>{{movie.title}} {{movie.release_date}}</div>
						<div>{{movie.genres}}</div>
						<div>{{movie.overview}}</div>
						<div>{{movie.backdrop_path}}</div>
						<p class="rating">
							<span>Viewer Rating:</span>{{movie.vote_average}} / 10
							<button v-if="!isFavorite(movie)" class="favorite" @click="addToFavorites(movie)">Add to favorites</button>
							<span v-else>Favorite! <a @click="true" class="remove_favorite">(UnFavorite)</a></span>
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
  	favorites: state => state.favorites
  }),
  methods: {
  	...mapActions(['addFavorite']),
  	addToFavorites: function ( movie ) {
  		console.log('adding: ' + movie);
  		this.addFavorite(movie);
  	},
  	isFavorite: function ( movie ) {
  		return this.favorites.filter(fave => fave.id == movie.id).length > 0;
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
