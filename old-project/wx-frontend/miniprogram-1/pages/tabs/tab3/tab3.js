// pages/tabs/tab3/tab3.js
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
    nickname: '',
    pic: {
      urls: [],
      intro: '',
      tags: [],
      privacyLevel: 0
    },
    privacy: ['所有人可见', '仅好友可见', '仅自己可见'],
    showTag: false,
    showPrivacyPicker: false
  },
  displayTagCheckbox: function () {
    wx.navigateTo({
      url: '/pages/tabs/tab3/tag-choose'
    })
  },
  displayPrivacyPicker: function () {
    this.setData({
      showPrivacyPicker: true
    })
  },
  onCancelPrivacy: function () {
    this.setData({
      showPrivacyPicker: false
    })
  },
  onConfirmPrivacy: function (e) {
    console.log(e.detail)
    this.setData({
      'pic.privacyLevel': e.detail.index,
      showPrivacyPicker: false
    })
    console.log(this.data.pic.privacyLevel)
  },
  onLoad: function () {
    this.setData({
      selectFile: this.selectFile.bind(this)
    })
  },
  initData: function (res) {
    const data = res.data
    console.log(data)
    this.setData({
      avatar: avatarWrapper.wrapAvatar(data.userinfo.avatar),
      nickname: data.userinfo.nickname
    })
    console.log(this.data)
  },
  onPicIntroChange: function (e) {
    this.setData({
      'pic.intro': e.detail.value
    })
  },
  selectFile (files) {
    console.log('files', files)
    // 返回false可以阻止某次文件上传
  },
  choosePic: function (e) {
    var cururls = e.detail.tempFilePaths
    var curfiles = []
    for (var i = 0; i < cururls.length; ++i) {
      curfiles.push({
        url: cururls[i]
      })
    }
    this.setData({
      'pic.urls': curfiles
    })
    console.log(this.data.pic)
  },
  uploadError (e) {
    console.log('upload error', e.detail)
  },
  uploadSuccess (e) {
    console.log('upload success', e.detail)
  },
  preview: function (e) {
    if (this.data.pic.urls == '') { return }
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.pic.urls // 需要预览的图片http链接列表
    })
  },
  clear: function () {
    this.setData({
      pic: {
        urls: [],
        intro: '',
        tags: [],
        privacyLevel: 0
      },
      privacy: ['所有人可见', '仅自己可见', '仅好友可见'],
      showTag: false,
      showPrivacyPicker: false
    })
  },
  publish: function () {
    var that = this
    if (this.data.pic.urls == '') return
    console.log(this.data.pic.tags)
    wx.uploadFile({
      url: app.globalData.server + '/upload-poster',
      filePath: this.data.pic.urls[0].url,
      name: 'images',
      formData: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        time: new Date().getTime(),
        content: this.data.pic.intro,
        privacy: this.data.pic.privacyLevel,
        tags: JSON.stringify(this.data.pic.tags)
      },
      success (res) {
        res.data = JSON.parse(res.data)
        console.log(res)
        if (!session.checkResponse(res)) return
        messageBox.success.show(res.data.info)
        console.log(res)
        console.log('uploaded')
        that.clear()
        wx.switchTab({
          url: '/pages/tabs/tab1/tab1'
        })
      }
    })
  },
  cancel: function () {
    this.clear()
    wx.switchTab({
      url: '/pages/tabs/tab1/tab1'
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
    wx.request({
      url: app.globalData.server + '/user-info-pri',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      method: 'POST',
      success: this.initData
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
