import {
  START_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/userAction';

const initState = {
  user: {
    name: '',
    id: null,
    email: '',
    image_url: '',//this is where we will put default image
  },

  jokes: [
    {
      id: 0,
      joke: 'joke1',
      punchline: 'punchline1'
    },
    {
      id: 1,
      joke: 'joke2',
      punchline: 'punchline2'
    },
    {
      id: 2,
      joke: 'joke3',
      punchline: 'punchline3'
    },
    {
      id: 3,
      joke: 'joke4',
      punchline: 'punchline4'
    },
    {
      id: 4,
      joke: 'joke5',
      punchline: 'punchline5'
    }
  ],

  isAuthenticating: false,
  loggedIn: false,
  authenticationError: '',


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

    default: 
      return { 
      ...state
    }
  }
};

