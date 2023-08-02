import {TextFieldProps} from '../base/text-field/TextField.types';

export type DateTextFieldProps = Omit<
  TextFieldProps,
  'value' | 'defaultValue' | 'onChangeText'
> & {
  value?: Date;
  defaultValue?: Date;
  onChangeValue?: (value: Date) => void;
  placeholderColor?: string;
};

export type DateTextFieldHandle = {
  focus: () => void;
  blur: () => void;
};
