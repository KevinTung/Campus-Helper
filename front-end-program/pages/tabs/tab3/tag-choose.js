// pages/tabs/tab3/tag-choose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [{
      text: '宿舍',
      disabled: false,
      children: [{
        text: '紫荆1',
        id: 1,
        disabled: false
      }, {
          text: '紫荆2',
        id: 2,
        disabled: false
      }, {
        text: '紫荆3',
        id: 3,
        disabled: false
      }]
    }, {
      text: '食堂',
      disabled: false,
      children: [{
        text: '桃李',
        id: 4,
        disabled: false
      }, {
        text: '紫荆',
        id: 5,
        disabled: false
      }, {
        text: '观畴',
        id: 6,
        disabled: false
      }]
    }],

    mainActiveIndex: 0,
    activeId: [],
    max: 5,
    tags: [],
    custom_tags: [],
    inputValue: ""
  },

  onCustom: function (e) {
    console.log(e)
    this.setData ({
      showCustom: true
    })
  },

  onCustomConfirm: function (e) {
    console.log(e.detail)
    var newtag = e.detail.value
    var list = this.data.custom_tags
    list.push(newtag)
    console.log(list)
    this.setData ({
      custom_tags: list,
      inputValue: "",
      showCustom: false
    })
  },

  deleteCustomTag: function (e) {
    console.log(e.detail)
    var list = this.data.custom_tags
    list.splice(e.detail.id, 1)
    this.setData ({
      custom_tags: list
    })
  },

  cancel: function () {
    wx.navigateBack({
      delta: 1
    })
  },

  confirm: function () {
    var pages = getCurrentPages()
    var prevPage = pages[pages.length - 2]
    // 此页面只能由tab3打开，prevPage必定为tab3，无需多加验证
    var tags = this.data.tags.concat(this.data.custom_tags)
    prevPage.setData({
      'pic.tags': tags
    })
    wx.navigateBack({
      delta: 1
    })
  },

  addTags: function (text) {
    var _tags = this.data.tags
    _tags.push(text)
    console.log(_tags)
    this.setData({
      tags: _tags
    })
  },

  deleteTags: function (index) {
    var _tags = this.data.tags
    _tags.splice(index, 1)
    console.log(_tags)
    this.setData({
      tags: _tags
    })
  },

  onClickNav: function ({ detail = {} }) {
    this.setData({
      mainActiveIndex: detail.index || 0
    })
    console.log(detail);
  },

  onClickItem: function ({ detail = {} }) {
    const { activeId } = this.data
    
    const index = activeId.indexOf(detail.id)
    if (index > -1) {
      activeId.splice(index, 1)
      this.deleteTags(index)
    } else {
      activeId.push(detail.id)
      this.addTags(detail.text)
    }
    this.setData({ activeId })
    console.log(detail)
  },

  onChoose: function (e) {
    var index = e.currentTarget.id
    console.log(index)
    // this.data.tags[index].checked=true
    var key = 'tags[' + index + '].checked'
    var target = {}
    target[key] = true
    this.setData(target)
    console.log(this.data.tags[index])
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
