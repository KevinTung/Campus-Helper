var app = getApp()
const passwordVal = require('../../tools/passwordVal')
const messageBox = require('../../tools/messagebox')
var SHA256 = require('../../lib/crypto-js/sha256')
Page({
  data: {
    username: '',
    password: '',
    passwordValidate: '',
    authed: false
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
  passwordInputValidate: function (e) {
    this.setData({
      passwordValidate: e.detail.value
    })
  },
  // 注册
  register: function () {
    const username = this.data.username
    const password = this.data.password
    var valRes = passwordVal.check(password)
    if (valRes !== passwordVal.ok) {
      messageBox.none.show(valRes)
      return
    }
    if (username.length === 0) {
      messageBox.none.show('用户名不能为空')
      return
    }
    if (password !== this.data.passwordValidate) {
      messageBox.none.show('密码两次输入不一致')
      return
    }
    if (this.data.username.length < 4) {
      messageBox.none.show('用户名需至少4位')
      return
    }
    wx.request({
      url: app.globalData.server + '/register',
      header: {
        'content-type': 'application/json'
      },
      data: {
        username: this.data.username,
        password: SHA256(this.data.password).toString()
      },
      method: 'POST',
      success: this.onRegResponse
    })
  },
  auth: function (e) {
    var that = this
    const username = this.data.username
    const password = this.data.password
    var valRes = passwordVal.check(password)
    if (valRes !== passwordVal.ok) {
      messageBox.none.show(valRes)
      return
    }
    if (username.length === 0) {
      messageBox.none.show('用户名不能为空')
      return
    }
    if (password !== this.data.passwordValidate) {
      messageBox.none.show('密码两次输入不一致')
      return
    }
    if (this.data.username.length < 4) {
      messageBox.none.show('用户名需至少4位')
      return
    }
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          console.log('authorized')
          wx.getUserInfo({
            success: function (res) {
              console.log(res)
              var gender = ''
              if (res.userInfo.gender == 1) gender = '男'
              else if (res.userInfo.gender == 2) gender = '女'
              wx.request({
                url: app.globalData.server + '/register/withinfo',
                method: 'POST',
                data: {
                  username: that.data.username,
                  password: SHA256(that.data.password).toString(),
                  nickname: res.userInfo.nickName,
                  gender: gender,
                  avatar: res.userInfo.avatarUrl
                },
                success: that.onRegResponse
              })
            }
          })
        }
      }
    })
  },
  onRegResponse: function (goods) {
    if (goods.data.status === 'admitted') {
      wx.navigateTo({
        url: '/pages/login/login'
      })
      messageBox.success.show(goods.data.info)
    } else {
      messageBox.none.show(goods.data.info)
    }
  }
})
