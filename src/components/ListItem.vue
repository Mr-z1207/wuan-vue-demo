<template>
  <div class="item">
    <van-swipe-cell>
      <template #left>
        <van-button square v-if="todos.done" type="warning" text="取消" @click="cancelTask" />
        <van-button square v-else type="success" text="完成" @click="doneTask" />
      </template>
      <van-cell :class="[todos.done?'doneTask':'undoneTask', 'taskBox']" :title="todos.task" :value="todos.creatAt"
        icon="arrow-left">
        <template #right-icon>
          <van-icon name="arrow" class="arrow-icon" />
        </template>
      </van-cell>
      <template #right>
        <van-button square type="danger" text="删除" @click="delTask" />
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
  import {
    DEL_TASK,
    DONE_TASK,
    CANCEL_TASK
  } from '@store/types.js'
  export default {
    name: 'ListItem',
    data() {
      return {

      }
    },
    props: {
      todos: Object,
      index: Number,
    },
    methods: {
      cancelTask() {
        this.$store.dispatch(CANCEL_TASK, this.index)
      },
      doneTask() {
        this.$store.dispatch(DONE_TASK, this.index)
      },
      delTask() {
        this.$store.dispatch(DEL_TASK, this.index)
      },
    }
  }
</script>

<style scoped lang="less">
  .taskBox {
    text-align: left;

    span {
      padding: 0 12px;
    }
  }

  .doneTask {
    background-color: rgba(204, 255, 180, 0.5);
  }

  .undoneTask {
    background-color: rgba(255, 176, 176, 0.5);
  }

  .arrow-icon {
    padding-left: 0.625rem;
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    color: #323233;
  }
</style>
