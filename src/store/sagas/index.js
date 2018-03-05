import { fork, all } from 'redux-saga/effects';
import auth from './auth';
import account from './account';
// import notification from './notification';

const rootSaga = function* () {
  yield all([
    ...auth.map(watcher => fork(watcher)),
    ...account.map(watcher => fork(watcher))
    // ...notification.map(watcher => fork(watcher))
  ]);
};
export default rootSaga;
