import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import {
  Icon as IconNB,
  mapPropsToStyleNames,
  connectStyle
} from 'native-base';
import Icomoon, { glyphMap } from '../Icomoon';

@connectStyle('NativeBase.Icon', {}, mapPropsToStyleNames)
export default class extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired
  };

  renderIcon() {
    const { name } = this.props;
    // fallback to material?
    return glyphMap[name] ? (
      <Icomoon {...this.props} />
    ) : (
      <IconNB {...this.props} />
    );
  }

  render() {
    const { onPress } = this.props;
    // if do not have onPress, should make clickable from parent
    return onPress ? (
      <TouchableWithoutFeedback onPress={onPress}>
        {this.renderIcon()}
      </TouchableWithoutFeedback>
    ) : (
      this.renderIcon()
    );
  }
}
