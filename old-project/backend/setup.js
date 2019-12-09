var fs = require('fs')

var globalConfig = require('./global_config')
var server = require('./server')
var mysql = require('mysql')
var elasticSearch = require('elasticsearch')

function setup (env) {
  // this function just sets up some environment in order to test
  // does not need keyfile, certfile and port
  console.info('setup with env:')
  console.info(env)
  globalConfig.dataDir = env.dataDir
  var router = require('./router')
  router.setupStatic()
  globalConfig.database = mysql.createPool({
    host: env.host,
    user: env.user,
    password: env.password,
    database: env.database,
    charset: 'utf8mb4'
  })
  globalConfig.esClient = new elasticSearch.Client({
    host: env.eshost,
    log: 'error'
  })
  globalConfig.esIndex = env.esIndex
}

function startup (env) {
  // needed key:
  // keyfile, certfile: file name of private key and certificate
  // dataDir: base path of data
  // port: port the server listening on
  // host, user, password, database: string of mysql arguments
  // eshost, esIndex
  // this function will start the server
  setup(env)
  var options = {
    key: fs.readFileSync(env.keyfile),
    cert: fs.readFileSync(env.certfile)
  }
  server.runServer(options, env.port)
}

exports.setup = setup
exports.startup = startup
