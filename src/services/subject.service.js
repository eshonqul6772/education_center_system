import axios from 'axios'

import authHeader from './auth-header.js'


const API_URL = process.env.REACT_APP_MY_VARIABLE;

const getAll = () => {
    return axios.get(API_URL + '/subjects/list', {headers: authHeader()})
}

const addSubject = (data) => {
    return axios.post(API_URL + '/subjects', data, {headers: authHeader()})
}

const remove = (id) => {
    return axios.delete(API_URL + '/subjects/' + id, {headers: authHeader()})
}

const getSubject = (id) => {
    return axios.get(API_URL + '/subjects/'+ id, {headers: authHeader()})
}

const ubdate = (id, data) => {
    return axios.put(API_URL + `/subjects/${id}`, data, { headers: authHeader(), })
}




export default {
    getAll,
    addSubject,
    remove,
    getSubject,
    ubdate,
}