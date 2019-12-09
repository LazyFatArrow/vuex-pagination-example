import Vue from 'vue'
import Vuex from 'vuex'

import employees, { EMPLOYEES_MODULE } from './employees'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [EMPLOYEES_MODULE]: employees,
  },
})
