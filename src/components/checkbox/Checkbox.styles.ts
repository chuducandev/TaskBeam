import {StyleSheet} from 'react-native';
import {Colors, Spacing10, Spacing2, Spacing24} from '@constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    height: Spacing24,
    width: Spacing24,
    borderRadius: Spacing10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  unchecked: {
    borderWidth: Spacing2,
    borderColor: Colors.Black,
  },
  checked: {
    backgroundColor: Colors.MintGreen,
  },
  checkMark: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});
