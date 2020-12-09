<template>
  <div class="list">
    <ListItem v-for="(todos, index) in this.$store.state.todos" :todos="todos"></ListItem>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem.vue'

  export default {
    name: 'List',
    data() {
      return {

      }
    },
    components: {
      ListItem
    }
  }
</script>

<style>

</style>
