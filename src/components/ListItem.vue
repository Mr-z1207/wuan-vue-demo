<template>
  <div class="item">
    <van-swipe-cell>
      <template #left>
        <van-button square v-if="todos.done" type="primary" text="未完成" />
        <van-button square v-else type="primary" text="完成" />
      </template>
      <van-cell :class="[todos.done?'doneTask':'undoneTask', 'taskBox']" :title="todos.task" :value="todos.creatAt" />
      <template #right>
        <van-button square type="danger" text="删除" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
  export default {
    name: 'ListItem',
    data() {
      return {

      }
    },
    props: {
      todos: Object
    }
  }
</script>

<style scoped lang="less">
  .taskBox{
    padding-left: 12%;
    padding-right: 12%;
    text-align: left;
  }
  .doneTask {
    background-color: rgba(204, 255, 180, 0.5);
  }
  .undoneTask {
    background-color: rgba(255, 176, 176, 0.5);
  }
</style>
