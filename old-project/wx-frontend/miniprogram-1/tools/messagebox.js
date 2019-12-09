function show (content) {
  wx.showToast({
    title: content,
    icon: this.icontype,
    duration: 2000
  })
}

exports.success = {
  icontype: 'success',
  show: show
}

exports.none = {
  icontype: 'none',
  show: show
}

exports.loading = {
  icontype: 'loading',
  show: show
}


