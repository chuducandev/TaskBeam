import {TextProps} from 'react-native';
import {FontWeight} from './plain-text';

export type CustomTextProps = TextProps & {
  weight?: FontWeight;
  color?: string;
  size?: number;
};
