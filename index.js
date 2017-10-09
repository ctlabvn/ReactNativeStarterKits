/**
 * @flow
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from '~/App';
import Preload from '~/container/Preload';
import { configStore } from '~/store';
import { resetTo } from '~/store/actions/common';
import { initRoute, authorizedRoute } from '~/constants/routes';

class Root extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    configStore(store => {
      const firstRoute = store.getState().auth.loggedIn ? authorizedRoute : initRoute;
      store.dispatch(resetTo(firstRoute));
      this.store = store;
      this.setState({ isLoading: false });
    });
  }

  shouldComponentUpdate(nextProps, { isLoading }) {
    return this.state.isLoading !== isLoading;
  }

  store = null;

  render() {
    if (!this.store || this.state.isLoading) {
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
