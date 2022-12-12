module.exports = {
  plugins: [
    'postcss-mixins',
    'postcss-flexbugs-fixes',
    'postcss-nested',
    'postcss-import',
    'postcss-simple-vars',
    'postcss-custom-properties',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': false,
        },
      },
    ],
    [
      'postcss-custom-media',
      {
        importFrom: './styles/media.css',
      },
    ],
  ],
};
