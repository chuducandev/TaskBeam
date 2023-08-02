import {Colors, Spacing12, Spacing16, Spacing4, Spacing6} from '@constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing16,
    backgroundColor: Colors.MintGreen,
    borderRadius: Spacing12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    marginLeft: Spacing12,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  contentText: {
    marginBottom: Spacing4,
    marginLeft: Spacing6,
  },
});
