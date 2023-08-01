import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = 'http://localhost:8080';

const getUser = () => {
    return axios.get(API_URL + '/api/v1/users/me', {headers: authHeader()});
};

export default {
    getUser
};
