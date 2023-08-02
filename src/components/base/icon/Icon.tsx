import React from 'react';
import {Animated, Image, ImageProps} from 'react-native';
import {IconProps} from './Icon.types';
import {Icons} from '@constants';

export const Icon = ({
  icon,
  width,
  height,
  size,
  tintColor,
  style,
  useAnimated = false,
}: IconProps): JSX.Element => {
  const iconProps: ImageProps = {
    source: Icons[icon],
    style: [
      {
        width: width ?? size,
        height: height ?? size,
        tintColor: tintColor,
      },
      style,
    ],
  };

  const Wrapper = useAnimated ? Animated.Image : Image;

  return <Wrapper {...iconProps} />;
};
