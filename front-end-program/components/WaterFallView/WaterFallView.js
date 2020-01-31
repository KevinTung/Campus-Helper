// Component/WaterFallView.js
var leftList = []// 左侧集合
var rightList = []// 右侧集合
var leftHight = 0; var rightHight = 0
var itemWidth = 0; var maxHeight = 0
var avatarWrapper = require('../../tools/avatarwrap.js')

Component({
  properties: {},
  data: {
    list: [{ 'pid': 1, 'test': 100 }, { 'pid': 2, 'test': "200" }],
    pids: []
  },

  attached: function () {
    wx.getSystemInfo({
      success: (res) => {
        const percentage = 750 / res.windowWidth
        const margin = 100 / percentage
        itemWidth = (res.windowWidth - margin) / 2
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
        leftList = []
        rightList = []
        leftHight = 0
        rightHight = 0
      }
      var pids = []
      for (let i = 0, len = listData.length; i < len; i++) {
        const tmp = listData[i]
        tmp.width = tmp.pics[0].width
        tmp.height = tmp.pics[0].height
        tmp.itemWidth = itemWidth
        tmp.avatar = avatarWrapper.wrapAvatar(tmp.avatar)
        tmp.img = getApp().globalData.server + tmp.pics[0].uri
        const per = tmp.width / tmp.itemWidth
        tmp.itemHeight = tmp.height / per
        if (tmp.itemHeight > maxHeight) {
          tmp.itemHeight = maxHeight
        }

        if (leftHight <= rightHight) {
          leftList.push(tmp)
          leftHight += tmp.itemHeight
        } else {
          rightList.push(tmp)
          rightHight += tmp.itemHeight
        }
        pids.push(tmp.pid)
      }

      this.setData({
        leftList: leftList,
        rightList: rightList,
        pids: pids
      })
    },
    toPicDetail: function (e)
    {
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
