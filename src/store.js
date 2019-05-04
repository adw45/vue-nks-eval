import Vue from "vue";
import Vuex from "vuex";

import movies from "./apiResults";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: movies,
    favorites: []
  },
  mutations: {
    addFavorite(state, movie) {
      state.favorites.push(movie);
    },
    removeFavorite(state, movie) {
      state.favorites = state.favorites.filter(
        tempMovie => tempMovie.id !== movie.id
      );
    }
  },
  actions: {
    addFavorite({ commit }, movie) {
      commit("addFavorite", movie);
    },
    removeFavorite({ commit }, movie) {
      commit("removeFavorite", movie);
    }
  }
});
