import Vue from 'vue'
import App from './App.vue'
import Todo from './components/Todo.vue'
import store from './store'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#todo',
  store,
  components: { Todo },
  render : h => h(Todo)
})
