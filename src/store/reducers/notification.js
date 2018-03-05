import {
  NOTIFICATION_RECEIVED,
  NOTIFICATION_REPLACE,
  NOTIFICATION_THROW
} from '../../constants/types';

const init = {
  hasMore: true,
  start: 0,
  take: 10,
  data: [],
  unRead: 0
};
export default (state = init, { type, payload }) => {
  switch (type) {
    // we can store current page? for paging...
    case NOTIFICATION_REPLACE: {
      const noti = { ...payload, dateTime: new Date() };
      state.data.unshift(noti);
      return { ...state };
    }
    case NOTIFICATION_RECEIVED:
      return { ...state, unRead: 1 };
    case NOTIFICATION_THROW:
      return { ...state, unRead: 0 };
    default:
      return state;
  }
};
