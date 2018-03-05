import {
  NAV_RESET,
  NAV_PUSH,
  NAV_POP,
  MARK_REQUEST_PENDING,
  MARK_REQUEST_SUCCESS,
  MARK_REQUEST_CANCELLED,
  MARK_REQUEST_FAILED,
  TOAST_SET,
  TOAST_CLEAR,
  DRAWER_OPEN,
  DRAWER_CLOSE,
  MODAL_OPEN,
  MODAL_CLOSE,
  INVOKE_CALLBACK,
  GALLERY_OPEN,
  GALLERY_CLOSE,
  BROWSER_OPEN,
  BROWSER_CLOSE
} from '../../constants/types';

/**
 * NAVIGATE
 */
export const navigate = (routeName, params, reset = false) => {
  const action = {
    type: reset ? NAV_RESET : NAV_PUSH,
    payload: { routeName }
  };
  if (typeof params === 'object') action.payload.params = params;
  return action;
};
export const forwardTo = (routeName, params) =>
  navigate(routeName, params, false);
export const resetTo = (routeName, params) => navigate(routeName, params, true);
export const goBack = () => ({ type: NAV_POP, payload: null });

/**
 * REQUEST
 */
export const markRequestPending = key => ({
  type: MARK_REQUEST_PENDING,
  meta: { key }
});

export const markRequestSuccess = key => ({
  type: MARK_REQUEST_SUCCESS,
  meta: { key }
});

export const markRequestCancelled = ({ type, reason }, key) => ({
  type: MARK_REQUEST_CANCELLED,
  payload: `${type}: ${reason || 'called'}`,
  meta: { key }
});

export const markRequestFailed = (reason, key) => ({
  type: MARK_REQUEST_FAILED,
  payload: reason,
  meta: { key }
});

/**
 * TOAST
 */
export const setToast = (
  message,
  level = 'info',
  duration = 3000,
  position = 'bottom'
) => ({
  type: TOAST_SET,
  payload: {
    message,
    level,
    duration,
    position
  }
});

export const clearToast = () => ({ type: TOAST_CLEAR });

/**
 * DRAWER
 */
export const openDrawer = () => ({ type: DRAWER_OPEN });
export const closeDrawer = () => ({ type: DRAWER_CLOSE });

// export const search = payload => ({
//   type: 'app/search',
//   payload
// });

/**
 * MODAL
 */
export const openModal = () => ({ type: MODAL_OPEN });
export const closeModal = () => ({ type: MODAL_CLOSE });

// INVOKE
export const invokeCallback = (callback, ...args) => ({
  type: INVOKE_CALLBACK,
  payload: callback && callback.call(null, ...args)
});

/**
 * GALLERY
 */
export const openGallery = (images = [], playingIndex = 0) => ({
  type: GALLERY_OPEN,
  payload: { images, playingIndex }
});
export const closeGallery = () => ({ type: GALLERY_CLOSE });

/**
 * BROWSER
 */
export const openBrowser = payload => ({ type: BROWSER_OPEN, payload });
export const closeBrowser = () => ({ type: BROWSER_CLOSE });
