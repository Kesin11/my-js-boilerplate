<template>
  <div id="todo">
    <div>count: {{ count }}</div><br>
    <ul>
      <li v-for="item in items">
        {{ item.text }}
      </li>
    </ul>
    <button @click="add(count)">add</button>
    <button @click="async_add(count)">async_add</button>
  </div>
</template>

<script>
// async, await feature need babel-polyfill module
import 'babel-polyfill'
import { mapState } from 'vuex'
import { ADD_TODO, ASYNC_ADD_TODO } from '../store/mutation-types'

export default {
  name: 'todo',
  computed: mapState({
    items: state => state.items,
    count: state => state.count
  }),
  methods: {
    add(count) {
      this.$store.dispatch({
        type: ADD_TODO,
        count: count
      })
    },
    async async_add(count) {
      await this.$store.dispatch({
        type: ASYNC_ADD_TODO,
        count: count
      })
      console.log('dispatch await')
    }
  },
}
</script>
