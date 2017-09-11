import React, { PureComponent } from 'react';
import { View, Modal, TouchableOpacity } from 'react-native';
import { Text, Button } from 'native-base';
import { connect } from 'react-redux';
// for convenient, we can just import one
import { clearToast } from '~/store/actions/common';
import { getToast } from '~/store/selectors/common';

@connect(
  state => ({
    toast: getToast(state)
  }),
  { clearToast }
)
export default class extends PureComponent {
  componentWillMount() {
    clearTimeout(this.timer);
  }

  _closeToast = duration => {
    clearTimeout(this.timer);
    if (duration > 0) {
      this.timer = setTimeout(() => this.props.clearToast(), duration);
    }
  };

  renderToastMessage(message, levelProps) {
    return (
      <Button full iconRight {...levelProps} onPress={() => this._closeToast(100)}>
        <Text style={{ color: '#fff' }}>
          {message}
        </Text>
      </Button>
    );
  }

  renderToastView(message) {
    return (
      <TouchableOpacity
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
    if (!this.props.toast) return false;
    const { position, message, level, duration } = this.props.toast;
    this._closeToast(duration);
    const levelProps = { [level]: true };
    const justifyContent =
      position === 'top'
        ? 'flex-start'
        : position === 'bottom' ? 'flex-end' : position === 'center' ? 'center' : 'flex-start';
    return (
      <Modal
        animationType={position === 'bottom' ? 'slide' : 'fade'}
        transparent
        onRequestClose={() => this._closeToast(100)}
      >
        <View
          style={{
            flex: 1,
            justifyContent
          }}
        >
          {typeof message === 'string'
            ? this.renderToastMessage(message, levelProps)
            : this.renderToastView(message)}
        </View>
      </Modal>
    );
  }
}
