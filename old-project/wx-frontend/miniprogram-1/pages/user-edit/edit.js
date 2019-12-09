// pages/user/edit/edit.js
var app = getApp()
var avatarWrapper = require('../../tools/avatarwrap.js')
const session = require('../../tools/session.js')
const messageBox = require('../../tools/messagebox')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatar: '',
    userInfo: {},
    genderArray: [
      { name: '男' },
      { name: '女' }
    ],
    showGenderPicker: false,
    showBirthdayPicker: false,
    currentDate: new Date().getTime(),
    showDialog: false
  },
  chooseImgAndUpload: function () {
    console.log('choose image and upload')
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log('success')
        wx.uploadFile({
          url: app.globalData.server + '/user-upload-avatar',
          filePath: res.tempFilePaths[0],
          name: 'images',
          formData: {
            username: app.globalData.username,
            token: app.globalData.sessionID
          },
          success (res) {
            res.data = JSON.parse(res.data)
            if (!session.checkResponse(res)) return
            const data = res.data
            messageBox.success.show(data.info)
            that.setData({
              avatar: avatarWrapper.wrapAvatar(data.avatar)
            })
          }
        })
        console.log('uploaded')
      }
    })
  },
  displayGenderPicker: function () {
    this.setData({
      showGenderPicker: true
    })
  },
  displayBirthdayPicker: function () {
    this.setData({
      showBirthdayPicker: true,
      currentDate: new Date().getTime()
    })
  },
  chooseGender: function (e) {
    console.log('choose gender')
    var that = this
    wx.request({
      url: app.globalData.server + '/user-edit',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        userinfo: {
          gender: e.detail.name
        }
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success (res) {
        if (!session.checkResponse(res)) return
        that.setData({
          'userInfo.gender': e.detail.name,
          showGenderPicker: false
        })
      }
    })
  },
  chooseBirthday: function (e) {
    console.log('choose birthday')
    var that = this
    var dateStamp = new Date(e.detail)
    var year = dateStamp.getFullYear()
    var month = dateStamp.getMonth() + 1
    var date = dateStamp.getDate()
    if (month < 10) month = '0' + month
    if (date < 10) date = '0' + date
    var birthday = year + '-' + month + '-' + date
    console.log(birthday)
    wx.request({
      url: app.globalData.server + '/user-edit',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        userinfo: {
          birthday: birthday
        }
      },
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      success (res) {
        if (!session.checkResponse(res)) return
        that.setData({
          'userInfo.birthday': birthday,
          showBirthdayPicker: false
        })
      }
    })
  },
  onCancelGender: function () {
    this.setData({
      showGenderPicker: false
    })
  },
  onCancelBirthday: function () {
    this.setData({
      showBirthdayPicker: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  initData: function (res) {
    console.log(res.data)
    if (!session.checkResponse(res)) return
    this.setData({
      avatar: avatarWrapper.wrapAvatar(res.data.userinfo.avatar),
      userInfo: res.data.userinfo
    })
  },
  popDialog: function (e) {
    this.setData({
      showDialog: true
    })
  },
  logout: function (e) {
    this.setData({
      showDialog: false
    })
    wx.reLaunch({
      url: '/pages/login/login',
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
