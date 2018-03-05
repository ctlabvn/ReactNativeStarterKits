import { takeLatest, all, put } from 'redux-saga/effects';
import { APP_LOGIN, APP_LOGOUT } from '../../constants/types';
import auth from '../api/auth';
import { setToast, resetTo, closeDrawer } from '../actions/common';
import {
  setAuthState,
  saveLoggedUser,
  removeLoggedUser
} from '../actions/auth';
import { createRequestSaga } from './common';

const requestLogin = createRequestSaga({
  request: auth.login,
  key: 'login',
  cancel: APP_LOGOUT,
  success: [
    data => saveLoggedUser(data),
    () => setAuthState(true),
    () => resetTo('home'),
    () => setToast('Logged successfully!!!', 'info', 250, 'center')
  ],
  failure: [() => setToast("Couldn't login", 'error')]
});

const requestLogout = function*() {
  yield all([
    yield put(removeLoggedUser()),
    yield put(setAuthState(false)),
    yield put(closeDrawer()),
    yield put(resetTo('login')),
    yield put(setToast('Logout successfully!!!'))
  ]);
};

// root saga reducer
export default [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  // other watcher may be background workers
  function* fetchWatcher() {
    // use takeLatest instead of take every, so double click in short time will not trigger more fork
    yield all([
      takeLatest(APP_LOGIN, requestLogin),
      takeLatest(APP_LOGOUT, requestLogout)
    ]);
  }
];
