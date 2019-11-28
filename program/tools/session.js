const message = require('./messagebox')
function checkResponse(res) {
  if (res.data.status !== 'admitted') {
    wx.reLaunch({
      url: '/pages/login/login'
    })
    message.none.show(res.data.info)
    return false
  } else {
    return true
  }
}

exports.checkResponse = checkResponse