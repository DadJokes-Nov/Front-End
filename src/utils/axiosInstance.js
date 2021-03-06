import axios from 'axios';

export const axiosInstance = () => {
  const token = localStorage.getItem('token')
  console.log(token);
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
}