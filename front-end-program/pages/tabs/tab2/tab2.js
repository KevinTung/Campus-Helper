// pages/tabs/tab2/tab2.js
var app = getApp()
var session = require('../../../tools/session.js')
var messageBox = require('../../../tools/messagebox.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInput: false,
    inputValue: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  receiveImgList: function (goods) {
    if (!session.checkResponse(goods)) return
    this.fillData(true, goods.data.list)
  },
  fillData: function (isPull, goods) {
    var view = this.selectComponent('#waterFallView')
    view.fillData(isPull, goods)
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
      url: app.globalData.server + '/poster/list-following',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      method: 'POST',
      success: this.receiveImgList
    })
  },
  onUpvote: function (e) {
    console.log(e)
    var that = this
    wx.request({
      url: app.globalData.server + '/poster/upvote',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        pid: e.detail.pid
      },
      method: 'POST',
      success: function (res) {
        if (!session.checkResponse(res)) return
        messageBox.success.show(res.data.info)
        that.onShow()
      }
    })
  },
  onComment: function (e) {
    console.log(e)
    this.setData({
      showInput: true,
      chosenPid: e.detail.pid
    })
  },
  onConfirm: function (e) {
    console.log(e.detail)
    var that = this
    this.setData({
      showInput: false,
      inputValue: ''
    })
    wx.request({
      url: app.globalData.server + '/poster/comment',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        pid: that.data.chosenPid,
        content: e.detail.value,
        replyto: 0,
        time: new Date().getTime()
      },
      method: 'POST',
      success: function (res) {
        if (!session.checkResponse(res)) return
        that.onShow()
      }
    })
  },
  clickOverlay: function (e) {
    this.setData({
      showInput: false
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
    wx.request({
      url: '',
      header: {
        'content-type': 'application/json'
      },
      success (res) {
        this.fillData(true, res)
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    console.log(e)
    var title = '来自PicSol的分享'
    if (e.from === 'button') {
      var info = e.target.id.split('&')
      var path = '/pages/pic-detail/pic-detail?pid=' + info[0]
      return {
        title: title,
        path: path,
        imageUrl: info[1]
      }
    } else {
      return {
        title: title
      }
    }
  }
})
