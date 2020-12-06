/*
 * @Author: your name
 * @Date: 2020-12-02 14:34:00
 * @LastEditTime: 2020-12-07 00:27:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \unit-admin-compound\vue.config.js
 */
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const port = process.env.port || process.env.npm_config_port || 9527 // dev port
const StyleLintPlugin = require('stylelint-webpack-plugin')
module.exports = {
  devServer: {
    port: port,
    open: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    before: require('./mock/mock-server.js'),
  },
  configureWebpack: {
    plugins: [
      new StyleLintPlugin({
        files: ['**/*.{html,vue,css,sass,scss}'],
        fix: false,
        cache: true,
        emitErrors: true,
        failOnError: false,
      }),
    ],
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#1890ff', // 全局主色
            '@link-color': '#1890ff', // 链接色
            '@success-color': '#52c41a', // 成功色
            '@warning-color': '#faad14', // 警告色
            '@error-color': '#f5222d', // 错误色
            '@font-size-base': '14px', // 主字号
            '@heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
            '@text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
            '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
            '@disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
            '@border-radius-base': '4px', // 组件/浮层圆角
            '@border-color-base': '#d9d9d9', // 边框色
            '@box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', // 浮层阴影
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
  },
}
