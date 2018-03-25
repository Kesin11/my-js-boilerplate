<template>
  <div id="todo">
    <div>count: {{ count }}</div><br>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
    <button @click="add(count)">add</button>
    <button @click="asyncAdd(count)">asyncAdd</button>
  </div>
</template>

<script>
// async, await feature need babel-polyfill module
import 'babel-polyfill'
import { mapState } from 'vuex'
import { ADD_TODO, ASYNC_ADD_TODO } from '../store/mutation-types'

export default {
  name: 'Todo',
  computed: mapState({
    items: state => state.items,
    count: state => state.count,
  }),
  methods: {
    add(count) {
      this.$store.dispatch({
        type: ADD_TODO,
        count,
      })
    },
    async asyncAdd(count) {
      await this.$store.dispatch({
        type: ASYNC_ADD_TODO,
        count,
      })
      console.debug('dispatch await')
    },
  },
}
</script>
