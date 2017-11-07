import React from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import Image from '~/components/Image';
import material from '~/theme/variables/material';
import { create } from 'apisauce';
import configs from '~/constants/configs';

const THUMB_WIDTH = material.deviceWidth * 0.3;
const api = create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${configs.appId}`
  }
});

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.currentOffset = 0;
    this.state = {
      images: [],
      isLoading: false,
      page: 1,
      per_page: 21,
      order_by: 'latest'
    };
  }

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
        })
        .catch(e => this.setState({ isLoading: false }, () => console.log(e)));
    });
  }

  componentWillFocus() {
    this.dataRef.scrollToOffset({ offset: this.currentOffset + 1, animated: false });
  }

  componentWillBlur() {
    this.dataRef.scrollToOffset({ offset: this.currentOffset - 1, animated: false });
  }

  render() {
    return (
      <Container>
        <FlatList
          ref={el => (this.dataRef = el)}
          onScroll={e => (this.currentOffset = e.nativeEvent.contentOffset.y)}
          data={this.state.images}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.urls.small }}
              resizeMode="cover"
              style={{ width: THUMB_WIDTH, height: THUMB_WIDTH }}
            />
          )}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}

export default Gallery;
