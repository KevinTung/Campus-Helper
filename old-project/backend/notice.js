var user = require('./user')
var sqlquery = require('./sqlquery')

async function wrapFromDatabase (notifica) {
  var thisUser = await user.getUserByName(notifica.username)
  notifica.nickname = thisUser.nickname
  notifica.avatar = thisUser.avatar
}
function userNoticeTable (uid) {
  return 'user_' + uid + '_notice'
}
async function commentPic (targetUid, actionUsername, pid, commentid) {
  var notification = {
    type: 'comment_pic',
    username: actionUsername,
    pid: pid,
    commentid: commentid
  }
  await sqlquery.queryAsync('insert into ?? set ?', [userNoticeTable(targetUid), notification])
}

async function commentComment (targetUsername, actionUsername, pid, commentid) {
  var targetUser = await user.getUserByName(targetUsername)
  var notification = {
    type: 'comment_comment',
    username: actionUsername,
    pid: pid,
    commentid: commentid
  }
  await sqlquery.queryAsync('insert into ?? set ?', [userNoticeTable(targetUser.uid), notification])
}

async function upvote (targetUid, actionUid, pid) {
  var actionUser = await user.getUserByUID(actionUid)
  var notification = {
    type: 'upvote',
    username: actionUser.username,
    pid: pid,
    commentid: 0
  }
  await sqlquery.queryAsync('insert into ?? set ?', [userNoticeTable(targetUid), notification])
}

async function count (uid) {
  return (await sqlquery.queryAsyncFirstrow('select count(*) as cnt from ??', [userNoticeTable(uid)])).cnt
}
async function clear (uid, type) {
  await sqlquery.queryAsync('delete from ?? where type=?', [userNoticeTable(uid), type])
}
async function getList (username, uid) {
  var res = await sqlquery.queryAsync('select * from ?? where username!=?', [userNoticeTable(uid), username])
  var len = res.length
  for (var i = 0; i < len; ++i) await wrapFromDatabase(res[i])
  return res
}

exports.commentPic = commentPic
exports.commentComment = commentComment
exports.upvote = upvote
exports.count = count
exports.clear = clear
exports.getList = getList
