const StyleDictionary = require('style-dictionary')

StyleDictionary.registerTransform({
  name: 'react-native/line-height',
  type: 'value',
  matcher: token => {
    return token.attributes.category === 'height'
  },
  transformer: token => {
    return Number(token.value.replace(/\D/g, ''))
  },
})

StyleDictionary.extend({
  source: ['./tokens.json'],
  platforms: {
    rn: {
      transforms: ['name/cti/camel', 'size/object', 'color/css', 'react-native/line-height'],
      buildPath: './src/theme/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'index.ts',
        },
      ],
    },
  },
}).buildAllPlatforms()
