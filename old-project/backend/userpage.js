// Handle user-relevant requests

var logger = require('./console_log')
var user = require('./user')
var verifier = require('./verify')
var birthdayParser = require('./birthday_parser')

// adding extended userinfo
// some information won't be stored, but be calculated when being asked for.
async function addExtendedInfo (thisUser) {
  if (thisUser.birthday) { // if birthday exists (hasn't been set private and is not empty)
    var birthday = thisUser.birthday
    var cur = new Date()
    thisUser.age = birthdayParser.getAge(birthday, cur) // add age info
    thisUser.zodiac = birthdayParser.getZodiac(birthday) // add zodiac info
  }
  var poster = require('./poster')
  thisUser.cnt_poster = await poster.getPosterCntbyUID(thisUser.uid)
}

async function getUserInfo (request, response) {
  logger.onRecieveRequest(request)
  // no need for authentication
  var thisUser
  if ('username' in request.query) {
    thisUser = await user.getUserByName(request.query.username)
  } else if ('uid' in request.query) {
    thisUser = await user.getUserByUID(parseInt(request.query.uid))
  } else {
    thisUser = null
  }
  if (!thisUser) return
  delete thisUser.password // no passing password
  await addExtendedInfo(thisUser)
  response.json(thisUser)
}

async function getUserInfoPrivate (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  // need for authentication
  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    if (thisUser) {
      delete thisUser.password // no passing password!
      await addExtendedInfo(thisUser)
      res.userinfo = thisUser
    }
  }

  response.json(res) // response sent here
}

async function editUserInfo (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  // need for authentication
  if (verifier.verify(username, request.body.token, res)) {
    await user.editUserInfo(username, request.body.userinfo)
    res.info = '修改成功！'
    console.log('    user ' + username + '\'s userinfo edited successfully')
  }

  response.json(res) // response sent here
}

// change user's password
async function editUserPWD (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    if (thisUser.password === request.body.password) { // password needed: strict authentication
      await user.editUserInfo(username, { password: request.body.newPWD }) // newPWD: new password
      res.result = 'success'
      res.info = '密码修改成功！'
      console.log('    user ' + username + '\'s password changed successfully')
    } else {
      res.result = 'fail'
      res.info = '原密码错误！'
    }
  }

  response.json(res) // response sent here
}

async function uploadAvatar (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var upfile = require('./upfile')
  var username = request.body.username
  var files = request.files
  if (verifier.verify(username, request.body.token, res)) {
    res.avatar = await user.editAvatar(username, files[0])
    res.info = '头像上传成功！'
    console.log('    user ' + username + '\'s avatar uploaded successfully')
  } else {
    upfile.remUpFile(files[0]) // remove uploaded file
  }

  response.json(res) // response sent here
}

async function follow (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  var targetname = request.body.targetuser
  if (verifier.verify(username, request.body.token, res)) {
    if (await user.follow(username, targetname)) {
      res.result = 'success'
      res.info = '关注成功！'
      console.log('    user ' + username + ' followed ' + targetname + ' successfully.')
    } else {
      res.result = 'fail'
      res.info = '目标用户不存在'
    }
  }

  response.json(res) // response sent here
}

async function unfollow (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  var targetname = request.body.targetuser
  if (verifier.verify(username, request.body.token, res)) {
    if (await user.unfollow(username, targetname)) {
      res.result = 'success'
      res.info = '取消关注成功！'
      console.log('    user ' + username + ' unfollowed ' + targetname + ' successfully.')
    } else {
      res.result = 'fail'
      res.info = '目标用户不存在'
    }
  }

  response.json(res) // response sent here
}

async function isFollowing (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  var targetname = request.body.targetuser
  if (verifier.verify(username, request.body.token, res)) {
    var self = await user.getUserByName(username)
    var target = await user.getUserByName(targetname)
    if (!target) {
      res.result = 'no'
    } else if (await user.isFollowing(self.uid, target.uid)) {
      res.result = 'yes'
    } else {
      res.result = 'no'
    }
  }
  response.json(res)
}

exports.getUserInfo = getUserInfo
exports.getUserInfoPrivate = getUserInfoPrivate
exports.editUserInfo = editUserInfo
exports.editUserPWD = editUserPWD
exports.uploadAvatar = uploadAvatar
exports.follow = follow
exports.unfollow = unfollow
exports.isFollowing = isFollowing
