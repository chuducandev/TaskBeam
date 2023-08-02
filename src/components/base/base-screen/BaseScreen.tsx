import React from 'react';
import {KeyboardAvoidingView, Platform, SafeAreaView} from 'react-native';
import {BaseScreenProps} from './BaseScreen.types';
import {styles} from './BaseScreen.styles';
import {Colors} from '@constants';

export const BaseScreen = ({
  children,
  backgroundColor = Colors.White,
}: BaseScreenProps): JSX.Element => {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
