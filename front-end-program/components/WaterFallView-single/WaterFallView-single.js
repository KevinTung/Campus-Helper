// components/WaterFallView_single/WaterFallView_single.js
var picList = []
var height = 0
var itemWidth = 0; var maxHeight = 0
var avatarWrapper = require('../../tools/avatarwrap.js')

Component({
  properties: {},
  data: {
    picList: [],
    showDialog: false,
    pids: []
  },

  attached: function () {
    wx.getSystemInfo({
      success: (res) => {
        const percentage = 750 / res.windowWidth
        const margin = 160 / percentage
        itemWidth = res.windowWidth - margin
        maxHeight = itemWidth / 0.8
      }
    })
  },

  methods: {
    /**
     * 填充数据
     */
    fillData: function (isPull, listData, showDelete) {
      console.log(isPull)
      console.log(listData)
      if (isPull) { // 是否下拉刷新，是的话清除之前的数据
        picList = []
        height = 0
      }
      var pids = []
      for (let i = 0, len = listData.length; i < len; i++) {
        const tmp = listData[i]
        tmp.showDelete = showDelete 
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
    onArrowClicked: function (e) {
      console.log(e)
      this.setData ({
        showDialog: true,
        pidChosen: e.currentTarget.id
      })
    },
    onDelete: function (e) {
      console.log(this.data.pidChosen)
      this.triggerEvent('delete', {
        pid: this.data.pidChosen
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
