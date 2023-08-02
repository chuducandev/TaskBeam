import React from 'react';
import type {PlainTextProps} from './PlainText.types';
import {Colors, TextSize14} from '@constants';
import {FontWeight} from './PlainText.constants';

export const PlainText = ({
  style,
  Component,
  children,
  weight = FontWeight.Normal,
  size = TextSize14,
  color = Colors.ChathamsBlueShade02,
  ...rest
}: PlainTextProps) => {
  return (
    <Component
      {...rest}
      style={[
        {
          fontWeight: weight,
          fontSize: size,
          color,
        },
        style,
      ]}>
      {children}
    </Component>
  );
};
