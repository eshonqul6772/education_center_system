import axios from 'axios'

import authHeader from './auth-header.js'


const API_URL = process.env.REACT_APP_MY_API;

const getAll = (search = '', data) => {
  return axios.post(API_URL + `/teachers/pageable`, data, {
    headers: authHeader(),
    params: {
      search: search
    }
  });
};
const AddData = (data) => {
  return axios.post(API_URL + '/teachers',data, { headers: authHeader() })
}

const ubdateTeacher = (id,data) => {
  return axios.put(API_URL + `/teachers/${id}`,data, { headers: authHeader() })
}


const getTecher = (id) => {
  return axios.get(API_URL + '/teachers/'+id, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/teachers/'+id, { headers: authHeader() })
}


export default {
  getAll,
  AddData,
  getTecher,
  ubdateTeacher,
  remove
}
