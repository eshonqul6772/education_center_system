import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'https://5d16-195-158-21-166.ngrok-free.app';

const getAll = (data) => {
  return axios.post(API_URL + '/api/v1/groups', data, { headers: authHeader() });
};

const addUser = (id) => {
  return axios.post(API_URL + '/api/v1/groups/list', + id, { headers: authHeader() });

};


const remove = (id) => {
  return axios.delete(API_URL + '/api/v1/groups/', + id, { headers: authHeader() });
};


const ubdate = (id) => {
  return axios.put(API_URL + '/api/v1/groups', + id, { headers: authHeader() });
};



const getSubject = () => {
  return axios.get(API_URL + '/api/v1/subjects/list', { headers: authHeader() });
};

export default {
  getAll,
  getSubject,
  addUser,
  remove,
  ubdate
}
