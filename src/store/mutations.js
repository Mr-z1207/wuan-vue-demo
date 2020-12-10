import { ADD_TASK, DEL_TASK, DONE_TASK, CANCEL_TASK } from './types.js'
export default {
    [ADD_TASK](state,todo){
        state.todos.unshift(todo)
    },
    [DEL_TASK](state,index){
        state.todos.splice(index, 1)
    },
    [DONE_TASK](state,index){
        state.todos[index].done = true
    },
    [CANCEL_TASK](state,index){
        state.todos[index].done = false
    },
}
