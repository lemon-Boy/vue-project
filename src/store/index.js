import Vue from 'vue'
import Vuex from 'vuex'
import musicInfo from './modules/musicInfo'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    musicInfo
  }
})
export default store
