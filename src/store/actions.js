import {ADD_TASK} from './types.js'
export default {

[ADD_TASK]({commit}, todo){
        commit(ADD_TASK,todo)
    }
}
