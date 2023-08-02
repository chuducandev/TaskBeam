import {IconName} from '@constants';
import {StyleProp, ViewStyle} from 'react-native';

export type SummaryCardProps = {
  title: string;
  subtitle: string;
  value: number | string;
  icon: IconName;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
};
