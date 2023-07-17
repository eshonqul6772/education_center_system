import axios from 'axios';

<<<<<<< HEAD
const API_URL = 'https://7d13-185-213-229-7.ngrok-free.app';
=======
const API_URL = 'https://de90-195-158-21-166.ngrok-free.app/api/v1/auth/login';
>>>>>>> origin/main

const register = (username, email, password) => {
  return axios.post(API_URL + '/signup', {
    username,
    email,
    password,
  });
};

const login = (username, password) => {

  return axios
<<<<<<< HEAD
    .post(API_URL + '/api/v1/auth/login', {
=======
    .post(API_URL, {
>>>>>>> origin/main
      username,
      password,
    })
    .then((response) => {
<<<<<<< HEAD
      console.log(response);
      if (response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken);
=======
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
>>>>>>> origin/main
        console.log(response.data)
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('token');
};

export default {
  register,
  login,
  logout,
};
