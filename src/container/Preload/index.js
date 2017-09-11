import React from 'react';
import { View, Text, Spinner } from 'native-base';
import styles from './styles';

const Preload = () =>
  <View style={styles.container}>
    <Spinner />
    <Text>Loading...</Text>
  </View>;
export default Preload;
