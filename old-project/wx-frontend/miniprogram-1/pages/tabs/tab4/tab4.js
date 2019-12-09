// pages/tabs/tab4/tab4.js
// var NIM = require('../../../NIM/NIM_Web_NIM_weixin_v6.10.0.js')
var SHA1 = require('../../../lib/crypto-js/sha1')
var session = require("../../../tools/session.js")
var avatarWrapper = require('../../../tools/avatarwrap.js')
var timeParser = require('../../../tools/timeparser.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chatList: [], //聊天列表的username//av
    messageList: [], // [{account,nick,lastestMsg,type,timestamp,displayTime,message,unread,status}]
    msglist: [{
      username: 'a',
      message: 'hello',
    }, {
      username: 'b',
      message: 'world',
    }, {
      username: 'c',
      message: '!',
    }]
  },

  displayComments: function () {
    wx.navigateTo({
      url: '/pages/tabs/tab4/my-comment'
    })
  },
  displayLikes: function () {
    wx.navigateTo({
      url: '/pages/tabs/tab4/like'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request ({
    //   url: app.globalData.server + '', //获取account与token
    //   data: {
    //     username: app.globalData.username,
    //     token: app.globalData.sessionID
    //   },
    //   method: "POST",
    //   success: this.init
    // })
  },
  init: function (res) {
    // const data = res.data
    // app.globalData.nim = NIM.getInstance({
    //   appKey: app.globalData.appKey,
    //   account: data.account,
    //   token: data.token,
    //   onconnect: this.onConnect,
    //   ondisconnect: this.onDisconnect,
    //   onwillreconnect: this.onWillReconnect,
    // })
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
    wx.request ({
      url: app.globalData.server + '/im/get',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      method: "POST",
      success: function (res) {
        console.log(res)
        if(!session.checkResponse(res))return
        var list = res.data.list
        for (var msg of list) {
          msg.avatar = avatarWrapper.wrapAvatar(msg.avatar)
          msg.message.time = timeParser.timeAgo(msg.message.time)
          if (msg.message._from === app.globalData.username) msg.chatTo = msg.message._to
          else msg.chatTo = msg.message._from
        }
        that.setData ({
          chatList: res.data.list
        })
      }
    })//获取聊天记录列表
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
