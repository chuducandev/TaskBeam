import {StyleProp, ViewStyle} from 'react-native';
import {IconName} from '@constants';
import {TaskDetailModel} from '@models';

export type HighlightedCardProps = {
  task: TaskDetailModel;
  icon: IconName;
  iconSize?: number;
  style?: StyleProp<ViewStyle>;
};
