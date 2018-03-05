import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, StatusBar, FlatList } from 'react-native';
import { View, Text } from 'native-base';
import Icon from '../../elements/Icon';
import * as commonActions from '../../store/actions/common';
import { getGallery } from '../../store/selectors/common';
import material from '../../theme/variables/material';
import Item from './Item';
import styles from './styles';

@connect(state => ({ ...getGallery(state) }), { ...commonActions })
class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0
    };
    this.renderPagination = this.renderPagination.bind(this);
    this.onMomentumScrollEnd = this.onMomentumScrollEnd.bind(this);
  }

  componentWillReceiveProps({ playingIndex = 0 }) {
    this.setState({ currentPage: playingIndex });
  }

  shouldComponentUpdate({ isPlaying }, { currentPage }) {
    return (
      this.props.isPlaying !== isPlaying ||
      this.state.currentPage !== currentPage
    );
  }

  onMomentumScrollEnd = event => {
    const contentOffset = event.nativeEvent.contentOffset;
    const currentPage = Math.round(contentOffset.x / material.deviceWidth);
    this.setState({ currentPage });
  };

  getItemLayout = (item, index) => ({
    length: material.deviceWidth,
    offset: material.deviceWidth * index,
    index
  });

  renderPagination = () => {
    const { images, closeGallery } = this.props;
    return (
      <View style={styles.headerBar}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => closeGallery()}>
          <Icon name="close" style={styles.btnIcon} />
        </TouchableOpacity>
        <Text style={styles.btnText}>{`${this.state.currentPage + 1}/${
          images.length
        }`}</Text>
      </View>
    );
  };

  render() {
    const { playingIndex, isPlaying, images } = this.props;
    if (!images || images.length === 0 || !isPlaying) {
      return null;
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          ref={ref => (this.dataRef = ref)}
          initialScrollIndex={playingIndex}
          initialNumToRender={images.length}
          removeClippedSubviews={false}
          horizontal
          pagingEnabled
          data={images}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => <Item item={item} />}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
          getItemLayout={this.getItemLayout}
        />
        {this.renderPagination()}
      </View>
    );
  }
}
export default Gallery;
