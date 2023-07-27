import axios from 'axios'

import authHeader from './auth-header.js'

const API_URL = 'http://localhost:8080'

const getAll = () => {
  return axios.get(API_URL + '/api/v1/students/list', { headers: authHeader() })
}

const addStudent = (data) => {
  return axios.post(API_URL + '/api/v1/students', data, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/api/v1/students' + id, { headers: authHeader() })
}

export default {
  getAll,
  addStudent,
  remove,
}
