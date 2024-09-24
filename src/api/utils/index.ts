import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosInstance.interceptors.request.use(config => {
  console.info('Request');

  return config;
});

export { axiosInstance };
