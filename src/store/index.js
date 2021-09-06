import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  hoge: 'hoge',
  initialized: false
}

const actions = {
  setHoge ({ state, commit }, {data}) {
    commit('setHoge', data)
  },
  setInitialized ({state, commit}, {type}) {
    commit('setInitialized', type)
  }
}

const mutations = {
  setHoge (state, payload) {
    state.hoge = payload
  },
  setInitialized (state, payload) {
    state.initialized = payload
  }
}

const getters = {
  setHoge: state => state.setHoge,
  initialized: state => state.initialized
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  plugins: [createPersistedState(
    {
      key: 'sample',
      // 明示的にsimplestorage/localstorageに保存するものを記載する
      reducer: state => ({
        hoge: state.hoge
      })
    }
  )]
})
