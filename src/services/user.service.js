import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'https://3150-195-158-21-166.ngrok-free.app';

const getAdress = () => {
  return axios.get(API_URL + '/api/v1/usersme', { headers: authHeader() });
};



export default getAdress
