import { axiosInstance } from '../../utils/axiosInstance';

export const START_LOGIN = 'START_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN FAILURE';

export const loginUser = credentials => dispatch => {
  // dispatch({ type: START_LOGIN });
  console.log(credentials);
  //  dispatch({ type: LOGIN_SUCCESS, payload: {    name: 'Andrew Wilson',
  //  id: 0,
  //  email: 'easyas123l1@aol.com',
  //  img_url: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'} })

  // axiosInstance
  //   .post(/tologin, credentials)
  //   .then(res => {
  //     localStorage.setItem('token')
  //     console.log(res);
  //     return dispatch({ type: LOGIN_SUCCESS, payload: // data here })
  //   })
  //   .catch(error => dispatch({ type: LOGIN_FAILURE, payload: error.response }));
}