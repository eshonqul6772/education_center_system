import axios from 'axios';

import authHeader from './auth-header.js';

const API_URL = process.env.REACT_APP_MY_API;

const getUser = () => {
    return axios.get(API_URL + '/users/me', { headers: authHeader() });
};

const getUserId = (id) => {
    return axios.get(API_URL + '/users/' + id, {headers: authHeader()});
};

const update = (id, data) => {
    return axios.put(API_URL + `/users/${id}`,data, {headers: authHeader()});
};

export default {
    getUser,
    getUserId,
    update
};
