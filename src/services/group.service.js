import axios from 'axios'

import authHeader from './auth-header.js'

const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getAll = () => {
  return axios.get(API_URL + '/groups/list', { headers: authHeader() })
}

const addUser = (data) => {
  return axios.post(API_URL + '/groups', data, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/groups/' +id, { headers: authHeader() })
}

const ubdate = (id) => {
  return axios.put(API_URL + '/groups', +id, { headers: authHeader() })
}

const getSubject = () => {
  return axios.get(API_URL + '/subjects/list', { headers: authHeader() })
}

export default {
  getAll,
  getSubject,
  addUser,
  remove,
  ubdate,
}
