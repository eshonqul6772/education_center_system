import axios from 'axios';

const API_URL = 'http://localhost:8080';

const register = (username, email, password) => {
    return axios.post(API_URL + '/signup', {
        username,
        email,
        password,
    });
};

const login = (username, password) => axios
    .post(API_URL + '/api/v1/auth/login', {
        username,
        password,
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem('token', response.data.accessToken);
            console.log(response.data)
        }
        return response.data;
    });


export default {
    register,
    login,
};
