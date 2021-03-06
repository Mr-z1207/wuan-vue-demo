import { createStore } from 'vuex'

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import modules from './modules.js'
import getters from './getters.js'
import types from './types.js'

export default createStore({
  state,
  mutations,
  actions,
  modules,
})
