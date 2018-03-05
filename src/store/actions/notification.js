import {
  NOTIFICATION_GET,
  NOTIFICATION_RECEIVED,
  NOTIFICATION_REPLACE,
  NOTIFICATION_THROW
} from '../../constants/types';

export const getNotification = (...args) => ({
  type: NOTIFICATION_GET,
  args
});

export const replaceNotification = data => ({
  type: NOTIFICATION_REPLACE,
  payload: data
});

export const receiveNotification = () => ({
  type: NOTIFICATION_RECEIVED
});

export const throwNotification = () => ({
  type: NOTIFICATION_THROW
});
