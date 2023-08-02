import {TextInputProps} from 'react-native';

export type TextFieldProps = TextInputProps & {
  size?: number;
  color?: string;
  width?: number;
  height?: number;
};

export type TextFieldHandle = {
  focus: () => void;
  blur: () => void;
};
