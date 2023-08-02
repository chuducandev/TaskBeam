import {
  Colors,
  Spacing12,
  Spacing16,
  Spacing2,
  Spacing4,
  Spacing6,
  Spacing8,
} from '@constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Spacing16,
    borderWidth: Spacing2,
    borderColor: Colors.ChathamsBlueTint09,
    borderRadius: Spacing12,
    marginTop: Spacing8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: Spacing8,
  },
  headerText: {
    marginLeft: Spacing4,
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
