<template>
  <div class="todo">
    <van-row justify="center">
      <van-col span="20">
        <van-cell-group>
          <van-field v-model="task" label="ToDo " :colon="true" :center="true" placeholder="输入任务名称" :autofocus="true">
            <template #button>
              <van-button size="small" type="primary" @click="submit">提交</van-button>
            </template>
          </van-field>
        </van-cell-group>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { ADD_TASK } from '@store/types.js'
  import { momentUnitl } from '@unitl'

  import { Dialog } from 'vant';
  
  export default {
    name: 'ToDo',
    data() {
      return {
        task: ""
      }
    },
    methods: {
      submit() {
        const task = this.task.trim()
        if (!task) {
          Dialog.alert({
            message: 'ToDo不能为空',
            theme: 'round-button',
          }).then(() => {
            return
          });
          return
        }
        var todo = {
          task: task,
          creatAt: momentUnitl(Date.now()),
          done: false
        }
        this.$store.dispatch(ADD_TASK, todo)
        this.task = ''
      },
    }
  }
</script>

<!-- scoped 样式只在当前组件中生效 -->
<style scoped lang="less">

</style>
