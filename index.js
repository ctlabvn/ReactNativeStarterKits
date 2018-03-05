import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { isIphoneX } from 'react-native-iphone-x-helper';
import App from './src/App';
import Preload from './src/container/Preload';
import { configStore } from './src/store';
import { resetTo } from './src/store/actions/common';
import material from './src/theme/variables/material';

const SafeView = ({ children }) => {
  const isiphoneX = isIphoneX();
  if (isiphoneX) {
    return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
  }
  return children;
};

class Root extends React.Component {
  state = {
    isLoading: true
  };

  componentDidMount() {
    configStore(store => {
      store.dispatch(resetTo('markets'));
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
        <SafeView>
          <Preload />
        </SafeView>
      );
    }
    return (
      <Provider store={this.store}>
        <SafeView>
          <App />
        </SafeView>
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
console.disableYellowBox = true;

AppRegistry.registerComponent('starterkit', () => Root);
