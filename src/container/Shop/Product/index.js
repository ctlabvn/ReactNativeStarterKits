import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { View, Text } from 'native-base';

export default class extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { item } = this.props;
    return (
      <View style={{ backgroundColor: '#2d2d2d' }}>
        <Image
          source={{ uri: item.images[0] }}
          style={{ width: 200, height: 200, borderRadius: 5 }}
        />
        <Text style={{ color: '#fff' }}>{item.price}</Text>
      </View>
    );
  }
}
