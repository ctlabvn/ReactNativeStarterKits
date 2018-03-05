import { create } from 'apisauce';
import React from 'react';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import material from '../../theme/variables/material';
import configs from '../../constants/configs';
import Item from './Item';

const THUMB_WIDTH = material.deviceWidth * 0.3;
const api = create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${configs.appId}`
  }
});

export default class Gallery extends React.PureComponent {
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
          // process data before save to state
          const images = result.data.map((img, index) => ({
            small: img.urls.small,
            full: img.urls.full,
            created_at: img.created_at,
            likes: img.likes,
            id: index
          }));

          this.setState({
            isLoading: false,
            images
          });
        })
        .catch(e => this.setState({ isLoading: false }, () => console.log(e)));
    });
  }

  componentWillFocus() {
    this.dataRef.scrollToOffset({
      offset: this.currentOffset + 1,
      animated: false
    });
  }

  componentWillBlur() {
    this.dataRef.scrollToOffset({
      offset: this.currentOffset - 1,
      animated: false
    });
  }

  handlePlayGallery(playingIndex = 0) {
    this.props.app.props.openGallery(this.state.images, playingIndex);
  }

  render() {
    return (
      <Container>
        <FlatList
          ref={el => (this.dataRef = el)}
          onScroll={e => (this.currentOffset = e.nativeEvent.contentOffset.y)}
          data={this.state.images}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Item
              uri={item.small}
              index={index}
              resizeMode="cover"
              style={{ width: THUMB_WIDTH, height: THUMB_WIDTH }}
              onPress={this.handlePlayGallery.bind(this)}
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
