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
    .post('https://dad-jokes-2019.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.message)
      console.log(res);
      // Need to fix the payload.  Once backend is updated we should get back username, email, image url, and maybe userID
      // return dispatch({ type: LOGIN_SUCCESS, payload: res })
    })
    .catch(error => {
      console.log(error);
      console.log(error.response)
      console.log(error.message)
      //need to figure out what message we're going to display.
      // dispatch({ type: LOGIN_FAILURE, payload: error.response })
    });
}

export const BEGIN_GET_JOKE = 'BEGIN_GET_JOKE';
export const GET_JOKE_SUCCESS = 'GET_JOKE_SUCCESS';
export const GET_JOKE_FAILURE = 'GET_JOKE_FAILURE';

export const getJokes = () => dispatch => {
  dispatch({ type: BEGIN_GET_JOKE });
  
  axios
    .get('https://dad-jokes-2019.herokuapp.com/api/jokes')
    .then(res => {
      console.log(res);
      return dispatch({ type: GET_JOKE_SUCCESS , payload: res.data })
    })
    .catch(error => {
      console.log(error);
      console.log(error.response)
      console.log(error.message)
      //need to figure out what message we're going to display.
      // dispatch({ type: GET_JOKE_FAILURE , payload: error.response })
    });
}