// pages/user-edit/edit-nickname.js
var app = getApp()
var session = require('../../tools/session.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickname: '',
    focused: true
  },
  onInputChange: function (e) {
    var value = e.detail.value
    this.setData({
      nickname: value
    })
  },
  save: function (e) {
    wx.request({
      url: app.globalData.server + '/user-edit',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        userinfo: {
          nickname: this.data.nickname
        }
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success (res) {
        if (!session.checkResponse(res)) return
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  cancel: function (e) {
    this.setData({
      nickname: ''
    })
    wx.navigateBack({
      delta: 1
    })
  },
  onConfirm: function (e) {
    var value = e.detail.value
    wx.request({
      url: app.globalData.server + '/user-edit',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        userinfo: {
          nickname: value
        }
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success (res) {
        if (!session.checkResponse(res)) return
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  setFocus: function () {
    console.log('blur!')
    this.setData({
      focused: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      nickname: options.nickname
    })
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
