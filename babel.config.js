module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.js',
          '.ios.js',
          '.android.js',
          '.jsx',
          '.ios.jsx',
          '.android.jsx',
        ],
        alias: {
          assets: './src/assets',
          contexts: './src/contexts',
          components: './src/components',
          views: './src/views',
          router: './src/router',
          hooks: './src/hooks',
          services: './src/services',
          models: './src/models',
          schemas: './src/schemas',
          utils: './src/utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
  ],
}
