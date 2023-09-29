const NextFederationPlugin = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    const { webpack } = options
    // if (!options.isServer) {
    //   //config.cache=false
    //   config.plugins.push(
    //     new NextFederationPlugin({
    //       name: 'checkout',
    //       remotes: {},
    //       filename: 'static/chunks/remoteEntry.js',
    //       exposes: {},
    //       shared: {},
    //       extraOptions: {},
    //     }),
    //   )
    // }

    return config
  },
}
