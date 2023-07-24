import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:8080';

const getAll = (data) => {
  return axios.get(API_URL + '/api/v1/groups/list', data, { headers: authHeader() });
};

const addUser = (id) => {
  return axios.post(API_URL + '/api/v1/groups/list', + id, { headers: authHeader() });
};


const delet = (id) => {
  return axios.delete(API_URL + '/api/v1/groups/list', + id, { headers: authHeader() });
};


const ubdate = (id) => {
  return axios.put(API_URL + '/api/v1/groups/list', + id, { headers: authHeader() });
};


export default {
  getAll,
  addUser,
  delet,
  ubdate
}
