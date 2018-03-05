import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({
  diff: false,
  duration: true,
  collapsed: (getState, { type }) => type !== 'MARK_REQUEST_FAILED',
  level: {
    prevState: () => 'log',
    action: ({ type }) => 'info',
    error: () => 'error',
    nextState: () => 'log'
  },
  // we use this for better debug the status of request
  titleFormatter: (action, time, took) => {
    let msg = `action @ ${time} ${action.type}`;
    if (/^MARK_REQUEST_.*$/.test(action.type)) {
      msg += `[${action.meta.key}]`;
    }
    msg += ` (in ${took.toFixed(2)} ms)`;
    return msg;
  },
  colors: {
    prevState: () => '#777777',
    action: ({ type }) =>
      type === 'MARK_REQUEST_FAILED' ? '#d9534f' : '#5bc0de',
    nextState: () => '#449d44'
  },
  // not special log message
  predicate: (getState, { type }) => type.indexOf('@@') === -1
});

export default loggerMiddleware;
