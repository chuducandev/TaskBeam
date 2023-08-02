import React from 'react';
import {View} from 'react-native';
import {styles} from './Space.styles';
import {SpaceProps} from './Space.types';

export const Space: React.FC<SpaceProps> = ({
  width,
  height,
  flex,
  backgroundColor,
  ...rest
}) => {
  const spaceStyles = [
    styles.space,
    {width: width, height: height, backgroundColor: backgroundColor},
    flex && styles.flex,
  ];

  return <View style={spaceStyles} {...rest} />;
};
