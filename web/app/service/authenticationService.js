import * as axios from 'axios';
import {API_URL} from 'app/constants/api';

export const login = (username, password) => {
  const data = {
    username,
    password,
  };
  const headers = {
    'api-version': '1',
    Accept: 'application/json',
  };

  return axios.post(`${API_URL}/login`, data, {
    headers,
  });
};
