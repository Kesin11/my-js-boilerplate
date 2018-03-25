import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { ADD_TODO } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  state: {
    items: [{ id: 1, text: 'state' }, { id: 2, text: 'action' }],
    count: 0,
  },
  mutations: {
    // ES2015 computed property name feature. constant as the function name
    [ADD_TODO](state, payload) {
      const count = payload.count + 1
      state.count = count
      state.items.push({ text: `pushed ${count}` })
    },
  },
})
