// pages/chat/chat.js
var app = getApp()
var avatarWrapper = require("../../tools/avatarwrap.js")
var session = require("../../tools/session.js")
var timeParser = require("../../tools/timeparser.js")
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    chatTo: '',
    sendType: 0,
    inputValue: '',
    targetAvatar: '',
    avatar: '',
    msgList: [],
    timer: -1
  },
  inputChange: function (e) {
    console.log(e.detail.value)
    this.setData ({
      inputValue: e.detail.value
    })
  },
  sendMessage: function () {
    var that = this
    var message = {}
    message.content = this.data.inputValue
    message.time = new Date().getTime()
    message._from = app.globalData.username
    message._to = this.data.chatTo
    console.log(message)
    var tmpList = this.data.msgList
    tmpList.push(message)
    this.setData({
      msgList: tmpList
    })
    wx.request({
      url: app.globalData.server + '/im/send',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        _to: this.data.chatTo,
        content: message.content,
        time: message.time
      },
      method: "POST",
      success: function (res) {
        console.log(res)
        if (!session.checkResponse(res)) return
        that.setData ({
          inputValue: ''
        })
      }
    })
  },
  getMessage: function () {
    var that = this
    wx.request ({
      url: app.globalData.server + '/im/with',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        targetuser: this.data.chatTo
      },
      method: "POST",
      success: function (res) {
        console.log(res)
        that.setData ({
          msgList: res.data.list,
          targetAvatar: avatarWrapper.wrapAvatar(res.data.avatar)
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData ({
      chatTo: options.chatTo
    })
    console.log(this.data.chatTo)
    wx.setNavigationBarTitle({
      title: "和@" + this.data.chatTo + "聊天",
    })
    //设置naviagationTitleBar
    this.getMessage()
    wx.request({
      url: app.globalData.server + '/user-info-pri',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      method: 'POST',
      success: function (res) {
        console.log(res)
        that.setData ({
          avatar: avatarWrapper.wrapAvatar(res.data.userinfo.avatar)
        })
      }
    })
    var t = setInterval(this.getMessage, 15000)
    this.setData({
      timer: t
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
    if (this.data.timer >= 0) {
      clearInterval(this.data.timer)
      this.setData({
        timer: -1
      })
    }
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