<template>
  <div id="todo">
    <ul>
      <li v-for="item in items">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {
      items: [
        { text: 'foo' },
        { text: 'bar' }
      ]
    }
  }
}
</script>
