import React, {
  forwardRef,
  MutableRefObject,
  ReactElement,
  useImperativeHandle,
  useRef,
} from 'react';
import {TextFieldHandle, TextFieldProps} from './TextField.types';
import {Platform, TextInput} from 'react-native';
import {Colors, TextSize14} from '@constants';

export const PlainTextField = (
  {
    size = TextSize14,
    color = Colors.ChathamsBlueShade02,
    width,
    height,
    style,
    ...rest
  }: TextFieldProps,
  ref:
    | ((instance: TextFieldHandle | null) => void)
    | MutableRefObject<TextFieldHandle | null>
    | null,
) => {
  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => {
    const {focus = () => {}, blur = () => {}} = inputRef.current || {};

    return {
      focus,
      blur,
    };
  });

  return (
    <TextInput
      {...rest}
      style={[
        style,
        {
          fontSize: size,
          color,
          width,
          height: Platform.OS === 'ios' ? height : undefined,
        },
      ]}
      ref={inputRef}
    />
  );
};

const ForwardedRef = forwardRef(PlainTextField) as (
  props: TextFieldProps & React.RefAttributes<TextInput>,
) => ReactElement;

export const TextField = React.memo(ForwardedRef);
