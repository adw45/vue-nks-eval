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
      console.log(state, movie);
    }
  },
  actions: {
    addFavorite({ commit, state }, movie) {
      console.log(state);
      commit("addFavorite", movie);
    }
  }
});
