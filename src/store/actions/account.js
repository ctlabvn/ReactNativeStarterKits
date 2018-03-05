import {
  ACC_GET_PROFILE,
  ACC_REPLACE_PROFILE,
  ACC_UPDATE_PROFILE,
  ACC_SEARCH_PROFILE,
  ACC_GET_USER_INFO
} from '../../constants/types';

export const getProfile = (...args) => ({ type: ACC_GET_PROFILE, args });
export const replaceProfile = data => ({
  type: ACC_REPLACE_PROFILE,
  payload: data
});
export const updateProfile = (...args) => ({ type: ACC_UPDATE_PROFILE, args });
export const searchProfile = (...args) => ({ type: ACC_SEARCH_PROFILE, args });
export const getUserInfo = (...args) => ({ type: ACC_GET_USER_INFO, args });
