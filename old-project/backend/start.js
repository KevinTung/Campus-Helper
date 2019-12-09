// Start server

var env = {
  keyfile: '',
  certfile: '',
  dataDir: '/',
  port: '443',
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysql',
  eshost: 'localhost:9200',
  esIndex: 'esindex'
}
var parser = {
  '--sqlhost': 'host',
  '--sqluser': 'user',
  '--sqlpwd': 'password',
  '--sqldb': 'database',
  '-p': 'port',
  '--port': 'port',
  '--data': 'dataDir',
  '--key': 'keyfile',
  '--cert': 'certfile',
  '--eshost': 'eshost',
  '--esindex': 'esIndex'
}

for (var i = 2; i < process.argv.length; ++i) {
  if (process.argv[i] in parser) {
    env[parser[process.argv[i]]] = process.argv[i + 1]
    ++i
  }
}

require('./setup').startup(env)
