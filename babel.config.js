module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        'babel-preset-expo',
        {
          jsxImportSource: 'nativewind',
        },
      ],
      'nativewind/babel',
    ],
    plugins: [
      'transform-inline-environment-variables',
      '@babel/plugin-proposal-export-namespace-from',
      [
        'babel-plugin-root-import',
        {
          rootPathPrefix: '',
          rootPathSuffix: 'src',
        },
      ],
      [
        'module-resolver',
        {
          root: ['./'],

          alias: {
            '@': './',
          },
        },
      ],
    ],
  };
};
