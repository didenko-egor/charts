module.exports = {
  presets: [
    ['@babel/preset-env',{ targets: 'defaults' }],
    '@babel/preset-typescript',
    ['@babel/preset-react', { runtime: 'automatic' }]
  ],
  plugins: ['inline-react-svg'],
  env: {
    development: {},
    production: {
      plugins: [
        ['react-remove-properties', { properties: ['data-test-id'] }],
      ]
    },
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        'babel-plugin-dynamic-import-node'
      ]
    }
  }
};
