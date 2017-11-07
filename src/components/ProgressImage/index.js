import React from 'react';
import { Image } from 'react-native';
import { createImageProgress } from 'react-native-image-progress';

const ImageComponent = props => {
  if (!props.source) {
    throw new Error('Image source is required');
  }
  const borderRadius = props.borderRadius || 0;
  const style = [props.style, { borderRadius }];
  const newProps = { ...props, style };
  return <Image {...newProps} />;
};
export default createImageProgress(ImageComponent);
