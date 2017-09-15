import React from 'react';
import { FlatList, View } from 'react-native';
import { Container, Text, Button } from 'native-base';
import Icon from '~/elements/Icon';
import Product from './Product';
import data from './mockData.json';

export default class extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <Container>
        {data.map((section, index) => (
          <View key={index}>
            <Text>{section.title}</Text>
            <FlatList
              horizontal
              pagingEnabled
              data={section.data}
              renderItem={({ item }) => <Product item={item} key={item.id} />}
              keyExtractor={item => item.id}
              contentContainerStyle={{
                backgroundColor: '#2d2d2d',
                width: '100%',
                height: 200,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          </View>
        ))}
      </Container>
    );
  }
}
