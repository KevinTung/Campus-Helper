//timeAgo方法将时间戳转为几分钟几小时前
function timeAgo (dateTimeStamp) {
  var minute = 1000 * 60  //dataTimeStamp时间戳是毫秒
  var hour = minute * 60
  var day = hour * 24
  var week = day * 7
  var month = day * 30

  var now = new Date().getTime()  //获取当前时间（毫秒）
  var timeDiff = now - dateTimeStamp  //时间差

  if (timeDiff < 0)  return 

  //计算时间差的分、时、天、周、月
  var minDiff = timeDiff / minute
  var hourDiff = timeDiff / hour
  var dayDiff = timeDiff / day
  var weekDiff = timeDiff / week
  var monthDiff = timeDiff / month

  var res = ""
  if (monthDiff >= 1)  res = parseInt(monthDiff) + "月前"
  else if (weekDiff >=1 )  res = parseInt(weekDiff) + "周前"
  else if (dayDiff >= 1)  res = parseInt(dayDiff) + "天前"
  else if (hourDiff >= 1)  res = parseInt(hourDiff) + "小时前"
  else if (minDiff >= 1)  res = parseInt(minDiff) + "分钟前"
  else res = "刚刚"
  console.log(res)
  return res
}

//timeStandard方法将时间戳转为标准时间xxxx年xx月xx日 xx:xx:xx 
function timeStandard (dateTimeStamp) {
  var res = new Date(parseInt(dateTimeStamp)).toLocaleString()
  console.log(res)
  return res
}

exports.timeAgo = timeAgo 
exports.timeStandard = timeStandard