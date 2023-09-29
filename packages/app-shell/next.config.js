/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

const NextFederationPlugin = require('@module-federation/nextjs-mf')

module.exports = {
  webpack(config, options) {
    // if (!options.isServer) {
    //   config.plugins.push(
    //     new NextFederationPlugin({
    //       name: 'home',
    //       filename: 'static/chunks/remoteEntry.js',
    //       remotes: {},
    //       exposes: {},
    //       shared: {},
    //     }),
    //   )
    // }

    return config
  },
}
