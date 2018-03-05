import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, TouchableOpacity, BackHandler, Platform } from 'react-native';
import { Text, Button } from 'native-base';
// for convenient, we can just import one
import { clearToast } from '../../store/actions/common';
import { getToast } from '../../store/selectors/common';
import material from '../../theme/variables/material';

@connect(state => ({ toast: getToast(state) }), { clearToast })
export default class extends PureComponent {
  constructor(props) {
    super(props);

    this.hander = BackHandler.addEventListener('hardwareBackPress', () =>
      this._closeToast(100)
    );
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    BackHandler.removeEventListener(this.hander);
  }

  _closeToast = duration => {
    clearTimeout(this.timer);
    if (duration > 0) {
      this.timer = setTimeout(() => this.props.clearToast(), duration);
    }
  };

  renderToastMessage(message, levelProps) {
    return (
      <Button
        full
        iconRight
        {...levelProps}
        onPress={() => this._closeToast(100)}
      >
        <Text style={{ color: '#fff' }}>{message}</Text>
      </Button>
    );
  }

  renderToastView(message) {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ alignSelf: 'center', backgroundColor: 'transparent' }}
        onPress={() => this._closeToast(100)}
      >
        {message}
      </TouchableOpacity>
    );
  }

  render() {
    // we can display close all or something
    // for this to show toast only when cross form, for update call Toast.show directly
    if (!this.props.toast) return null;
    const { position, message, level, duration } = this.props.toast;
    this._closeToast(duration);
    const levelProps = { [level]: true };
    let justify;
    switch (position) {
      case 'top':
        justify = {
          left: 0,
          right: 0,
          ...Platform.select({
            android: {
              top: 0
            },
            ios: {
              top: 22
            }
          })
        };
        break;
      case 'center':
        justify = {
          left: 0,
          right: 0,
          top: material.deviceHeight / 2
        };
        break;
      default:
        justify = {
          left: 0,
          right: 0,
          bottom: 0
        };
        break;
    }
    return (
      <View
        style={{
          position: 'absolute',
          ...justify,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {typeof message === 'string'
          ? this.renderToastMessage(message, levelProps)
          : this.renderToastView(message)}
      </View>
    );
  }
}
