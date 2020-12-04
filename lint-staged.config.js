/*
 * @Author: fangLong
 * @Date: 2020-12-04 23:47:15
 * @LastEditors: fangLong
 * @LastEditTime: 2020-12-04 23:57:38
 * @FilePath: \vue3-admin-template\lint-staged.config.js
 */
module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.vue': ['prettier --write', 'stylelint --fix'],
  '*.{scss,less,styl,css,html}': ['stylelint --fix', 'prettier --write'],
}
