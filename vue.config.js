/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  // publicPath: isProduction ? "/node-first" : "/",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    port: 8083,
    proxy: {
      "/api": {
        target: "http://localhost:8088",
        changeOrigin: true,
        ws: false,
        // pathRewrite: {
        //   "^/api": "/api",
        // },
      },
    },
  },
  // webpack配置
  configureWebpack: {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warning: false,
              drop_console: false,
              drop_debugger: false,
              pure_func: ["console.log"],
            },
          },
        }),
      ],
    },
    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
  },
};
