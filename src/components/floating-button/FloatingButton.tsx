// FloatingButton.tsx
import React, {useEffect, useRef} from 'react';
import {Animated, Platform, TouchableOpacity} from 'react-native';
import {FloatingButtonProps} from './FloatingButton.types';
import {styles} from './FloatingButton.styles';
import {Colors, Spacing32} from '@constants';
import {Icon} from '../base';

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

export const FloatingButton = ({
  onPress,
  style,
  icon,
  color = Colors.MintGreen,
  keyboardHeight = 0,
}: FloatingButtonProps): JSX.Element => {
  const keyboardHeightAnimatedValue = useRef(
    new Animated.Value(keyboardHeight),
  ).current;

  useEffect(() => {
    Animated.timing(keyboardHeightAnimatedValue, {
      toValue: keyboardHeight,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [keyboardHeight, keyboardHeightAnimatedValue]);

  const containerStyle = [
    styles.floatingButton,
    Platform.OS === 'ios'
      ? {
          marginBottom: keyboardHeightAnimatedValue,
        }
      : {marginBottom: Spacing32},
    color
      ? {
          backgroundColor: color,
        }
      : {},
    style,
  ];

  return (
    <AnimatedTouchableOpacity
      style={containerStyle}
      onPress={onPress}
      testID="floatingButton">
      {typeof icon === 'string' ? <Icon icon={icon} size={Spacing32} /> : icon}
    </AnimatedTouchableOpacity>
  );
};
