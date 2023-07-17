import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:1212/admin';

const getAdress = () => {
  return axios.get(API_URL + '/address', { headers: authHeader() });
};

const deleteAddress = (id) => {
  return axios.delete(API_URL + '/address/' + id, { headers: authHeader() });
};


export default {
    getAdress,
    deleteAddress
};
