import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* Vuex store se koristi kao mesto za GLOBALNO cuvanje podataka sto znaci da njima imate pristup
   iz bilo koje stranice, komponente
   Pristupa mu se sa: this.$store.state.likedPosts (umesto likedPosts moze da ide bilo sta sto vam stoji u state)
*/

export default new Vuex.Store({
  state: {
    likedPosts: []
  },
  mutations: {

  },
  actions: {

  }
})
