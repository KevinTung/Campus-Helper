// pages/tabs/tab1/tab1.js
var app = getApp()
var session = require('../../../tools/session.js')
var messageBox = require('../../../tools/messagebox.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    noHide: true,
    prePageY: 0,
    searching: false,
    value: '',
    searcherStorage: [],
    StorageFlag: false,
    maxSize: 8,
    noResult: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {

  },
  receiveImgList: function (goods) {
    this.fillData(true, goods)
    if (goods.length == 0) {
      this.setData({
        noResult: true
      })
    } else {
      this.setData({
        noResult: false
      })
    }
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
    var that = this
    wx.request({
      url: getApp().globalData.server + '/frontpage',
      method: "POST",
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID
      },
      success: function (res) {
        if (!session.checkResponse(res)) return
        that.receiveImgList(res.data.list)
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

  onTouchMove: function (e) {
    var diffY = e.changedTouches[0].clientY - this.data.prePageY
    if (diffY > 30) {
      // 下拉
      this.setData({
        noHide: true,
        prePageY: e.changedTouches[0].clientY
      })
      wx.showTabBar({
        animation: true
      })
    } else if (diffY < -30) {
      // 上拉
      this.setData({
        noHide: false,
        prePageY: e.changedTouches[0].clientY
      })
      wx.hideTabBar({
        animation: true
      })
    }
  },
  onTouchStart: function (e) {
    console.log(e)
    this.setData({
      prePageY: e.touches[0].clientY,
    })
    this.blurSearch()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  onPageScroll: function (e) {

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

  },

  focusSearch: function (e) {
    this.setData({
      searching: true,
      StorageFlag: true
    })
  },
  blurSearch: function (e) {
    this.setData({
      searching: false,
      StorageFlag: false,
      value: ''
    })
  },
  clearSearchStorage() {
    wx.removeStorageSync('history')
    this.setData({
      searcherStorage: [],
      StorageFlag: false,
    })
  },
  tapSearcherStorage(e) {
    let index = e.currentTarget.dataset.id;
    let searcherStorage = this.data.searcherStorage;
    let chooseItem = searcherStorage.splice(index, 1)[0];
    this.search(chooseItem);
    searcherStorage.unshift(chooseItem);
    this.setData({
      StorageFlag: false,
      searcherStorage: searcherStorage,
      value: chooseItem
    })
    wx.setStorageSync('history', searcherStorage);
  },
  deteleSearcherStorage(e) {
    let index = e.currentTarget.dataset.id;
    let searcherStorage = this.data.searcherStorage;
    searcherStorage.splice(index, 1);
    wx.setStorageSync('history', searcherStorage);
    this.setData({ searcherStorage: searcherStorage });
  },
  onSearch: function (e) {
    let that = this;
    let inputValue = e.detail
    let searchData = that.data.searcherStorage;
    if (inputValue != '') {
      that.search(inputValue);
      searchData = searchData.filter((item) => item !== inputValue);
      if (searchData.length >= this.data.maxSize) searchData.pop();
      searchData.unshift(inputValue);
      wx.setStorageSync('history', searchData);
      that.setData({
        StorageFlag: false,
        searcherStorage: searchData,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '输入不能为空',
        showCancel: false
      })
      that.setData({
        StorageFlag: false,
      })
    }
  },
  search: function (e) {
    console.log(e)
    var that = this
    wx.request({
      url: app.globalData.server + '/search',
      method: 'POST',
      data: {
        username: app.globalData.username,
        token: app.globalData.sessionID,
        keyword: e
      },
      success: function (res) {
        if (!session.checkResponse(res)) return
        wx.navigateTo({
          url: '/pages/search-res/search-res?list=' + JSON.stringify(res.data.result) + '&value=' + e
        })
      }
    })
  }
})
