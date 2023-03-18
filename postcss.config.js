module.export = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': { utf8: false },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px',
      viewportWidth: 1920,
      viewportHeight: 1080,
      unitPrecision: 3,
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      landscapeUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
    },
    'postcss-viewport-units': {
      filterRule: (rule) =>
        rule.selector.indexOf('::after') === -1 &&
        rule.selector.indexOf('::before') === -1 &&
        rule.selector.indexOf(':after') === -1 &&
        rule.selector.indexOf(':before') === -1,
    },
    cssnano: {
      preset: 'default',
    },
    tailwindcss: {},
    autoprefixer: {},
  },
};
