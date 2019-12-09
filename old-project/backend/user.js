// Handle user operations (get, new, update, ...)
// uid: int, auto_increment, primary key
// username: varchar(255)
// password: varchar(255)
// nickname: varchar(255)
// gender: varchar(255)
// email: varchar(255)
// birthday: varchar(255)
// briefintro: text
// avatar: varchar(255)

var stringRandom = require('string-random')
var path = require('path')
var fs = require('fs')
var globalConfig = require('./global_config') // path of 'data' directory
var sqlquery = require('./sqlquery')

const table = 'userinfo'
const avatarIDLength = 32
const defaultAvatar = '/imgs/avatar/default.jpg'

async function getUserByName (username) {
  var res = await sqlquery.queryAsyncFirstrow('select * from ?? where username=?', [table, username])
  if (!res) {
    console.info('in user.getUserByName: sql query failed or got empty response')
  }
  return res
}

async function getUserByUID (uid) {
  var res = await sqlquery.queryAsyncFirstrow('select * from ?? where uid=?', [table, uid])
  if (!res) {
    console.info('in user.getUserByUID: sql query failed or got empty response')
  }
  return res
}

async function newUser (thisUser) {
  // thisUser must have key: username, password
  // it should not have uid
  // if there is, uid will be ignored
  if (!('nickname' in thisUser)) thisUser.nickname = thisUser.username
  if (!('gender' in thisUser)) thisUser.gender = ''
  if (!('email' in thisUser)) thisUser.email = ''
  if (!('birthday' in thisUser)) thisUser.birthday = ''
  if (!('briefintro' in thisUser)) thisUser.briefintro = ''
  if (!('avatar' in thisUser)) thisUser.avatar = '/imgs/avatar/default.jpg'
  if ('uid' in thisUser) delete thisUser.uid
  var res = await sqlquery.queryAsync('insert into ?? set ?', [table, thisUser])
  const userUpvoteTable = 'user_' + res.insertId + '_upvote'
  await sqlquery.queryAsync('create table ?? (pid int primary key)', [userUpvoteTable])
  const userFollowingTable = 'user_' + res.insertId + '_following'
  await sqlquery.queryAsync('create table ?? (uid int primary key)', [userFollowingTable])
  const userNoticeTable = 'user_' + res.insertId + '_notice'
  await sqlquery.queryAsync('create table ?? (type varchar(255), username varchar(255), pid int, commentid int default 0)', [userNoticeTable])
}

async function editUserInfo (username, info) {
  if ('username' in info) delete info.username
  if ('uid' in info) delete info.uid
  if (('nickname' in info) && (!info.nickname)) info.nickname = username
  // nickname cannot be empty
  await sqlquery.queryAsync('update ?? set ? where username=?', [table, info, username])
}

async function editAvatar (username, oriFile) {
  // returns: the new uri of the avatar

  var upfile = require('./upfile')
  var destFile = '/imgs/avatar/' + stringRandom(avatarIDLength) + path.extname(oriFile.originalname)
  var destPath = path.join(globalConfig.dataDir, destFile)
  var targetUser = await sqlquery.queryAsyncFirstrow('select avatar from ?? where username=?', [table, username])
  if (targetUser.avatar !== defaultAvatar && targetUser.avatar[0] === '/') {
    fs.unlinkSync(path.join(globalConfig.dataDir, targetUser.avatar)) // delete former avatar
  }
  upfile.moveUpFile(oriFile, destPath) // move file to 'data/imgs/avatar'
  await sqlquery.queryAsync('update ?? set avatar=? where username=?', [table, destFile, username])
  return destFile
}

function userFollowingTable (uid) {
  return 'user_' + uid + '_following'
}

async function isFollowing (uidSelf, uidTarget) {
  // returns: if self is following target, return true
  // otherwise return false
  var res = await sqlquery.queryAsyncFirstrow('select * from ?? where uid=?', [userFollowingTable(uidSelf), uidTarget])
  if (res) return true
  else return false
}

async function follow (username, tarUsername) {
  // tarUsername: the user to be followed
  // if tarUsername doesn't exist, return false
  // otherwise return true, and modify database if not followed yet

  var targetUser = await getUserByName(tarUsername)
  if (!targetUser) return false
  var thisUser = await getUserByName(username)
  if (!(await isFollowing(thisUser.uid, targetUser.uid))) {
    await sqlquery.queryAsync('insert into ?? values (?)', [userFollowingTable(thisUser.uid), targetUser.uid])
    await sqlquery.queryAsync('update ?? set cnt_follower=cnt_follower+1 where username=?', [table, tarUsername])
  }
  return true
}

async function unfollow (username, tarUsername) {
  // tarUsername: the user to be unfollowed
  // if tarUsername doesn't exist, return false
  // otherwise return true, and modify database if not followed yet

  var targetUser = await getUserByName(tarUsername)
  if (!targetUser) return false
  var thisUser = await getUserByName(username)
  if (await isFollowing(thisUser.uid, targetUser.uid)) {
    await sqlquery.queryAsync('delete from ?? where uid=?', [userFollowingTable(thisUser.uid), targetUser.uid])
    await sqlquery.queryAsync('update ?? set cnt_follower=cnt_follower-1 where username=?', [table, tarUsername])
  }
  return true
}

async function getFollowings (username) {
  // returns: the list of users followed by this user.
  var thisUser = await getUserByName(username)
  var userFollowingTable = 'user_' + thisUser.uid + '_following'
  var list = await sqlquery.queryAsync('select uid from ??', [userFollowingTable])
  if (!list) list = []
  return list
}

async function isValidPrivacy (uidSelf, uidTarget, privacy) {
  if (privacy === 0) return true
  if (privacy === 1) {
    if (await isFollowing(uidSelf, uidTarget)) return true
    else return false
  }
  if (privacy === 2) return uidSelf === uidTarget
}
exports.newUser = newUser
exports.getUserByName = getUserByName
exports.getUserByUID = getUserByUID
exports.editUserInfo = editUserInfo
exports.editAvatar = editAvatar
exports.isFollowing = isFollowing
exports.follow = follow
exports.unfollow = unfollow
exports.getFollowings = getFollowings
exports.isValidPrivacy = isValidPrivacy
