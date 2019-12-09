var app = getApp()
var SHA256 = require('../../lib/crypto-js/sha256')
const messageBox = require('../../tools/messagebox')
Page({
  data: {
    username: '',
    password: ''
  },

  // 获取输入账号
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 获取输入密码
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录
  login: function () {
    if (this.data.username.length === 0 || this.data.password.length === 0) {
      messageBox.none.show('用户名和密码不能为空')
    } else {
      wx.request({
        url: app.globalData.server + '/login',
        data: {
          username: this.data.username,
          password: SHA256(this.data.password).toString()
        },
        header: {
          'content-type': 'application/json'
        },
        method: 'POST',
        success: this.onLoginResponse
      })
    }
  },
  onLoginResponse: function (goods) {
    if (goods.data.status === 'admitted') {
      messageBox.success.show(goods.data.info)
      app.globalData.sessionID = goods.data.token
      app.globalData.username = this.data.username
      wx.switchTab({
        url: '/pages/tabs/tab1/tab1',
        fail: function () {
          console.info('跳转失败')
        }
      })
    } else {
      messageBox.none.show(goods.data.info)
    }
  },
  onLoad: function (e) {
    
  }
})
