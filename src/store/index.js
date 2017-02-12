import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_TODO } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { text: 'state' },
      { text: 'action' }
    ]
  },
  mutations: {
    // ES2015 computed property name feature. constant as the function name
    [ADD_TODO] (state, payload) {
      const num = payload.num
      state.items.push({ text: `pushed ${num}` })
    }
  }
})
