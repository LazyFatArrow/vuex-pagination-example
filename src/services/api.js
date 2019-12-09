import { create as createAxiosInstance } from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1/'
const instance = createAxiosInstance({
  baseURL: BASE_URL,
})


export default {
  async fetchEmployees(options) {
    let endpoint = 'employees'

    if (options.page) {
      endpoint = `${endpoint}?page=${options.page}`
    }

    if (options.limit) {
      endpoint = `${endpoint}&limit=${options.limit}`
    }

    return (await instance.get(endpoint)).data
  },
}