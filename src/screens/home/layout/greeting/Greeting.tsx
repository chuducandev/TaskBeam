import React from 'react';
import {View} from 'react-native';
import {styles} from './Greeting.styles';
import {FontWeight, Text16, Text28} from '@components';

export const Greeting = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text16 weight={FontWeight.SemiBold}>Good morning,</Text16>
      <Text28 weight={FontWeight.SemiBold}>Keep it going!</Text28>
    </View>
  );
};
