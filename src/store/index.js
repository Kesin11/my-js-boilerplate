import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      { text: 'state' },
      { text: 'action' }
    ]
  },
  mutations: {
    add(state) {
      state.items.push({ text: 'pushed' })
    }
  }
})
