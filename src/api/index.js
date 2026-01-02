import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pos-server-sederhana.vercel.app'
})

export default api;