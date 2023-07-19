import axios from 'axios';

const API_URL = 'https://3150-195-158-21-166.ngrok-free.app';

const register = (username, email, password) => {
  return axios.post(API_URL + '/signup', {
    username,
    email,
    password,
  });
};

const login = (username, password) => {

  return axios
    .post(API_URL + '/api/v1/auth/login', {
      username,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data.accessToken) {
        localStorage.setItem('token', response.data.accessToken);
        return response.data;
      }
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
