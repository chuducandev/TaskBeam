import {StyleSheet} from 'react-native';
import {Spacing12, Spacing16, Spacing8, TextSize24} from '@constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: Spacing16,
    paddingVertical: Spacing12,
  },
  logo: {
    marginRight: Spacing8,
  },
  textField: {
    fontSize: TextSize24,
    fontWeight: 'bold',
  },
});
