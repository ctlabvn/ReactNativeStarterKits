import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import material from '../../theme/variables/material';
import { formatMarketCapVolumn, formatPrice } from '../../utils/common';

export default class extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  render() {
    const { item } = this.props;
    const decrease = item.percent_change_1h.indexOf('-') > -1;
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.container}>
        <View style={{ width: material.deviceWidth * 0.3 }}>
          <Text style={{ color: '#fff' }}>{`${item.symbol} / BTC`}</Text>
          <Text
            style={{ color: '#838383', fontSize: 12 }}
          >{`Market Cap ${formatMarketCapVolumn(item.market_cap_usd)}`}</Text>
        </View>
        <View style={{ width: material.deviceWidth * 0.3 }}>
          <Text style={{ color: decrease ? '#fff' : '#75A61E' }}>{`${
            item.price_btc
          }`}</Text>
          <Text style={{ color: '#838383', fontSize: 12 }}>
            {formatPrice(item.price_usd)}
          </Text>
        </View>
        <View
          style={{
            width: material.deviceWidth * 0.3,
            height: 35,
            backgroundColor: decrease ? '#90124F' : '#4F6E17',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 3
          }}
        >
          <Text style={{ color: '#fff' }}>{`${item.percent_change_1h}`}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  }
});
