import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import Image from '../../components/Image';

export default class Item extends React.Component {
  static propTypes = {
    uri: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    onPress: PropTypes.func
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { onPress, uri, style, index } = this.props;
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress(index)}>
        <Image source={{ uri }} resizeMode="cover" style={style} />
      </TouchableOpacity>
    );
  }
}
