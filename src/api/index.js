import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pos-server-backend.irfnbgs.my.id'
})

export default api;
