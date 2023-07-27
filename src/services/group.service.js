import axios from 'axios'

import authHeader from './auth-header.js'

const API_URL = 'http://localhost:8080'

const getAll = () => {
  return axios.get(API_URL + '/api/v1/groups/list', { headers: authHeader() })
}

const addUser = (data) => {
  return axios.post(API_URL + '/api/v1/groups', data, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/api/v1/groups/' +id, { headers: authHeader() })
}

const ubdate = (id) => {
  return axios.put(API_URL + '/api/v1/groups', +id, { headers: authHeader() })
}

const getSubject = () => {
  return axios.get(API_URL + '/api/v1/subjects/list', { headers: authHeader() })
}

export default {
  getAll,
  getSubject,
  addUser,
  remove,
  ubdate,
}
