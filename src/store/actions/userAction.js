// import { axiosInstance } from '../../utils/axiosInstance';
import axios from 'axios';

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginUser = credentials => dispatch => {
  dispatch({ type: START_LOGIN });
  console.log(credentials);

  //need to make sure the URL is correct.
  axios
    .post('http://localhost:4300/api/login', credentials)
    .then(res => {
      localStorage.setItem('token')
      console.log(res);
      return dispatch({ type: LOGIN_SUCCESS, payload: res })
    })
    .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error.response }));
}