import axios from 'axios';

const API_URL = 'http://localhost:1212/admin';

const register = (username, email, password) => {
  return axios.post(API_URL + '/signup', {
    username,
    email,
    password,
  });
};

const login = (userName, password) => {
  return axios
    .post(API_URL + '/login', {
      userName,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
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
