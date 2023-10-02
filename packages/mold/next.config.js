const NextFederationPlugin = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'mold',
          filename: 'static/chunks/remoteEntry.js',
          exposes: {
            './mold': '/src/pages/index.tsx',
          },
          shared: {},
        }),
      )
    }

    return config
  },
}
