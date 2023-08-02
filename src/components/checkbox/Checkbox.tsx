import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Checkbox.styles';
import {CheckboxProps} from './Checkbox.types';
import {Icon} from '../base';
import {IconName, Spacing16} from '@constants';

export const Checkbox = ({
  title,
  defaultValue = false,
  value,
  onChangeValue,
}: CheckboxProps) => {
  const [isSelected, setSelection] = useState(defaultValue);

  useEffect(() => {
    if (value !== undefined) {
      setSelection(value);
    }
  }, [value]);

  const toggleSelection = () => {
    const newSelection = !isSelected;
    setSelection(newSelection);

    if (onChangeValue) {
      onChangeValue(newSelection);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.checkBox,
          isSelected ? styles.checked : styles.unchecked,
        ]}
        onPress={toggleSelection}>
        {isSelected && (
          <Icon icon={IconName.IconCommonCheck} size={Spacing16} />
        )}
      </TouchableOpacity>
      {title && <Text>{title}</Text>}
    </View>
  );
};
