import axios from 'axios'

import authHeader from './auth-header.js'


const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getAll = () => {
  return axios.get(API_URL + '/teachers/list', { headers: authHeader() })
}

export default {
  getAll,
}
