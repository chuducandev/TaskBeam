import {TextProps} from 'react-native';
import {FontWeight} from './PlainText.constants';

export type PlainTextProps = TextProps & {
  size?: number;
  weight?: FontWeight;
  color?: string;
  Component: React.ComponentClass<TextProps, any>;
};
