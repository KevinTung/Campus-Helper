// components/WaterFallView_single/WaterFallView_single.js
var picList = []
var height = 0
var itemWidth = 0; var maxHeight = 0
var avatarWrapper = require('../../tools/avatarwrap.js')

Component({
  properties: {},
  data: {
    picList: [],
    pids: []
  },

  attached: function () {
    wx.getSystemInfo({
      success: (res) => {
        itemWidth = res.windowWidth / 12.0 * 10.5
        maxHeight = itemWidth / 0.8
      }
    })
  },

  methods: {
    /**
     * 填充数据
     */
    fillData: function (isPull, listData) {
      console.log(isPull)
      console.log(listData)
      if (isPull) { // 是否下拉刷新，是的话清除之前的数据
        picList = []
        height = 0
      }
      var pids = []
      for (let i = 0, len = listData.length; i < len; i++) {
        const tmp = listData[i]
        tmp.width = tmp.pics[0].width
        tmp.height = tmp.pics[0].height
        tmp.itemWidth = itemWidth
        tmp.avatar = avatarWrapper.wrapAvatar(tmp.avatar)
        tmp.img = getApp().globalData.server + tmp.pics[0].uri
        tmp.time = new Date(parseInt(tmp.time)).toLocaleString()
        const per = tmp.width / tmp.itemWidth
        tmp.itemHeight = tmp.height / per
        if (tmp.itemHeight > maxHeight) {
          tmp.itemHeight = maxHeight
        }
        picList.push(tmp)
        height += tmp.itemHeight
        pids.push(tmp.pid)
      }

      this.setData({
        picList: picList,
        pids: pids
      })
    },
    upvote: function (e) {
      var idChosen = e.currentTarget.id
      var pid = idChosen.split('&')[0]
      this.triggerEvent('upvote', {
        pid: pid
      })
    },
    comment: function (e) {
      var idChosen = e.currentTarget.id
      var pid = idChosen.split('&')[0]
      this.triggerEvent('comment', {
        pid: pid
      })
    },
    toPicDetail: function (e) {
      console.log(e)
      for (var pidIndex in this.data.pids) {
        if (this.data.pids[pidIndex] == e.currentTarget.id) {
          wx.navigateTo({
            url: '/pages/pic-detail/pic-detail?pids=' + JSON.stringify(this.data.pids) + '&curPidIndex=' + pidIndex
          })
          break
        }
      }
    }
  }
})
