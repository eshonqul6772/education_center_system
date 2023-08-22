import axios from 'axios';

import authHeaders from './auth-header';
const API_URL = process.env.REACT_APP_MY_VARIABLE;


const uploadFile = (data)=>{
    return axios.post(API_URL+ `/files/upload`, data,{
        headers:{
            ...authHeaders(),
            "Content-Type": "multipart/form-data",
        }
    })
}

export default {
    uploadFile,
}