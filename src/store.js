import Vue from "vue";
import Vuex from "vuex";

import movies from "./apiResults";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movies,
    favorites: [],
    filteredGenres: {}
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      state.favorites = state.favorites.filter(
        tempMovie => tempMovie.id !== movie.id
      );
    },
    addGenreFilter(state, genre) {
      state.filteredGenres = {
        ...state.filteredGenres,
        [genre]: true
      };
    },
    removeGenreFilter(state, genre) {
      state.filteredGenres = delete state.filteredGenres[genre];
    }
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      commit("removeFavorite", movie);
    },
    addGenreFilter({ commit }, genre) {
      commit("addGenreFilter", genre);
    },
    removeGenreFilter({ commit }, genre) {
      commit("removeGenreFilter", genre);
    }
  }
});
