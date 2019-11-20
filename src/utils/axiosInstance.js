import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'https://dad-jokes-2019.herokuapp.com'
export const axiosInstance = axios;