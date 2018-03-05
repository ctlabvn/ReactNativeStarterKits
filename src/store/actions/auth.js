import {
  APP_LOGIN,
  APP_LOGOUT,
  APP_SET_AUTH_STATE,
  APP_SAVE_LOGGED_USER,
  APP_SAVE_REFRESH_TOKEN,
  APP_REMOVE_LOGGED_USER,
  APP_SAVE_SOCIAL_TYPE
} from '../../constants/types';

export const login = (...args) => ({ type: APP_LOGIN, args });
export const logout = (...args) => ({ type: APP_LOGOUT, args });
/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export const setAuthState = newAuthState => ({
  type: APP_SET_AUTH_STATE,
  payload: newAuthState
});
export const saveLoggedUser = data => ({
  type: APP_SAVE_LOGGED_USER,
  payload: { user: data }
});
// data: {accessToken...}
export const saveRefreshToken = data => ({
  type: APP_SAVE_REFRESH_TOKEN,
  payload: data
});
/**
 * Tells the app we want to log out a user
 */
export const removeLoggedUser = () => ({ type: APP_REMOVE_LOGGED_USER });
export const saveSocialType = data => ({
  type: APP_SAVE_SOCIAL_TYPE,
  payload: data
});
