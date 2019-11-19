import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = ''
export const axiosInstance = axios;