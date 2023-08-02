import {IconName} from '@constants';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ImageStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export type IconProps = {
  icon: IconName;
  width?: number;
  height?: number;
  size?: number;
  tintColor?: string;
  style?: StyleProp<ImageStyle>;
  useAnimated?: boolean;
};
