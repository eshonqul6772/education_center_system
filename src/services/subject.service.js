import axios from 'axios'

import authHeader from './auth-header.js'

const API_URL = 'http://localhost:8080'

const getAll = () => {
  return axios.get(API_URL + '/api/v1/subjects/list', { headers: authHeader() })
}

const addSubject = (data) => {
    return axios.post(API_URL + '/api/v1/subjects', data, { headers: authHeader() })
  }

  const remove = (id) => {
    return axios.delete(API_URL + '/api/v1/subjects/' + id, { headers: authHeader() })
  }


export default {
    getAll,
    addSubject,
    remove,
}