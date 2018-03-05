import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import PhotoView from 'react-native-photo-view';
import * as Progress from 'react-native-progress';
import material from '../../theme/variables/material';
import styles from './styles';

export default class Item extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  state = {
    loaded: false
  };

  shouldComponentUpdate({ item }, { loaded }) {
    return this.state.loaded !== loaded || this.state.item !== item;
  }

  render() {
    const { item } = this.props;
    return (
      <View>
        <PhotoView
          source={{ uri: item.full }}
          showsVerticalScrollIndicator
          showsHorizontalScrollIndicator
          scale={1}
          minimumZoomScale={1}
          maximumZoomScale={3}
          fadeDuration={100}
          androidZoomTransitionDuration={100}
          onLoadEnd={() => this.setState({ loaded: true })}
          androidScaleType="fitCenter"
          style={{
            width: material.deviceWidth,
            height: material.deviceHeight,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000'
          }}
        />
        {!this.state.loaded && (
          <View style={styles.overlay}>
            <Progress.CircleSnail
              size={50}
              color={['#FF5900', '#fff', material.primaryColor]}
              thickness={3}
            />
          </View>
        )}
      </View>
    );
  }
}
