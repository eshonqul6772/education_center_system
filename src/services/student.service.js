import axios from 'axios'

import authHeader from './auth-header.js'


const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getAll = (search = '', data) => {
  return axios.post(API_URL + `/students/pageable`, data, {
    headers: authHeader(),
    params: {
      search: search
    }
  });
};

const getStudent = (id) => {
  return axios.get(API_URL + '/students/' +id, { headers: authHeader() })
}

const addStudent = (data) => {
  return axios.post(API_URL + '/students', data, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/students/' + id, { headers: authHeader() })
}

const ubdate = (id,data) => {
  return axios.put(API_URL + `/students/${id}`, data, { headers: authHeader() })
}


export default {
  getAll,
  getStudent,
  addStudent,
  remove,
  ubdate
}
