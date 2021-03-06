// pages/tabs/tab4/like.js
var app = getApp()
var timeParser = require("../../../tools/timeparser.js")
var avatarWrapper = require('../../../tools/avatarwrap.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    likeList: []
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
    wx.request({
      url: app.globalData.server + '/user/notification/list',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      method: 'POST',
      success: this.update
    })
  },
  pushOne: function (notice) {
    var that = this
    wx.request({
      url: app.globalData.server + '/poster-info',
      data: {
        pid: notice.pid
      },
      method: "GET",
      success: function (res) {
        console.log(res)
        var tmp1 = notice
        tmp1.content = res.data.content
        tmp1.pic = app.globalData.server + res.data.pics[0].uri
        tmp1.time = timeParser.timeAgo(res.data.time)
        console.log(tmp1)
        var tmp2 = that.data.likeList
        tmp2.push(tmp1)
        console.log(tmp2)
        that.setData({
          likeList: tmp2
        })
      }
    })
  },
  update: function (res) {
    console.log(res)
    var list = res.data.list
    this.setData({
      likeList: []
    })
    for (var i = 0; i < list.length; i++) {
      list[i].avatar = avatarWrapper.wrapAvatar(list[i].avatar)
      if (list[i].type === "upvote") {
        this.pushOne(list[i])
      }
    }
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
