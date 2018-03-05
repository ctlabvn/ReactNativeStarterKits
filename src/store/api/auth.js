import { API } from './common';

export default {
  login: (params = {}) => API.get('users/1', params),
  getProfile: (params = {}) => API.get('users/1', params)
};
