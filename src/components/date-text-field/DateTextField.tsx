import React, {
  forwardRef,
  MutableRefObject,
  ReactElement,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {Platform, TextInput, View} from 'react-native';
import {Colors, TextSize14} from '@constants';
import {DateTextFieldHandle, DateTextFieldProps} from './DateTextField.types';
import {Text14, TextField} from '@components';
import {styles} from './DateTextField.styles';
import {DateTextFieldDefaultPlaceholder} from './DateTextField.constants';
import {
  convertDateToString,
  convertStringToDate,
  correctDateTextValue,
} from './DateTextField.utils';
import {useEffectOnce} from '@hooks';

export const PlainDateTextField = (
  {
    size = TextSize14,
    color = Colors.ChathamsBlueShade02,
    width,
    height,
    style,
    defaultValue,
    onChangeValue,
    placeholderColor = Colors.ChathamsBlueTint04,
    ...rest
  }: DateTextFieldProps,
  ref:
    | ((instance: DateTextFieldHandle | null) => void)
    | MutableRefObject<DateTextFieldHandle | null>
    | null,
) => {
  const [textValue, setTextValue] = React.useState<string>('');
  const inputRef = useRef<TextInput>(null);

  useImperativeHandle(ref, () => {
    const {focus = () => {}, blur = () => {}} = inputRef.current || {};

    return {
      focus,
      blur,
    };
  });

  useEffectOnce(() => {
    if (defaultValue) {
      setTextValue(convertDateToString(defaultValue!!));
    }
  });

  const placeholder = useMemo(() => {
    if (textValue.length >= DateTextFieldDefaultPlaceholder.length) {
      return '';
    }
    const placeholderLength =
      DateTextFieldDefaultPlaceholder.length - textValue.length;

    return DateTextFieldDefaultPlaceholder.slice(-placeholderLength);
  }, [textValue]);

  const handleOnChangeValue = useCallback(
    (value: string) => {
      const correctedValue = correctDateTextValue(value, textValue);
      setTextValue(correctedValue);

      if (correctedValue.length >= 16) {
        onChangeValue?.(convertStringToDate(correctedValue));
      } else if (correctedValue.length >= 10) {
        onChangeValue?.(convertStringToDate(correctedValue));
      }
    },
    [onChangeValue, textValue],
  );

  return (
    <View
      style={[
        {
          width,
          height: Platform.OS === 'ios' ? height : undefined,
        },
        style,
      ]}>
      <View
        style={[
          styles.placeholder,
          {
            width,
            height: Platform.OS === 'ios' ? height : '100%',
          },
        ]}>
        <Text14 size={size} color={color}>
          {textValue}
        </Text14>
        <Text14 size={size} color={placeholderColor}>
          {placeholder}
        </Text14>
      </View>
      <TextField
        {...rest}
        width={width}
        height={height}
        color={Colors.Transparent}
        size={size}
        onChangeText={handleOnChangeValue}
        value={textValue}
        keyboardType={'number-pad'}
        ref={inputRef}
      />
    </View>
  );
};

const ForwardedRef = forwardRef(PlainDateTextField) as (
  props: DateTextFieldProps & React.RefAttributes<TextInput>,
) => ReactElement;

export const DateTextField = React.memo(ForwardedRef);
