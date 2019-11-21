// import { axiosInstance } from '../../utils/axiosInstance';
import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    }
  })
}

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
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      console.log(res);
      // Need to fix the payload.  Once backend is updated we should get back username, email, image url, and maybe userID
      return dispatch({ type: LOGIN_SUCCESS, payload: res })
    })
    .catch(error => {
      console.log(error);
      console.log(error.response)
      console.log(error.message)
      //need to figure out what message we're going to display.
      dispatch({ type: LOGIN_FAILURE, payload: error.response })
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

export const BEGIN_ADD_JOKE = 'BEGIN_ADD_JOKE';
export const ADD_JOKE_SUCCESS = 'ADD_JOKE_SUCCESS';
export const ADD_JOKE_FAILURE = 'ADD_JOKE_FAILURE';

export const addJoke = joke => dispatch => {
  dispatch({ type: BEGIN_ADD_JOKE });

  axiosWithAuth()
    .post('https://dad-jokes-2019.herokuapp.com/api/auth/jokes', {
      'punchline': joke.punchline,
      'jokes_description': joke.description
    })
    .then(res => {
      console.log(res);
      return dispatch({ type: ADD_JOKE_SUCCESS, payload: res.data })
    })
    .catch(error => {
      console.log(error);
      console.log(error.response)
      console.log(error.message)
      //need to figure out what message we're going to display.
      // dispatch({ type: ADD_JOKE_FAILURE , payload: error.response })
    });
}

export const BEGIN_GET_USER_INFO = 'BEGIN_GET_USER_INFO';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const getUserInfo = () => dispatch => {
  dispatch({ type: BEGIN_GET_USER_INFO });

  const id = localStorage.getItem('id')
  axiosWithAuth()
    .get(`https://dad-jokes-2019.herokuapp.com/api/auth/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
      console.log(error.response)
      console.log(error.message)
      //need to figure out what message we're going to display.
      // dispatch({ type: GET_USER_INFO_FAILURE , payload: error.response })
    });
};

export const BEGIN_UPDATE_JOKE = 'BEGIN_UPDATE_JOKE';
export const UPDATE_JOKE_SUCCESS = 'UPDATE_JOKE_SUCCESS';
export const UPDATE_JOKE_FAILURE = 'UPDATE_JOKE_FAILURE';

export const updateJoke = (id, joke) => dispatch => {
  dispatch({ type: BEGIN_UPDATE_JOKE });

  axiosWithAuth()
  .put(`https://dad-jokes-2019.herokuapp.com/api/auth/jokes/${id}`, {
    'punchline': joke.punchline,
    'jokes_description': joke.description
  })
  .then(res => {
    console.log(res);
    dispatch({ type: UPDATE_JOKE_SUCCESS, payload: res.data })
  })
  .catch(error => {
    console.log(error);
    console.log(error.response)
    console.log(error.message)
    //need to figure out what message we're going to display.
    // dispatch({ type: UPDATE_JOKE_FAILURE , payload: error.response })
  });
}

export const BEGIN_DELETE_JOKE = 'BEGIN_DELETE_JOKE';
export const DELETE_JOKE_SUCCESS = 'DELETE_JOKE_SUCCESS';
export const DELETE_JOKE_FAILURE = 'DELETE_JOKE_FAILURE';

export const deleteJoke = (id) => dispatch => {
  dispatch({ type: BEGIN_DELETE_JOKE })

  axios
  .delete(`https://dad-jokes-2019.herokuapp.com/api/auth/jokes/${id}`)
  .then(res => {
    console.log(res);
    dispatch({ type: DELETE_JOKE_SUCCESS, payload: id })
  })
  .catch(error => {
    console.log(error);
    console.log(error.response)
    console.log(error.message)
    //need to figure out what message we're going to display.
    // dispatch({ type: DELETE_JOKE_FAILURE , payload: error.response })
  });
}

export const BEGIN_LOGOUT = "BEGIN_LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const logoutUser = () => dispatch => {
  dispatch({ type: BEGIN_LOGOUT });
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  dispatch({ type: LOGOUT_SUCCESS  })
}