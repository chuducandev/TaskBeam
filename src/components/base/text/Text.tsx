import React from 'react';
import {PlainText} from './plain-text';
import {Text} from 'react-native';
import {
  TextSize10,
  TextSize12,
  TextSize14,
  TextSize16,
  TextSize20,
  TextSize24,
  TextSize28,
  TextSize32,
  TextSize8,
} from '@constants';
import {CustomTextProps} from './Text.types';

export const Text8 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize8} {...rest}>
    {children}
  </PlainText>
);

export const Text10 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize10} {...rest}>
    {children}
  </PlainText>
);

export const Text12 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize12} {...rest}>
    {children}
  </PlainText>
);

export const Text14 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize14} {...rest}>
    {children}
  </PlainText>
);
export const Text16 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize16} {...rest}>
    {children}
  </PlainText>
);
export const Text20 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize20} {...rest}>
    {children}
  </PlainText>
);
export const Text24 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize24} {...rest}>
    {children}
  </PlainText>
);

export const Text28 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize28} {...rest}>
    {children}
  </PlainText>
);

export const Text32 = ({children, ...rest}: CustomTextProps) => (
  <PlainText Component={Text} size={TextSize32} {...rest}>
    {children}
  </PlainText>
);
