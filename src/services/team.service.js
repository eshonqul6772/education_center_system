import axios from 'axios'

import authHeader from './auth-header.js'

const API_URL = 'http://localhost:8080'

const getAll = () => {
  return axios.get(API_URL + '/api/v1/teachers/list', { headers: authHeader() })
}

export default {
  getAll,
}
