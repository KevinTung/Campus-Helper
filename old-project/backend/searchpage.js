var logger = require('./console_log')
var search = require('./search')
var verifier = require('./verify')
var user = require('./user')
var poster = require('./poster')
var posterpage = require('./posterpage')
async function searchQuery (request, response) {
  logger.onRecieveRequest(request)

  var res = {}
  if (verifier.verify(request.body.username, request.body.token, res)) {
    var pidList = await search.search(request.body.keyword)
    res.result = await poster.privacyFilter(request.body.username, pidList)
    var curUser = await user.getUserByName(request.body.username)
    await posterpage.wrapPosterListDisp(curUser.uid, res.result)
  }

  response.json(res)
}

exports.searchQuery = searchQuery
