const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://port-0-geulida-back-lhe2bli1h434z.sel4.cloudtype.app',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
