import axios from 'axios';

const api = axios.create({
  baseURL: 'http://tu-api-url.com/api',
});

export default api;
