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
export default {
  name: 'todo',
  computed: mapState({
    items: state => state.items
  }),
  methods: {
    add() {
      this.$store.commit('add')
    }
  },
}
</script>
