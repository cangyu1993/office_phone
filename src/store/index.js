import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    token:'',
    headerHeight:'',
    loadingNum:0,
  },
  mutations:{
    'HEADER_HEIGHT'(state,payload){
      state.headerHeight = payload
    },
    'LOADING_NUM_ADD'(state, payload) {
      state.loadingNum += payload
    },
    'LOADING_NUM_REDUCE'(state, payload) {
      state.loadingNum -= payload
    }
  }
})

export default store
