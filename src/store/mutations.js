import {ADD_TASK} from './types.js'
export default {
    [ADD_TASK](state,todo){
        state.todos.unshift(todo)
    }
}
