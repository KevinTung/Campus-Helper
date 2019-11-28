var app = getApp()
var messageBox = require('../../tools/messagebox')
var avatarWrapper = require('../../tools/avatarwrap.js')
const session = require('../../tools/session')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userInfo: {},
    follow: false,
    displayButton: false
  },
  sendMessage: function () {
    wx.navigateTo({
      url: "/pages/chat/chat?chatTo="+ this.data.userInfo.username
    })
  },
  onFollowChange: function () {
    var isFollow = !this.data.follow // 与原来关注状态相反
    var state = isFollow ? 'follow' : 'unfollow'
    var that = this
    wx.request({
      url: app.globalData.server + '/user/' + state,
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        targetuser: this.data.userInfo.username
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        if (!session.checkResponse(res)) return
        if (res.data.result == 'success') {
          that.setData({
            follow: isFollow,
            'userInfo.cnt_follower': that.data.userInfo.cnt_follower + (isFollow ? 1 : -1),
            credit: that.data.credit + (isFollow ? 100 : -100)
          })
        }
        console.log(that.data.userInfo)
      }
    })
  },
  receiveImgList: function (goods) {
    this.fillData(true, goods)
  },
  fillData: function (isPull, goods) {
    var view = this.selectComponent('#waterfall')
    view.fillData(isPull, goods, false)
  },
  toFurtherinfo: function () {
    wx.navigateTo({
      url: '/pages/user-detail/user-furtherinfo?username=' + this.data.userInfo.username
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: app.globalData.server + '/user-info-pub',
      data: {
        username: options.username
      },
      method: 'GET',
      success: this.initData
    })
  },
  initData: function (res) {
    const data = res.data
    console.log(data)
    this.setData({
      avatar: avatarWrapper.wrapAvatar(data.avatar),
      userInfo: data,
      credit: data.cnt_poster + 10 * data.cnt_upvoted + 100 * data.cnt_follower
    })// 初始化用户信息：用户名、昵称、性别等
    var that = this
    wx.request({
      url: app.globalData.server + '/user/publish/list',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        targetuser: this.data.userInfo.username
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        if(!session.checkResponse(res)) return
        that.receiveImgList(res.data.result)
      }
    })// 获取用户动态列表
    if (this.data.userInfo.username == app.globalData.username) return
    // 若目标用户名与全局变量中的用户名相同，则不显示关注按钮
    console.log(this.data.displayButton)
    this.setData({
      displayButton: true
    })
    wx.request({
      url: app.globalData.server + '/user/isfollowing',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        targetuser: this.data.userInfo.username
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        if (!session.checkResponse(res)) return
        if (res.data.result == 'yes') {
          that.setData({
            follow: true
          })
        }
      }
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
