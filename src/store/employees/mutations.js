export const SET_PAGINATION = 'set_pagination'
export const SET_DATA = 'set_data'

export default {
  [SET_PAGINATION](state, pagination) {
    state.pagination = pagination
  },

  [SET_DATA](state, data) {
    state.data = data
  },
}