import React, {useEffect, useRef} from 'react';
import {ExpandButtonProps} from './ExpandButton.types';
import {Icon} from '@components';
import {IconName, Spacing20} from '@constants';
import {Animated, TouchableOpacity} from 'react-native';

export const ExpandButton: React.FC<ExpandButtonProps> = ({
  isExpanded,
  onPress = () => {},
}: ExpandButtonProps) => {
  const angle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(angle, {
      toValue: isExpanded ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [angle, isExpanded]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        icon={IconName.IconCommonCaretRight}
        size={Spacing20}
        style={{
          transform: [
            {
              rotate: angle.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '90deg'],
              }),
            },
          ],
        }}
        useAnimated
      />
    </TouchableOpacity>
  );
};
