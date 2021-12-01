import axios from 'axios';

const api = axios.create({
  baseURL: 'https://meliuz-server-loja.herokuapp.com/'
})

export default api;