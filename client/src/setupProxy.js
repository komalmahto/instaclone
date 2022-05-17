const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://20.219.107.151",
      changeOrigin: true,
    })
  )
}
