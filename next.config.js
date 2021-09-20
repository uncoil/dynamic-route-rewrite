module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [{
          type: 'query',
          key: 'fid',
          value: `(?<fid>.*)`,
        }],
        destination: `/:fid/:path*`,
      },
    ]
  }
}
