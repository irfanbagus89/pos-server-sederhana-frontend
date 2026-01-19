import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pos-sederhana-backend.irfnbgs.my.id'
})

export default api;
