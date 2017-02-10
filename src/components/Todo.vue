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
export default {
  name: 'todo',
  computed: {
    items() {
      return this.$store.state.items
    }
  },
  methods: {
    add() {
      this.$store.commit('add')
    }
  },
}
</script>
