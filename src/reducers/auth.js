import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  PROFILE_SUCCESS,
  LOGOUT
} from './types';

const token = localStorage.getItem('token');

const initialState = {
  isLoggedIn: false,
  isFetched: true,
  token: token,
  profile: {
    firstName: '',
    lastName: '',
    username: '',
    phone: '',
    role: ''
  }
};

function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS: {
      localStorage.setItem('token', payload.token);

      return {
        ...state,
        isLoggedIn: true,
        isFetched: false,
        token: payload.token
      };
    }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        token: null
      };
    case PROFILE_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isFetched: true,
        profile: {
          firstName: payload.firstName,
          lastName: payload.lastName,
          username: payload.username,
          phone: payload.phone,
          role: payload.role.name
        }
      }
    }
    case LOGOUT: {
      localStorage.removeItem('token');

      return {
        ...initialState
      };
    }
    default:
      return state;
  }
}

export default  auth;