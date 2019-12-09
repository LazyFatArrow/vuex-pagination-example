import api from '@/services/api'
import {
  SET_DATA,
  SET_PAGINATION,
} from './mutations'
import state from './state'

export const LOAD_EMPLOYEES = 'load_employees'
export const NEXT_PAGE = 'next_page'
export const PREVIOUS_PAGE = 'previous_page'

export default {
  async [LOAD_EMPLOYEES]({ commit }, payload) {
    const data = await api.fetchEmployees({
      ...state.pagination,
      ...payload,
    })

    commit(SET_DATA, data.data)
    commit(SET_PAGINATION, {
      page: data.page,
      limit: data.limit,
      totalPages: data.totalPages,
    })
  },
}