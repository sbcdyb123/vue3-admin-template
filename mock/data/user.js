/*
 * @Author: fangLong
 * @Date: 2020-12-03 22:57:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-12-16 10:37:43
 * @FilePath: \vue3-admin-template\mock\data\user.js
 */
const routes = require('./routes')
const tokens = {
  admin: {
    token: 'admin-token111',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: (config) => {
      const { username } = config.body
      const token = tokens[username]

      // mock error
      if (!token) {
        return {
          success: false,
          response: null,
          message: 'get token fail.......',
        }
      }

      return {
        success: true,
        response: token,
        message: 'get token success.....',
      }
    },
  },

  // get user info
  {
    url: '/vue-element-admin/user/info.*',
    type: 'get',
    response: (config) => {
      const { token } = config.query
      const info = users[token]

      // mock error
      if (!info) {
        return {
          success: false,
          response: null,
          message: 'Login failed, unable to get user details.',
        }
      }

      return {
        success: true,
        response: info,
        message: 'get userInfo success.......',
      }
    },
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: (_) => {
      return {
        success: true,
        response: null,
        message: 'logout...',
      }
    },
  },
  // mock get all routes form server
  {
    url: '/vue-element-admin/routes',
    type: 'get',
    response: (_) => {
      return {
        success: true,
        response: routes,
        message: 'get routes success.......',
      }
    },
  },
]
