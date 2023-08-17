import axios from 'axios'

import authHeader from './auth-header.js'

const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getData = (data) => {
  return axios.post(API_URL + '/groups/pageable', data, {headers: authHeader()})
}

const searchGroup = (search, data) => {
  return axios.post(API_URL + `groups/pageable/search?search=${search}`, data, {
    headers: authHeader(),
  });
};

const getAll = () => {
  return axios.get(API_URL + '/groups/list', { headers: authHeader() })
}

const addGroup = (data) => {
  return axios.post(API_URL + '/groups', data, { headers: authHeader() })
}

const remove = (id) => {
  return axios.delete(API_URL + '/groups/' +id, { headers: authHeader() })
}

const getGroup = (id) => {
  return axios.get(API_URL + '/groups/'+ id, { headers: authHeader() })
}

const ubdate = (id,data) => {
  return axios.put(API_URL + `/groups/${id}`, data, { headers: authHeader() })
}


export default {
  searchGroup,
  getAll,
  getGroup,
  addGroup,
  remove,
  ubdate,
  getData
}
