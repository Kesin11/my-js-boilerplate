import Vue from 'vue'
import App from './App.vue'
import Todo from './components/Todo.vue'
import store from './store'

// TODO: Check current vue.js style
const _app = new Vue({
  el: '#app',
  render: h => h(App),
})

const _todo = new Vue({
  el: '#todo',
  store,
  components: { Todo },
  render: h => h(Todo),
})
