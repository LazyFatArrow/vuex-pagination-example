<template>
  <div>
    page {{ pagination.page }}
    <ul>
      <li
        v-for="employee in employees"
        :key="employee.id"
      >
      {{ employee.name }}
      </li>
    </ul>
    <button
      @click="loadPreviousPage"
      :disabled="pagination.page === 1"
    >
      Previous Page
    </button>
    <button
      @click="loadNextPage"
      :disabled="pagination.page === pagination.totalPages"
    >
      Next Page
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import {
  EMPLOYEES_MODULE,
  LOAD_EMPLOYEES,
  EMPLOYEES,
  PAGINATION,
} from '@/store/employees'

export default {
  created() {
    this.loadEmployees({ page: 1, limit: 20 })
  },

  computed: {
    ...mapState(EMPLOYEES_MODULE, {
      employees: EMPLOYEES,
      pagination: PAGINATION,
    }),
  },

  methods: {
    ...mapActions(EMPLOYEES_MODULE, {
      loadEmployees: LOAD_EMPLOYEES,
    }),
    loadNextPage() {
      this.loadEmployees({
        page: this.pagination.page + 1,
      })
    },
    loadPreviousPage() {
      this.loadEmployees({
        page: this.pagination.page - 1,
      })
    },
  },
}
</script>