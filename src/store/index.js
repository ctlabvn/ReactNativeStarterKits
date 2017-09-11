import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';
import rootSaga from './sagas';

const initState = {};
const saga = createSagaMiddleware();
const middlewares = [saga];
if (__DEV__) {
  !window.devToolsExtension && middlewares.push(require('./logger').default);
  GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}
export const configStore = callback => {
  const enhancer = [autoRehydrate(), applyMiddleware(...middlewares)];
  window.devToolsExtension && enhancer.push(window.devToolsExtension());

  const store = createStore(reducers, initState, compose(...enhancer));
  saga.run(rootSaga);
  persistStore(
    store,
    {
      storage: AsyncStorage,
      keyPrefix: 'newproject',
      debounce: 500,
      blacklist: ['form', 'ui', 'requests', 'toast']
    },
    () => callback(store)
  );
};
