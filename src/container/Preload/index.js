import React from 'react';
import { View, Text } from 'native-base';
import * as Progress from 'react-native-progress';
import styles from './styles';

const Preload = ({ style, color = ['red', 'green', 'blue'] }) => (
  <View style={[styles.container, style && style]}>
    <Progress.CircleSnail color={color} />
    <Text style={{ color: '#fff' }}>Loading...</Text>
  </View>
);
export default Preload;
