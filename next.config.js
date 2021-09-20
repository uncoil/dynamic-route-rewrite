const hasQuery={
  type: 'query',
  key: 'fid',
  value: `(?<fid>.*)`,
}

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/orders/:orderId',
        has: [hasQuery],
        destination: `/:fid/orders/:orderId`,
      },
      // {
      //   source: '/:path*',
      //   has: [hasQuery],
      //   destination: `/:fid/:path*`,
      // },
    ]
  }
}
