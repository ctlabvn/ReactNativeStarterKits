import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import Preload from './container/Preload';
import { configStore } from './store';
import { forwardTo } from './store/actions';
import { initRoute, authorizedRoute } from './constants/routes';

class Root extends React.Component {
  constructor(props) {
    super(props);

    configStore(store => {
      const firstRoute = store.getState().auth.loggedIn ? authorizedRoute : initRoute;
      store.dispatch(forwardTo(firstRoute, true));
      this.store = store;
      this.forceUpdate();
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  store = null;

  render() {
    if (!this.store) {
      return <Preload />;
    }
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReactNativeStarterKits', () => Root);
