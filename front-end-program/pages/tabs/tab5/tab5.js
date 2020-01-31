// pages/tabs/tab5/tab5.js
var app = getApp()
var messageBox = require('../../../tools/messagebox')
var avatarWrapper = require('../../../tools/avatarwrap.js')
const session = require('../../../tools/session')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userInfo: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  initData: function (res) {
    if (!session.checkResponse(res)) return
    const data = res.data
    console.log(data)
    this.setData({
      avatar: avatarWrapper.wrapAvatar(data.userinfo.avatar),
      userInfo: data.userinfo,
      credit: data.userinfo.cnt_poster + 10*data.userinfo.cnt_upvoted + 100*data.userinfo.cnt_follower
    })
  },
  
  toEditPage: function () {
    wx.navigateTo({
      url: '/pages/user-edit/edit'
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
    var that = this
    wx.request({
      url: app.globalData.server + '/user-info-pri',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      method: 'POST',
      success: this.initData
    }),
    wx.request({
      url: app.globalData.server + '/user/publish/list',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        targetuser: app.globalData.username
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        if (!session.checkResponse(res)) return
        that.receiveImgList(res.data.result)
      }
    })
  },
  receiveImgList: function (goods) {
    this.fillData(true, goods)
  },
  fillData: function (isPull, goods) {
    var view = this.selectComponent('#waterfall')
    view.fillData(isPull, goods, true)
  },
  onDelete: function (e) {
    console.log(e)
    var that = this
    wx.request ({
      url: app.globalData.server + '/delete-poster',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        pid: e.detail.pid
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        if (!session.checkResponse(res)) return
        messageBox.success.show(res.data.info)
        that.onShow()
      }
    })
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
