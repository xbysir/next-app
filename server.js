const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // 设置反向代理
  server.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'https://apifoxmock.com/m1/2919886-2056361-default/api/v1/',
      changeOrigin: true,
      pathRewrite: {
        '^/api/v1': '',
      },
    })
  );

  // 其他 Next.js 请求交给 Next.js 处理
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
