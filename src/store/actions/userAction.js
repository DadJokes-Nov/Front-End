import { axiosInstance } from '../../utils/axiosInstance';

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginUser = credentials => dispatch => {
  dispatch({ type: BEGIN_LOGIN });

  // axiosInstance
  //   .post(/tologin, credentials)
  //   .then(res => {
  //     localStorage.setItem('token')
  //     console.log(res);
  //     return dispatch({ type: LOGIN_SUCCESS, payload: // data here })
  //   })
  //   .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error.response }));
}