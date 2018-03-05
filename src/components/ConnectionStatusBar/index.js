import React from 'react';
import PropTypes from 'prop-types';
import { View, NetInfo, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class ConnectionStatusBar extends React.Component {
  static displayName = 'ConnectionStatusBar';

  static propTypes = {
    label: PropTypes.string,
    allowDismiss: PropTypes.bool,
    onConnectionChange: PropTypes.func,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    textStyle: PropTypes.object
  };

  static defaultProps = {
    label: 'No internet connection',
    allowDismiss: true,
    style: null
  };

  constructor(props) {
    super(props);
    this.onConnectionChange = this.onConnectionChange.bind(this);
    this.state = {
      isCancelled: false,
      isConnected: true
    };
    this.getInitialConnectionState();
  }

  componentDidMount() {
    this.netInfoListener = NetInfo.addEventListener('connectionChange', this.onConnectionChange);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  componentWillUnmount = () => NetInfo.removeEventListener(this.netInfoListener);

  onConnectionChange(state) {
    const isConnected = this.isStateConnected(state);
    if (isConnected !== this.state.isConnected) {
      this.setState({
        isConnected,
        isCancelled: false
      });
      if (this.props.onConnectionChange) {
        this.props.onConnectionChange(isConnected, false);
      }

      if (!isConnected) {
        setTimeout(() => {
          this.getInitialConnectionState();
        }, 3000);
      }

      if (!isConnected && typeof ConnectionStatusBar.onConnectionLost === 'function') {
        ConnectionStatusBar.onConnectionLost();
      }
    }
  }

  async getInitialConnectionState() {
    const state = await NetInfo.getConnectionInfo();
    const isConnected = this.isStateConnected(state);
    this.state.isConnected !== isConnected && this.setState({ isConnected });
    this.props.onConnectionChange && this.props.onConnectionChange(isConnected, true);
  }

  isStateConnected = state => state.type !== 'none';

  render = () => {
    const { style, textStyle } = this.props;
    if (this.state.isConnected || this.state.isCancelled) {
      return false;
    }

    return (
      <View style={[styles.container, style]}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Text style={[styles.text, textStyle]}>{this.props.label}</Text>
          {this.props.allowDismiss && (
            <TouchableOpacity
              style={styles.xContainer}
              onPress={() => this.setState({ isCancelled: true })}
            >
              <Text style={[styles.x, textStyle]}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };
}
