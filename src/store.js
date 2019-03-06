import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    }
  },
  actions: {
    getMusic({ commit }, artist) {
      let url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
      $.getJSON(url)
        .then(res => {
          commit('setResults', res.results.splice(0, 25))
        })
        .catch(err => console.log(err))
    }
  }
})
