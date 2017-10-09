import React from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import Image from 'react-native-fast-image';
import material from '~/theme/variables/material';
import { create } from 'apisauce';
import configs from '~/constants/configs';

const THUMB_WIDTH = material.deviceWidth * 0.33;
const api = create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${configs.appId}`
  }
});

class Gallery extends React.PureComponent {
  state = {
    images: [],
    isLoading: false,
    page: 1,
    per_page: 21,
    order_by: 'latest'
  };

  componentDidMount() {
    this.setState({ isLoading: true }, () => {
      api
        .get('photos', {
          page: this.state.page,
          per_page: this.state.per_page,
          order_by: this.state.order_by
        })
        .then(result => {
          this.setState({
            isLoading: false,
            images: result.data
          });
          console.log(result);
        })
        .catch(e => this.setState({ isLoading: false }, () => console.log(e)));
    });
  }

  componentWillFocus() {
    console.log('componentWillFocus');
  }

  componentWillBlur() {
    console.log('componentWillBlur');
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.images}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.urls.small }}
              resizeMode={Image.resizeMode.cover}
              style={{ width: THUMB_WIDTH, height: THUMB_WIDTH }}
            />
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}

export default Gallery;
