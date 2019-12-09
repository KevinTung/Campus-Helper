// Used for test: test a list of functions sequently

var stringRandom = require('string-random')
var mysql = require('mysql')
var sqlquery = require('../sqlquery')
var globalConfig = require('../global_config')

function testSequently (seq, done) {
  var testSequence = seq
  var id = -1
  function nextTest () {
    id += 1
    if (id < testSequence.length) {
      console.log('======== RUNNING CASE ' + (id + 1) + ' ========')
      testSequence[id](nextTest)
    } else done()
  }
  nextTest()
}

var tmpfile = require('./tmpfile_gen')
var path = require('path')

const sufLength = 6
var testbaseName
var testdirName
var esIndex

function createDatabase () {
  testbaseName = 'testbase_' + stringRandom(sufLength)
  var conn = mysql.createConnection({
    host: process.env.HOSTNAME || 'mysql-server',
    user: 'root',
    password: '123456'
  })
  return new Promise(function (resolve, reject) {
    conn.query('create database ??', [testbaseName], function (err, res) {
      if (err) {
        console.error(err)
        throw err
      }
      conn.end()
      resolve(null)
    })
  })
}
async function load (done) {
  // generate temporary files
  // create temporary database
  // setup
  console.log('======== SETTING UP ENVIRONMENT ========')
  await createDatabase()
  var setup = require('../setup')
  testdirName = path.join('/tmp', 'test_' + stringRandom(sufLength))
  tmpfile.mkdir(testdirName)
  tmpfile.mkdir(path.join(testdirName, 'imgs'))
  tmpfile.mkdir(path.join(testdirName, 'imgs', 'avatar'))
  esIndex = 'esindex_' + stringRandom(sufLength).toLowerCase()
  setup.setup({
    dataDir: testdirName,
    host: process.env.HOSTNAME || 'mysql-server', // process.env.HOSTNAME is used for GitLab Runner
    user: 'root',
    password: '123456',
    database: testbaseName,
    eshost: (process.env.HOSTNAME || 'elastic-server') + ':9200', // process.env.HOSTNAME is used for GitLab Runner
    esIndex: esIndex
  })
  await globalConfig.esClient.indices.create({
    index: esIndex,
    body: {
      mappings: {
        properties: {
          pid: {
            type: 'integer'
          },
          content: {
            type: 'text',
            analyzer: 'ik_max_word',
            search_analyzer: 'ik_max_word'
          }
        }
      }
    }
  })
  var userinfoArgs = ['username varchar(255)',
    'uid int auto_increment primary key',
    'password varchar(255)',
    'nickname varchar(255)',
    'gender varchar(255)',
    'email varchar(255)',
    'birthday varchar(255)',
    'briefintro text',
    'avatar varchar(255)',
    'cnt_upvoted int default 0',
    'cnt_follower int default 0']
  await sqlquery.queryAsync('create table userinfo(' + userinfoArgs.join() + ')', [])
  var postersArgs = ['uid int',
    'pid int auto_increment primary key',
    'time bigint',
    'content text',
    'pics text',
    'cnt_upvote int default 0',
    'cnt_comment int default 0',
    'cnt_repost int default 0',
    'privacy int default 0',
    'tags text']
  await sqlquery.queryAsync('create table posters(' + postersArgs.join() + ')', [])
  var imArgs = ['_from varchar(255)',
    '_to varchar(255)',
    'content text',
    'time bigint',
    '_read int default 0']
  await sqlquery.queryAsync('create table im_message(' + imArgs.join() + ')', [])
  done()
}

async function drop (done) {
  // delete temporary files
  // drop temporary database
  console.log('======== TEARING DOWN ENVIRONMENT ========')
  tmpfile.rmdir(testdirName)
  await sqlquery.queryAsync('drop database ??', [testbaseName])
  globalConfig.database.end() // disconnect
  await globalConfig.esClient.indices.delete({
    index: esIndex,
    ignore_unavailable: true
  })
  done()
}

exports.testSequently = testSequently
exports.load = load
exports.drop = drop
