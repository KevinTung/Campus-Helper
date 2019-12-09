var path = require('path')
process.argv = ['node', '../start.js', '-p', '443', '--data', '/tmp/test', '--key', path.join(__dirname, 'privkey.pem'),
  '--cert', path.join(__dirname, 'cert.pem'), '--sqlhost', 'mysql-server', '--sqluser', 'root', '--sqlpwd', '123456',
  '--sqldb', 'mysql', '--no-use', '--eshost', 'elastic-server:9200']

function start (done) {
  require('../start') // run start.js
  done()
}

function stop (done) {
  require('../server').httpsServer.close()
  done()
}

var seqtester = require('./seqtester')
test('Test start.js', async done => {
  seqtester.testSequently([start, stop], done)
})
