<template>
  <div class="toDoList">
    <ToDo></ToDo>
    <list></list>
  </div>
</template>

<style lang="less">

</style>

<script>
  import ToDo from '@/components/ToDo.vue'
  import List from '@/components/List.vue'

  export default {
    name: 'ToDoList',
    components: {
      ToDo,
      List
    }
  }
</script>
