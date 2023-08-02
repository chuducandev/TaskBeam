import {StyleSheet} from 'react-native';
import {
  Spacing12,
  Spacing16,
  Spacing30,
  Spacing32,
  Spacing64,
} from '@constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing16,
  },
  contentContainer: {
    paddingBottom: Spacing30 + Spacing64 + Spacing32,
  },
  header: {
    marginBottom: Spacing12,
  },
});
