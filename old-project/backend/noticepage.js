var notice = require('./notice')
var verifier = require('./verify')
var user = require('./user')
var logger = require('./console_log')
async function count (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  if (verifier.verify(request.body.username, request.body.token, res)) {
    var curUser = await user.getUserByName(request.body.username)
    res.count = await notice.count(curUser.uid)
  }

  response.json(res)
}

async function getList (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  if (verifier.verify(request.body.username, request.body.token, res)) {
    var curUser = await user.getUserByName(request.body.username)
    res.list = await notice.getList(curUser.username, curUser.uid)
  }

  response.json(res)
}

async function clear (request, response) {
  logger.onRecieveRequest(request)

  var res = {}

  if (verifier.verify(request.body.username, request.body.token, res)) {
    var curUser = await user.getUserByName(request.body.username)
    await notice.clear(curUser.uid, request.body.type)
  }
  response.json(res)
}

exports.count = count
exports.getList = getList
exports.clear = clear
