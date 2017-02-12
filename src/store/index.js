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
  },
  // mutations must be synchronous
  // so async feature should be written in actions
  actions: {
    add (context, payload) {
      context.commit(ADD_TODO, payload)
    },
    async_add (context, payload) {
      setTimeout(() => {
        context.commit(ADD_TODO, payload)
      }, 1000)
    }
  }
})
