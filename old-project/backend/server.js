// Server starts listening

var https = require('https')
var router = require('./router')
var logger = require('./console_log')

function runServer (options, port) {
  // start server
  exports.httpsServer = https.createServer(options, router.app)
  exports.httpsServer.listen(port)
  logger.startInfo(port)
}

exports.runServer = runServer
