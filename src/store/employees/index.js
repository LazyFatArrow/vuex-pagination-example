import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

export const EMPLOYEES_MODULE = 'employees'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}

export * from './state'
export * from './getters'
export * from './mutations'
export * from './actions'