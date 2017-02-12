<template>
  <div id="todo">
    <ul>
      <li v-for="item in items">
        {{ item.text }}
      </li>
    </ul>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ADD_TODO } from '../store/mutation-types'
let num = 0

export default {
  name: 'todo',
  computed: mapState({
    items: state => state.items
  }),
  methods: {
    add() {
      num += 1
      this.$store.commit({
        type: ADD_TODO,
        num: num
      })
    }
  },
}
</script>
