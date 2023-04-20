module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/test",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  outputDir: "../backend/public",
};
