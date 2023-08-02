// FloatingButton.styles.ts
import {StyleSheet} from 'react-native';
import {
  Colors,
  Spacing0,
  Spacing10,
  Spacing30,
  Spacing32,
  Spacing4,
  Spacing64,
} from '@constants';

export const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    right: Spacing30,
    bottom: Spacing30,
    height: Spacing64,
    width: Spacing64,
    borderRadius: Spacing32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.MintGreen,
    shadowColor: Colors.Black,
    shadowOffset: {width: Spacing0, height: Spacing4},
    shadowOpacity: 0.15,
    shadowRadius: Spacing10,
    elevation: 5,
  },
});
