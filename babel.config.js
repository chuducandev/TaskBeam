module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@models': './src/models',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@context': './src/context',
          '@mocks': './src/mocks',
        },
      },
    ],
    [
      '@babel/plugin-transform-export-namespace-from',
      {
        legacy: true,
      },
    ],
  ],
};
