import Vue from 'vue'
import App from './App.vue'
import Todo from './components/Todo.vue'
import store from './store'

// TODO: Check current vue.js style
new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
})

new Vue({ // eslint-disable-line no-new
  el: '#todo',
  store,
  components: { Todo },
  render: h => h(Todo),
})
