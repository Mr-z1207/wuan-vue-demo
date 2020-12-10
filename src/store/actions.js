import { ADD_TASK, DEL_TASK, DONE_TASK, CANCEL_TASK } from './types.js'
export default {
  [ADD_TASK]({ commit }, todo) {
    commit(ADD_TASK, todo)
  },
  [DEL_TASK]({ commit }, index) {
    commit(DEL_TASK, index)
  },
  [DONE_TASK]({ commit }, index) {
    commit(DONE_TASK, index)
  },
  [CANCEL_TASK]({ commit }, index) {
    commit(CANCEL_TASK, index)
  },
}
