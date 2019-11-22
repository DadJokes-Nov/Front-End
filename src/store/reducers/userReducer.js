import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  BEGIN_GET_JOKE,
  GET_JOKE_FAILURE,
  GET_JOKE_SUCCESS,
  BEGIN_ADD_JOKE,
  ADD_JOKE_SUCCESS,
  ADD_JOKE_FAILURE,
  BEGIN_GET_USER_INFO,
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
  BEGIN_DELETE_JOKE,
  DELETE_JOKE_SUCCESS,
  DELETE_JOKE_FAILURE,
  UPDATE_JOKE_SUCCESS,
  UPDATE_JOKE_FAILURE,
  BEGIN_UPDATE_JOKE,
  BEGIN_LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESS
} from '../actions/userAction';

const initState = {
  user: {
    name: '',
    id: null,
    email: '',
    img_url: '',
  },

  jokes: [],

  isAuthenticating: false,
  loggedIn: false,
  authenticationError: '',

  isFetchingJokes: false,
  jokesError: '',
  userInfoError: '',
  jokeSuccess: ''
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
        jokeSuccess: 'joke was added',
        jokes: [...state.jokes, action.payload]
      }

    case ADD_JOKE_FAILURE:
      return {
        ...state,
        isFetchingJokes: false,
        jokesError: action.payload
      }
    
    case BEGIN_UPDATE_JOKE:
      return {
        ...state,
        isFetchingJokes: true
      }

    case UPDATE_JOKE_SUCCESS:
      return {
        ...state,
        isFetchingJokes: false,
        jokes: state.jokes.map(joke => {
          if (joke.id === action.payload.id) {
            return action.payload
          } else {
            return joke
          }
        })
      }

    case UPDATE_JOKE_FAILURE:
      return {
        ...state,
        isFetchingJokes: false
      }

    case BEGIN_GET_USER_INFO:
      return {
        ...state,
        isFetchingJokes: true
      }

    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isFetchingJokes: false,
        loggedIn: true,
        user: {
          name: action.payload.name,
          id: action.payload.id,
          email: action.payload.email,
          img_url: action.payload.img_url
        }
      } 

    case GET_USER_INFO_FAILURE:
      return {
        ...state,
        isFetchingJokes: false,
        userInfoError: action.payload
      }

    case BEGIN_DELETE_JOKE:
      return {
        ...state,
        isFetchingJokes: true
      }
    case DELETE_JOKE_SUCCESS:
      return {
        ...state,
        isFetchingJokes: false,
        jokes: state.jokes.filter(joke => joke.id !== action.payload) 
      }

    case DELETE_JOKE_FAILURE:
      return {
        ...state,
        isFetchingJokes: false,
        userInfoError: action.payload
      }

    case BEGIN_LOGOUT:
      return {
        ...state,
        isFetchingJokes: true,
      }

    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetchingJokes: false,
        userInfoError: action.payload
      }

    case LOGOUT_SUCCESS:
      return {
        ...state,
        userInfoError: action.payload,
        user: initState.user,
        isFetchingJokes: false,
        loggedIn: false
      }

    default: 
      return { 
      ...state
    }
  }
};

