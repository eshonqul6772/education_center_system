import axios from "axios";

import authHeaders from "./auth-header";
const API_URL = process.env.REACT_APP_MY_API;

const uploadFile = (data) => {
  return axios.post(API_URL + `/files/upload`, data, {
    headers: {
      ...authHeaders(),
      "Content-Type": "multipart/form-data",
    },
  });
};

const getFile = (search = "", data) => {
  return axios.post(API_URL + "/files/pageable", data, {
    headers: authHeaders(),
    params: {
      search: search,
    },
  });
};


const viewFile = ( heshId) => {
    return axios.get(API_URL + "/files/file-preview/" + heshId, {
      headers: authHeaders(),
    });
  };

export default {
  uploadFile,
  getFile,
  viewFile
};
