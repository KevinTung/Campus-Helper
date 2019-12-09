var sqlquery = require('./sqlquery')
var notice = require('./notice')
var search = require('./search')
var user = require('./user')
// the columns in table 'posters':
// uid: int, writer's uid
// pid: int, auto increment, primary key
// time: bigint, ms time stamp
// content: text, content of a poster
// pics: text, json list of objects: {uri: string(uri of picture), width: number(width of picture), height: number(height of picture)}

const table = 'posters'

function wrapFromDatabase (poster) {
  poster.pics = JSON.parse(poster.pics)
}

function wrapToDatabase (poster) {
  poster.pics = JSON.stringify(poster.pics)
}

function posterCommentTable (pid) {
  return 'poster_' + pid + '_comment'
}

async function getListbyUID (uid, privacy) {
  // sorted by pid, increasingly
  // if failed, return empty array
  var pList = await sqlquery.queryAsync('select * from ?? where uid=? and privacy<=? order by pid asc', [table, uid, privacy])
  var res = []
  if (pList) {
    var count = pList.length
    for (var i = 0; i < count; ++i) {
      wrapFromDatabase(pList[i])
    }
    res = pList
  }
  return res
}

async function getPosterCntbyUID (uid) {
  // returns: the number of poster published by this user
  // including private posters
  var res = await sqlquery.queryAsyncFirstrow('select count(uid) from ?? where uid=?', [table, uid])
  var cnt = res['count(uid)']
  return cnt
}

async function getPosterByPID (pid) {
  // find a certain poster by pid
  // return the row object
  // if search failed, return null
  var posterrow = await sqlquery.queryAsyncFirstrow('select * from ?? where pid=?', [table, pid])
  if (posterrow) wrapFromDatabase(posterrow)
  return posterrow
}

async function add (posterInfo) {
  // add one new poster to database
  // posterInfo is a poster object, but without pid
  // pid will be allocated by database
  // if it has pid, it will be ignored, and reallocated by database
  // posterInfo.uid must be valid
  // returns: pid
  if ('pid' in posterInfo) delete posterInfo.pid
  wrapToDatabase(posterInfo)
  var res = await sqlquery.queryAsync('insert into ?? set ?', [table, posterInfo])
  var pid = res.insertId
  await sqlquery.queryAsync('create table ?? (id int auto_increment primary key, username varchar(255), time bigint, content text, replyto int default 0)', [posterCommentTable(pid)])
  await search.add(pid, {
    content: posterInfo.content,
    pid: pid
  })
  return pid
}

async function remove (uid, pid) {
  // find a poster specified by pid
  // delete it
  // on success: return true
  // otherwise(not found): return false
  var posterrow = await getPosterByPID(pid)
  if (!posterrow) return false
  if (posterrow.uid !== uid) return false
  var fs = require('fs')
  var path = require('path')
  var globalConfig = require('./global_config')
  for (const pic of posterrow.pics) {
    fs.unlinkSync(path.join(globalConfig.dataDir, pic.uri)) // delete images
  }
  await sqlquery.queryAsync('delete from ?? where pid=?', [table, pid])
  await sqlquery.queryAsync('drop table ??', [posterCommentTable(pid)])
  await search.remove(pid)
  return true
}

async function getFullList (privacy) {
  // get all the posters of all users with the given privacy
  // sorted by pid, increasingly
  var fullList = await sqlquery.queryAsync('select * from ?? where privacy<=? order by pid asc', [table, privacy])
  if (fullList) {
    for (var poster of fullList) {
      wrapFromDatabase(poster)
    }
    return fullList
  } else return []
}

// ==== user-poster interactions ====
var userTable = 'userinfo'

function userUpvoteTable (uid) {
  return 'user_' + uid + '_upvote'
}
async function hasUpvoted (uid, pid) {
  // returns: if user has upvoted target poster, return true
  // otherwise return false
  var res = await sqlquery.queryAsyncFirstrow('select * from ?? where pid=?', [userUpvoteTable(uid), pid])
  if (res) return true
  else return false
}

async function upvote (uid, pid) {
  // user upvotes a poster
  // on success: return true
  // pid not existing: return false
  var posterrow = await getPosterByPID(pid)
  if (!posterrow) return false
  if (!(await hasUpvoted(uid, pid))) {
    await sqlquery.queryAsync('insert into ?? values(?)', [userUpvoteTable(uid), pid])
    await sqlquery.queryAsync('update ?? set cnt_upvote=cnt_upvote+1 where pid=?', [table, pid])
    var uidTarget = posterrow.uid
    await sqlquery.queryAsync('update ?? set cnt_upvoted=cnt_upvoted+1 where uid=?', [userTable, uidTarget])
    await notice.upvote(uidTarget, uid, pid)
  }
  return true
}

async function addComment (pid, comment) {
  // return false if pid does not exist or argument is not valid
  // otherwise add comment and return true
  if ((!pid) || (!comment)) return false
  var posterrow = await getPosterByPID(pid)
  if (!posterrow) return false
  await sqlquery.queryAsync('update ?? set cnt_comment=cnt_comment+1 where pid=?', [table, pid])
  var res = await sqlquery.queryAsync('insert into ?? set ?', [posterCommentTable(pid), comment])
  var commentid = res.insertId
  await notice.commentPic(posterrow.uid, comment.username, posterrow.pid, commentid)
  if (comment.replyto > 0) {
    var repliedComment = await sqlquery.queryAsyncFirstrow('select * from ?? where id=?', [posterCommentTable(pid), comment.replyto])
    if (repliedComment) await notice.commentComment(repliedComment.username, comment.username, posterrow.pid, commentid)
  }
  return true
}
async function getCommentList (pid) {
  // get list of comments of the poster specified by pid, order by id increasingly
  // if pid does not exist, return empty array
  var posterrow = await getPosterByPID(pid)
  if (!posterrow) return []
  var res = await sqlquery.queryAsync('select * from ?? order by id asc', [posterCommentTable(pid)])
  return res
}
async function getFirstComment (pid) {
  // get the first comment of the poster specified by pid
  // if pid does not exist or no comments, return null
  var posterrow = await getPosterByPID(pid)
  if (!posterrow) return null
  var res = await sqlquery.queryAsyncFirstrow('select * from ?? where id=1', [posterCommentTable(pid)])
  if (res) return res
  else return null
}

async function privacyFilter (username, pidList) {
  var resList = []
  var curUser = await user.getUserByName(username)
  for (var pid of pidList) {
    var curPoster = await getPosterByPID(pid)
    if (await user.isValidPrivacy(curUser.uid, curPoster.uid, curPoster.privacy)) resList.push(curPoster)
  }
  return resList
}

exports.getListbyUID = getListbyUID
exports.getPosterCntbyUID = getPosterCntbyUID
exports.getPosterByPID = getPosterByPID
exports.add = add
exports.remove = remove
exports.getFullList = getFullList
exports.hasUpvoted = hasUpvoted
exports.upvote = upvote
exports.addComment = addComment
exports.getCommentList = getCommentList
exports.getFirstComment = getFirstComment
exports.privacyFilter = privacyFilter
