// FloatingButton.types.ts
import {StyleProp, ViewStyle} from 'react-native';
import {IconName} from '@constants';

export type FloatingButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon: IconName | JSX.Element;
  color?: string;
  keyboardHeight?: number;
};
