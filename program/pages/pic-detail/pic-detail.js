// 圖片詳情頁
var app = getApp()
var session = require('../../tools/session.js')
var messageBox = require('../../tools/messagebox.js')
var avatarWrapper = require('../../tools/avatarwrap.js')
var windowHeight = wx.getSystemInfoSync().windowHeight
var windowWidth = wx.getSystemInfoSync().windowWidth

Page({
  data: {
    userInfo: {},
    headUrl: '',
    picUrl: '',
    time: '',
    follow: false,
    showButtons: true,
    showInput: false,
    upvoted: false,
    inputValue: '',
    pids: [],
    curPidIndex: 0,
    prePageY: 0,
    prePageX: 0
  },
  preview: function (e) {
    if (this.data.picUrl == '')  return 
    var picUrls = []
    picUrls.push(this.data.picUrl)
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: picUrls // 需要预览的图片http链接列表
    })
  },
  upvote: function (e) {
    if (this.data.upvoted) return
    var that = this
    wx.request({
      url: app.globalData.server + '/poster/upvote',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        pid: this.data.pid
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (!session.checkResponse(res)) return
        messageBox.success.show(res.data.info)
        if (res.data.result == 'success') {
          that.setData({
            upvoted: true
          })
          that.getUpvote() 
        }
      }
    })
  },
  getUpvote: function () {
    var that = this
    wx.request({
      url: app.globalData.server + '/poster-info',
      data: {
        pid: that.data.pid
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          cnt_upvote: res.data.cnt_upvote
        })
      }
    })
  },
  comment: function(e) {
    console.log(e)
    this.setData({
      showInput: true,
      chosenId: 0
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
        pid: that.data.pid,
        content: e.detail.value,
        replyto: that.data.chosenId,
        time: new Date().getTime()
      },
      method: 'POST',
      success: function (res) {
        if (!session.checkResponse(res)) return
        that.onLoad({
          pids: JSON.stringify(that.data.pids),
          curPidIndex: that.data.curPidIndex
        })
      }
    })
  },
  clickOverlay: function (e) {
    this.setData({
      showInput: false
    })
  },
  toUserPage: function () {
    wx.navigateTo({
      url: '/pages/user-detail/user-detail?username=' + this.data.userInfo.username
    })
  },
  followTapped: function (e) {
    var newState = !this.data.follow // 与原来关注状态相反
    console.log(newState)
    var state = newState? 'follow' : 'unfollow'
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
            follow: newState,
          })
        }
        console.log(that.data.follow)
      }
    })
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (e) {
    e.pids = JSON.parse(e.pids)
    this.setData({
      pids: e.pids,
      curPidIndex: e.curPidIndex,
      topComment: e.topComment
    })
    wx.request({
      url: app.globalData.server + '/poster-info',
      data: {
        pid: e.pids[e.curPidIndex]
      },
      method: 'GET',
      success: this.getInitResponse
    })
    this.getCommentList(e.pids[e.curPidIndex])
  },
  getCommentList: function (pid) {
    var view = this.selectComponent('#comment')
    var that = this
    wx.request({
      url: app.globalData.server + '/poster/comment/list',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        pid: pid
      },
      method: "POST",
      success: function (res) {
        console.log(res)
        if (!session.checkResponse(res)) return
        view.initData(res.data.comments, that.data.topComment)
        wx.createSelectorQuery().select('#comment').boundingClientRect(function (rect) {
          if (that.data.topComment) {
            console.log(rect)
            wx.pageScrollTo({
              scrollTop: rect.top,
            })
          }
        }).exec()
      }
    })
  },
  getInitResponse: function (res) {
    console.log(res)
    var date = new Date(res.data.time)
    this.setData({
      pid: res.data.pid,
      picUrl: app.globalData.server + res.data.pics[0].uri,
      time: date.toLocaleString(),
      picTitle: res.data.content,
      tags: JSON.parse(res.data.tags),
      cnt_comment: res.data.cnt_comment,
      cnt_repost: res.data.cnt_repost,
      cnt_upvote: res.data.cnt_upvote
    })
    wx.request({
      url: app.globalData.server + '/user-info-pub',
      data: {
        uid: res.data.uid
      },
      method: 'GET',
      success: this.initData
    })
  },
  initData: function (res) {
    var that = this
    const data = res.data
    console.log(res)
    this.setData({
      userInfo: res.data,
      headUrl: avatarWrapper.wrapAvatar(data.avatar),
      showButtons: app.globalData.username !== data.username
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
        console.log(res.data)
        if (!session.checkResponse(res)) return
        if (res.data.result == 'yes') {
          that.setData({
            follow: true
          })
        }
      }
    })
    wx.request({
      url: app.globalData.server + '/poster/isupvoted',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        pid: this.data.pid
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (!session.checkResponse(res)) return
        if (res.data.result == 'yes') {
          that.setData({
            upvoted: true
          })
        }
      }
    })
    // var comment = this.selectComponent('#comment');
    // comment.init();
  },
  reply: function (e) {
    this.setData({
      chosenId: e.detail.replyto,
      showInput: true
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

  onTouchStart: function (e) {
    this.setData({
      prePageY: e.touches[0].clientY,
      prePageX: e.touches[0].clientX
    })
  },
  onTouchEnd: function (e) {
    var diffY = e.changedTouches[0].clientY - this.data.prePageY
    var diffX = e.changedTouches[0].clientX - this.data.prePageX
    console.log(diffY)
    console.log(diffX)
    if (diffY < -(windowHeight * 0.35)) {
      this.onLoad({
        pids: JSON.stringify(this.data.pids),
        curPidIndex: (this.data.curPidIndex + 1) % this.data.pids.length
      })
    } else if (diffY > windowHeight * 0.35) {
      this.onLoad({
        pids: JSON.stringify(this.data.pids),
        curPidIndex: (this.data.curPidIndex - 1 + this.data.pids.length) % this.data.pids.length
      })
    }
    if (diffX < -(windowWidth * 0.5)) {
      this.toUserPage()
    }
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  onPageScroll: function (e) {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    console.log(e)
    var title = '来自PicSol的分享'
    if (e.from === 'button') {
      var path = '/pages/pic-detail/pic-detail?pid=' + this.data.pid
      return {
        title: title,
        path: path,
        imageUrl: this.data.picUrl
      }
    } else {
      return {
        title: title
      }
    }
  }
})
