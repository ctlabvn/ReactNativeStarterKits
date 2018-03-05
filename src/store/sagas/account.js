import { takeLatest, all } from 'redux-saga/effects';
import account from '../api/account';
import { createRequestSaga } from '../sagas/common';
import { setToast } from '../actions/common';
import { replaceProfile } from '../actions/account';

const requestGetProfile = createRequestSaga({
  request: account.getProfile,
  key: 'getProfile',
  success: [data => replaceProfile(data)],
  failure: [() => setToast("Couldn't get profile", 'error')]
});

const requestUpdateProfile = createRequestSaga({
  request: account.updateProfile,
  key: 'updateProfile',
  success: [
    //(data, {args:[token]}) => getProfile(token)
  ],
  failure: [() => setToast("Couldn't update profile", 'error')]
});

const requestGetUserInfo = createRequestSaga({
  request: account.getUserInfo,
  key: 'getUserInfo',
  success: [],
  failure: [() => setToast("Couldn't get profile", 'error')]
});

// root saga reducer
export default [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  function* fetchWatcher() {
    // use takeLatest instead of take every,
    // so double click in short time will not trigger more fork
    yield all([
      takeLatest('app/getProfile', requestGetProfile),
      takeLatest('app/updateProfile', requestUpdateProfile),
      takeLatest('app/getUserInfo', requestGetUserInfo)
    ]);
  }
];
