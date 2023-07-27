import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:8080';

const getAdress = () => {
    return axios.get(API_URL + '/api/v1/username', {headers: authHeader()});
};

export default getAdress
