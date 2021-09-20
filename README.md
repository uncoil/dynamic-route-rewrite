This repo is setup to reproduce the issue I'm seeing with Next.js deployed on Vercel. When next.config.js contains `rewrites`, the rewrites 404 when referring to paths with dynamic segments.

The rewrites are setup to map `/a-path?fid=an-id` to the destination `/an-id/a-path`. When the path contains a dynamic segment (see `/pages/orders/[orderId]/index.js`), the vercel deployed version 404s for these routes. Click through the pages from root to see it happen.

Notes:
- When using `next/link` component the dynamic route will load successfully, but if the page is refreshed it will 404.
- When using `a` tag without next/link, the page will 404 immediately.


I tried using only a specific rewrite targeting the orders route directly: `/orders/1234asdf?fid=a-funnel` still 404s
```
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/orders/:orderId',
        has: [
          {
            type: 'query',
            key: 'fid',
            value: `(?<fid>.*)`,
          }
        ],
        destination: `/:fid/orders/:orderId`,
      }
    ]
  }
};
```
