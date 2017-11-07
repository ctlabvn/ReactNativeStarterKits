/**
 * @flow
 */
import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import App from '~/App';
import Preload from '~/container/Preload';
import { configStore } from '~/store';
import { resetTo } from '~/store/actions/common';
import material from './src/theme/variables/material';

class Root extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    configStore(store => {
      store.dispatch(resetTo('home'));
      this.store = store;
      this.setState({ isLoading: false }, () => this.forceUpdate());
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  store = null;

  render() {
    if (!this.store || this.state.isLoading) {
      return (
        <SafeAreaView style={styles.safeArea}>
          <Preload />
        </SafeAreaView>
      );
    }
    return (
      <Provider store={this.store}>
        <SafeAreaView style={styles.safeArea}>
          <App />
        </SafeAreaView>
      </Provider>
    );
  }
}
const styles = {
  safeArea: {
    flex: 1,
    backgroundColor: material.safeAreaBackground
  }
};
AppRegistry.registerComponent('ReactNativeStarterKit', () => Root);
