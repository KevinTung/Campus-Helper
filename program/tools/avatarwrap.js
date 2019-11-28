function wrapAvatar (avatar) {
  if (avatar[0] === '/')
  {
    var app = getApp()
    return app.globalData.server + avatar
  } else {
    return avatar
  }
}

exports.wrapAvatar = wrapAvatar
