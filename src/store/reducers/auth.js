import { REHYDRATE } from 'redux-persist/constants';
import {
  APP_SET_AUTH_STATE,
  APP_REMOVE_LOGGED_USER,
  APP_SAVE_LOGGED_USER,
  APP_SAVE_REFRESH_TOKEN,
  APP_SAVE_SOCIAL_TYPE
} from '../../constants/types';

const init = {
  loggedIn: false,
  token: null,
  name: null,
  email: null,
  socialType: 'facebook'
};

export default (state = init, { type, payload }) => {
  switch (type) {
    case REHYDRATE: {
      const incomming = payload.auth;
      return incomming || state;
    }
    case APP_SET_AUTH_STATE:
      return { ...state, loggedIn: payload || false };
    case APP_SAVE_LOGGED_USER: {
      console.log('APP_SAVE_LOGGED_USER', payload);
      const { name, email } = payload;
      return { ...state, loggedIn: payload.loggedIn, name, email };
    }
    case APP_SAVE_REFRESH_TOKEN:
      return { ...state, token: { ...state.token, ...payload } };
    case APP_REMOVE_LOGGED_USER:
      return { ...state, ...init };
    case APP_SAVE_SOCIAL_TYPE:
      return { ...state, socialType: payload };
    default:
      return state;
  }
};
