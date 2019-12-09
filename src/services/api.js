import { create as createAxiosInstance } from 'axios'

const BASE_URL = 'http://localhost:3000/api/v1/'
const instance = createAxiosInstance({
  baseURL: BASE_URL,
})

export default {
  async fetchEmployees(pagination) {
    let endpoint = 'employees'

    if (pagination.page) {
      endpoint = `${endpoint}?page=${pagination.page}`
    }

    if (pagination.limit) {
      endpoint = `${endpoint}&limit=${pagination.limit}`
    }

    return (await instance.get(endpoint)).data
  },
}