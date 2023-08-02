import {StyleSheet} from 'react-native';
import {Colors, Spacing12, Spacing16, Spacing2, Spacing8} from '@constants';

export const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing12,
    padding: Spacing16,
    backgroundColor: Colors.ShakespeareTint09,
    borderRadius: Spacing12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    margin: Spacing2,
  },
  textField: {
    marginLeft: Spacing8,
    flex: 1,
  },
});
