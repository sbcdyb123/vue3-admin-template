/*
 * @Author: your name
 * @Date: 2020-12-02 14:34:00
 * @LastEditTime: 2020-12-02 14:36:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\vue.config.js
 */
const StyleLintPlugin = require("stylelint-webpack-plugin");
module.exports = {
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ["**/*.{html,vue,css,sass,scss}"],
        fix: false,
        cache: true,
        emitErrors: true,
        failOnError: false
      })
    ]
  }
};
