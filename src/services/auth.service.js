import axios from 'axios';

const API_URL = 'https://de90-195-158-21-166.ngrok-free.app/api/v1/auth/login';

const register = (username, email, password) => {
  return axios.post(API_URL + '/signup', {
    username,
    email,
    password,
  });
};

const login = (username, password) => {

  return axios
    .post(API_URL, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
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
