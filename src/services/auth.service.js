import axios from 'axios';

const API_URL = process.env.REACT_APP_MY_VARIABLE;

const register = (username, email, password) => {
    return axios.post(API_URL + '/signup', {
        username,
        email,
        password
    });
};

const login = (username, password) => axios
    .post(API_URL + '/auth/login', {
        username,
        password,
    })
    .then((response) => {
        return response.data;
    });

export default {
    register,
    login
};
