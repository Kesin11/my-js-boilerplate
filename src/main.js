import Vue from 'vue'
import App from './App.vue'
import Todo from '././components/Todo.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#todo',
  render : h => h(Todo)
})
