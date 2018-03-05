import React from 'react';
import PropTypes from 'prop-types';
import * as Progress from 'react-native-progress';
import ProgressImage from '../ProgressImage';

const IMG = ({ source, style, borderRadius, indicatorProps, resizeMode }) => (
  <ProgressImage
    indicator={Progress.CircleSnail}
    indicatorProps={indicatorProps}
    resizeMode={resizeMode}
    source={source}
    style={style}
    borderRadius={borderRadius}
  />
);

IMG.propTypes = {
  source: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  indicatorProps: PropTypes.object,
  borderRadius: PropTypes.number,
  resizeMode: PropTypes.string
};

IMG.defaultProps = {
  indicatorProps: {
    colors: ['#333', 'orange', 'green'],
    size: 50,
    thickness: 3
  },
  resizeMode: 'cover',
  borderRadius: 0
};

export default IMG;
