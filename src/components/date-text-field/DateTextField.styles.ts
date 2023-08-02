import {Platform, StyleSheet} from 'react-native';
import {Spacing2, Spacing6} from '@constants';

export const styles = StyleSheet.create({
  placeholder: {
    position: 'absolute',
    flex: 1,
    marginTop: Spacing2,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Platform.OS === 'android' ? Spacing6 : undefined,
  },
});
