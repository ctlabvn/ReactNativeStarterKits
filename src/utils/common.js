import numeral from 'numeral';

export const getDomainName = url => {
  let hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname
  if (url.indexOf('://') > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }
  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];
  hostname = hostname.replace('www.', '');

  return hostname;
};

export const formatMarketCapVolumn = (total = 0) => {
  total = Number.parseFloat(total);
  if (!total || total.isNAN) {
    return 0;
  }
  // format billions
  // if (total >= 1000000000) {
  //   return numeral(total).format('0.0 a');
  // }
  // format millions
  if (total >= 1000000) {
    return numeral(total).format('0,0 a');
  }
  return numeral(total).format('0 a');
};

export const formatPrice = (price = 0) => {
  price = Number.parseFloat(price);
  if (!price || price.isNAN) {
    return 0;
  }
  return numeral(price).format('$ 0.0,000000');
};
