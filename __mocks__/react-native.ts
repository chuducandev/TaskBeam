jest.mock('react-native/Libraries/Utilities/Dimensions', () => ({
  get: jest.fn().mockReturnValue({
    width: 360,
    height: 640,
    scale: 2,
    fontScale: 2,
  }),
}));

// jest.mock('react-native', () => {
//   const RealReactNative = jest.requireActual('react-native');
//
//   return {
//     ...RealReactNative,
//     Animated: {
//       createTimer: jest.fn(),
//       timing: jest.fn(() => {
//         return {
//           start: jest.fn(),
//         };
//       }),
//       Value: jest.fn(() => {
//         return {
//           interpolate: jest.fn(),
//         };
//       }),
//       createAnimatedComponent: jest.fn((component: any) => component),
//     },
//     PixelRatio: {
//       ...RealReactNative.PixelRatio,
//       get: jest.fn(() => 2),
//       getFontScale: jest.fn(() => 2),
//       getPixelSizeForLayoutSize: jest.fn(layoutSize => 2 * layoutSize),
//       roundToNearestPixel: jest.fn((size: number) => Math.round(size * 2) / 2),
//       startDetecting: jest.fn(),
//     },
//     StyleSheet: {
//       ...RealReactNative.StyleSheet,
//       create: jest.fn((styles: any) => styles),
//       flatten: jest.fn(),
//     },
//   };
// });

jest.mock('react-native/Libraries/BatchedBridge/NativeModules', () => ({
  SettingsManager: {
    settings: {
      AppleLocale: 'en_US',
    },
  },
  I18nManager: {
    allowRTL: jest.fn(),
    forceRTL: jest.fn(),
    swapLeftAndRightInRTL: jest.fn(),
    isRTL: false,
  },
}));

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'ios', // or 'android'
  select: (objs: {ios: unknown; android: unknown}) => objs.ios, // or objs['android']
}));

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter.js', () => {
  const {EventEmitter} = require('events');
  return EventEmitter;
});

jest.mock('react-native/Libraries/Utilities/NativeDeviceInfo', () => ({
  getConstants: () => ({
    // Here you can set the device info constants as per your needs
    isEmulator: false,
    // any other constants that your code relies on
  }),
}));

// export let keyboardDidShowCallback: (event: any) => void;
// export let keyboardDidHideCallback: (event: any) => void;

export const keyboardCallback: {
  keyboardDidShowCallback: (event: any) => void;
  keyboardDidHideCallback: (event: any) => void;
} = {
  keyboardDidShowCallback: () => {},
  keyboardDidHideCallback: () => {},
};

jest.mock('react-native/Libraries/Components/Keyboard/Keyboard', () => {
  const originalModule = jest.requireActual(
    'react-native/Libraries/Components/Keyboard/Keyboard',
  );

  const addListener = jest.fn((event, callback) => {
    if (event === 'keyboardDidShow') {
      keyboardCallback.keyboardDidShowCallback = callback;
    } else if (event === 'keyboardDidHide') {
      keyboardCallback.keyboardDidHideCallback = callback;
    }
    return originalModule.addListener(event, callback);
  });

  return {
    ...originalModule,
    addListener,
  };
});
