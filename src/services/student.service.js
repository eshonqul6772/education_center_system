import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'https://5d16-195-158-21-166.ngrok-free.app';

const getAll = () => {
  return axios.get(API_URL + '/api/v1/students/list', { headers: authHeader() });
};


export default {
    getAll
}