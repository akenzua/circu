const NextFederationPlugin = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'app-shell',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            mold: 'mold@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          },
          exposes: {},
          shared: {},
        }),
      )
    }

    return config
  },
}
