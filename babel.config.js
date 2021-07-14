/* eslint-disable functional/immutable-data */
module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);

  if (isTest) {
    const presets = [
      '@babel/preset-react',
      '@babel/preset-env',
      '@babel/preset-typescript',
    ];

    const plugins = [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-dynamic-import',
      [
        'module-resolver',
        {
          root: ['./src/'],
        },
      ],
    ];

    return {
      presets,
      plugins,
    };
  }
  return {};
};
