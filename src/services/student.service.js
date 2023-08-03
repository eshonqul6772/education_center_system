import axios from 'axios'

import authHeader from './auth-header.js'


const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getAll = () => {
  return axios.get(API_URL + '/students/list', { headers: authHeader() })
}

const addStudent = (data) => {
  return axios.post(API_URL + '/students', data, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/students' + id, { headers: authHeader() })
}

export default {
  getAll,
  addStudent,
  remove,
}
