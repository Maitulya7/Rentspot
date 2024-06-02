// axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8800/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

export default axiosInstance;
