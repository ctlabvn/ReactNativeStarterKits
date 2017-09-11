import { API } from './common';

export default {
  getProfile: (params = {}) => API.get('/users/1', params)
};
