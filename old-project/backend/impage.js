// Handle IM requests

var im = require('./im')
var user = require('./user')
var logger = require('./console_log')
var verifier = require('./verify')

async function wrapMsgList (username, resList) {
  const len = resList.length
  for (var i = 0; i < len; ++i) {
    var tarUser = null
    if (resList[i].message._from === username) {
      tarUser = await user.getUserByName(resList[i].message._to)
    } else {
      tarUser = await user.getUserByName(resList[i].message._from)
    }
    resList[i].avatar = tarUser.avatar
    resList[i].nickname = tarUser.nickname
  }
}

async function sendMsg (request, response) {
  // someone sent a message to another one
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var message = {
      _from: username,
      _to: request.body._to,
      content: request.body.content,
      time: request.body.time
    }
    await im.addMsg(message)
  }

  response.json(res) // response sent here
}

async function getMsg (request, response) {
  // user 'username' get all his messages
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var resList = await im.getMsg(username)
    var ret = {}
    for (var message of resList) {
      if (message._from === username) {
        if (!(message._to in ret)) {
          ret[message._to] = {}
          ret[message._to].message = message
          ret[message._to].unread = 0
        } else {
          if (ret[message._to].message.time < message.time) ret[message._to].message = message // only keep the last message
        }
      } else {
        if (!(message._from in ret)) {
          ret[message._from] = {}
          ret[message._from].message = message
          ret[message._from].unread = (message._read === 1 ? 0 : 1)
        } else {
          ret[message._from].unread += (message._read === 1 ? 0 : 1) // add unread count
          if (ret[message._from].message.time < message.time) ret[message._from].message = message // only keep the last message
        }
      }
    }
    var retList = []
    for (var key in ret) {
      retList.push(ret[key])
    }
    retList.sort((a, b) => {
      return b.message.time - a.message.time // sort by time, decreasingly
    })
    await wrapMsgList(username, retList)
    res.list = retList
  }

  response.json(res) // response sent here
}

async function chatWith (request, response) {
  // user 'selfUsername' read all messages sent from user 'tarUsername'
  logger.onRecieveRequest(request)

  var res = {}

  var username = request.body.username
  if (verifier.verify(username, request.body.token, res)) {
    var targetuser = request.body.targetuser
    res.list = await im.chatWith(username, targetuser)
    var tarUser = await user.getUserByName(targetuser)
    res.avatar = tarUser.avatar
    res.nickname = tarUser.nickname
  }

  response.json(res) // response sent here
}

exports.sendMsg = sendMsg
exports.getMsg = getMsg
exports.chatWith = chatWith
