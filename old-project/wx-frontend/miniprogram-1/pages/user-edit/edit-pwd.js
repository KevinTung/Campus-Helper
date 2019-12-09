// pages/user-edit/pwd-edit.js

var app = getApp()
var SHA256 = require('../../lib/crypto-js/sha256')
const messageBox = require('../../tools/messagebox')
const passwordVal = require('../../tools/passwordVal')
const session = require('../../tools/session')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oldPassword: '',
    newPassword: '',
    newPasswordVal: ''
  },
  onOldInput: function (e) {
    this.setData({
      oldPassword: e.detail
    })
  },
  onNewInput: function (e) {
    this.setData({
      newPassword: e.detail
    })
  },
  onNewValInput: function (e) {
    this.setData({
      newPasswordVal: e.detail
    })
  },
  save: function () {
    if (this.data.newPassword !== this.data.newPasswordVal) {
      messageBox.none.show('密码两次输入不一致')
      return
    }
    const valRes = passwordVal.check(this.data.newPassword)
    if (valRes !== passwordVal.ok) {
      messageBox.none.show(valRes)
      return
    }
    if (this.data.newPassword === this.data.oldPassword) {
      messageBox.none.show('新密码不能与旧密码相同')
      return
    }
    wx.request({
      url: app.globalData.server + '/user-edit-pwd',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        password: SHA256(this.data.oldPassword).toString(),
        newPWD: SHA256(this.data.newPassword).toString()
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success (res) {
        if (!session.checkResponse(res)) return
        if (res.data.result === 'success') {
          messageBox.success.show(res.data.info)
          wx.switchTab({
            url: '/pages/tabs/tab5/tab5',
            fail: function () {
              console.info('跳转失败')
            }
          })
        } else {
          messageBox.none.show(res.data.info)
        }
      }
    })
  },
  cancel: function () {
    wx.switchTab({
      url: '/pages/tabs/tab5/tab5',
      fail: function () {
        console.info('跳转失败')
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
