module.exports = function (api) {
  const isTest = api.env('test');
  api.cache(true);

  const presets = [
    '@babel/preset-react',
    '@babel/preset-env',
    '@babel/preset-typescript',
  ];

  let plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
  ];
  if (isTest) {
    plugins.push([
      'module-resolver',
      {
        root: ['./src/'],
      },
    ]);
    plugins.push('@babel/plugin-transform-runtime');
    plugins.push('@babel/plugin-syntax-dynamic-import');
  }

  return {
    presets,
    plugins,
  };
};
