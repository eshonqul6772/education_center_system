import axios from 'axios';

import authHeader from './auth-header.js';


const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getUser = () => {
    return axios.get(API_URL + '/users/me', {headers: authHeader()});
};

export default {
    getUser
};
