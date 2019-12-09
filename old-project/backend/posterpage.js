// Handle poster-relevant requests

var logger = require('./console_log')
var globalConfig = require('./global_config')
var poster = require('./poster')
var user = require('./user')
var verifier = require('./verify')
var stringRandom = require('string-random')
var sizeOfImg = require('image-size')

// Pre-settings
const pageLength = 100
const imgIDLength = 32

async function wrapPosterListDisp (uid, resList) {
  const len = resList.length
  for (var i = 0; i < len; ++i) {
    var writer = await user.getUserByUID(resList[i].uid)
    resList[i].avatar = writer.avatar
    resList[i].nickname = writer.nickname
    resList[i].username = writer.username
    var upvoteState = await poster.hasUpvoted(uid, resList[i].pid)
    resList[i].hasUpvoted = upvoteState
  }
}

async function getGlobalLatestPosters (request, response) {
  // returns: global latest posters, only those with privacy='public'
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    var resList = (await poster.getFullList(0)).reverse() // sorted by time, decreasingly.
    if (resList.length > pageLength) {
      resList = resList.slice(0, pageLength) // respond only certain posters
    }
    await wrapPosterListDisp(thisUser.uid, resList)
    res.list = resList
  }
  response.json(res)
}

async function getCertainPoster (request, response) {
  logger.onRecieveRequest(request)

  var thisPoster = await poster.getPosterByPID(request.query.pid)
  response.json(thisPoster)
}

async function getListofUser (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  var targetname = request.body.targetuser
  var resList = []
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    var tarUser = await user.getUserByName(targetname)
    if (username === targetname) { // myself
      resList = await poster.getListbyUID(tarUser.uid, 2)
    } else if (await user.isFollowing(thisUser.uid, tarUser.uid)) { // is friend
      resList = await poster.getListbyUID(tarUser.uid, 1)
    } else resList = await poster.getListbyUID(tarUser.uid, 0)
    await wrapPosterListDisp(thisUser.uid, resList)
    res.result = resList.reverse() // sort by pid, decreasingly
  }

  response.json(res) // response sent here
}

async function getListofFollowing (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    var followingList = await user.getFollowings(username)
    var resList = []
    for (var tar of followingList) {
      resList = resList.concat(await poster.getListbyUID(tar.uid, 1)) // is friend
    }
    resList.sort(function (a, b) { // sorted by pid, decreasingly
      return b.pid - a.pid
    })
    await wrapPosterListDisp(thisUser.uid, resList)
    for (var i = 0; i < resList.length; i++) {
      var comment = await poster.getFirstComment(resList[i].pid)
      if (comment) await wrapCommentListDisp([comment])
      resList[i].firstComment = comment
    }
    res.list = resList
  }

  response.json(res) // response sent here
}

async function uploadPoster (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  var files = request.files
  var upfile = require('./upfile')
  var path = require('path')
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    var posterInfo = {
      uid: thisUser.uid,
      content: request.body.content,
      pics: [],
      time: request.body.time,
      privacy: request.body.privacy,
      tags: request.body.tags
    }
    for (const file of files) {
      var destFile = stringRandom(imgIDLength) + path.extname(file.originalname)
      var destPath = path.join(globalConfig.dataDir, 'imgs', destFile)
      upfile.moveUpFile(file, destPath) // move file to 'data/imgs'
      var imgSize = sizeOfImg(destPath)
      posterInfo.pics.push({
        uri: '/imgs/' + destFile,
        width: imgSize.width,
        height: imgSize.height
      })
    }
    var pid = await poster.add(posterInfo)
    res.result = 'success'
    res.info = '动态发布成功！'
    res.pid = pid
    console.log('    user ' + username + ' uploaded poster ' + pid + ' successfully.')
  } else {
    for (const file of files) { // delete uploaded files
      upfile.remUpFile(file)
    }
  }

  response.json(res) // response sent here
}

async function deletePoster (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var pid = request.body.pid
    var thisUser = await user.getUserByName(username)
    if (await poster.remove(thisUser.uid, pid)) {
      res.result = 'success'
      res.info = '动态删除成功！'
      console.log('    user ' + username + ' deleted poster ' + pid + ' successfully.')
    } else {
      res.result = 'fail'
    }
  }

  response.json(res) // response sent here
}

async function upvotePoster (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    const pid = request.body.pid
    if (await poster.upvote(thisUser.uid, pid)) {
      res.result = 'success'
      res.info = '点赞成功！'
      console.log('    user ' + username + ' upvoted poster ' + pid + ' successfully.')
    } else {
      res.result = 'fail'
      res.info = '目标动态不存在！'
    }
  }

  response.json(res) // response sent here
}

async function hasUpvoted (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var thisUser = await user.getUserByName(username)
    if (await poster.hasUpvoted(thisUser.uid, request.body.pid)) res.result = 'yes'
    else res.result = 'no'
  }

  response.json(res) // response sent here
}

async function publishComment (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  if (verifier.verify(request.body.username, request.body.token, res)) {
    var comment = {
      username: request.body.username,
      time: request.body.time,
      content: request.body.content,
      replyto: request.body.replyto
    }
    if (await poster.addComment(request.body.pid, comment)) {
      res.result = 'success'
    } else {
      res.result = 'fail'
    }
  }

  response.json(res)
}
async function wrapCommentListDisp (comments) {
  const len = comments.length
  for (var i = 0; i < len; ++i) {
    var writer = await user.getUserByName(comments[i].username)
    comments[i].nickname = writer.nickname
    comments[i].avatar = writer.avatar
    comments[i].username = writer.username
  }
}
async function getCommentList (request, response) {
  logger.onRecieveRequest(request)
  var res = {}

  if (verifier.verify(request.body.username, request.body.token, res)) {
    var comments = await poster.getCommentList(request.body.pid)
    await wrapCommentListDisp(comments)
    res.comments = comments
  }
  response.json(res)
}

exports.wrapPosterListDisp = wrapPosterListDisp
exports.getGlobalLatestPosters = getGlobalLatestPosters
exports.getCertainPoster = getCertainPoster
exports.uploadPoster = uploadPoster
exports.deletePoster = deletePoster
exports.getListofUser = getListofUser
exports.getListofFollowing = getListofFollowing
exports.upvotePoster = upvotePoster
exports.hasUpvoted = hasUpvoted
exports.publishComment = publishComment
exports.getCommentList = getCommentList
