import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  BEGIN_GET_JOKE,
  GET_JOKE_FAILURE,
  GET_JOKE_SUCCESS,
  BEGIN_ADD_JOKE,
  ADD_JOKE_SUCCESS,
  ADD_JOKE_FAILURE
} from '../actions/userAction';

const initState = {
  user: {
    name: '',
    id: null,
    email: '',
    img_url: '',//this is where we will put default image
  },

  jokes: [],

  isAuthenticating: false,
  loggedIn: false,
  authenticationError: '',

  isFetchingJokes: false,
  jokesError: ''
}

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state, 
        isAuthenticating: true
      }

    case LOGIN_SUCCESS: 
      return {
        ...state,
        isAuthenticating: false,
        loggedIn: true,
        user: {
          ...state.user,
          name: action.payload.name,
          id: action.payload.id,
          email: action.payload.email,
          img_url: action.payload.img_url
        }
      }

    case LOGIN_FAILURE:
      return {
        ...state,
        authenticationError: action.payload,
        isAuthenticating: false
      }

    case BEGIN_GET_JOKE: 
      return {
        ...state,
        isFetchingJokes: true
      }

    case GET_JOKE_SUCCESS:
      return {
        ...state,
        isFetchingJokes: false,
        jokes: [...action.payload]
      }
    
    case GET_JOKE_FAILURE:
      return {
        ...state,
        isFetchingJokes: false,
        jokesError: action.payload
      }

    case BEGIN_ADD_JOKE:
      return {
        ...state,
        isFetchingJokes: true
      }

    case ADD_JOKE_SUCCESS:
      return {
        ...state,
        isFetchingJokes: false,
        jokes: [...state.jokes, action.payload]
      }

    case ADD_JOKE_FAILURE:
      return {
        ...state,
        isFetchingJokes: false,
        jokesError: action.payload
      }
      

    default: 
      return { 
      ...state
    }
  }
};

