import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from './reducers';
import rootSaga from './sagas';

const saga = createSagaMiddleware();
const middlewares = [saga];
// if (__DEV__) {
//   !window.devToolsExtension && middlewares.push(require('./logger').default);
//   GLOBAL.XMLHttpRequest =
//     GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
// }
export const configStore = callback => {
  const enhancer = [applyMiddleware(...middlewares)];
  window.devToolsExtension && enhancer.push(window.devToolsExtension());

  const persistedReducer = persistReducer(
    {
      storage: AsyncStorage,
      key: 'starterket',
      debounce: 500,
      blacklist: ['form', 'ui', 'requests', 'toast']
    },
    reducers
  );
  const store = createStore(persistedReducer, {}, compose(...enhancer));
  saga.run(rootSaga);
  persistStore(store, null, () => callback(store));
};
