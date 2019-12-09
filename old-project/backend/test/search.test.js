var server = require('../router').app
var request = require('supertest')
var utils = require('./utils')
var path = require('path')

var user1 = {
  name: 'kksk114514',
  password: '1919810'
}

function reg (done) {
  utils.registerValid(user1.name, user1.password, done)
}

function login (done) {
  utils.loginValid(user1.name, user1.password, user1, done)
}

function post (done) {
  request(server)
    .post('/upload-poster')
    .field('username', user1.name)
    .field('token', user1.token)
    .field('content', '天路')
    .field('time', new Date().getTime())
    .field('privacy', 0)
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      done()
    })
}

function search (done) {
  request(server)
    .post('/search')
    .field('username', user1.name)
    .field('token', user1.token)
    .field('keyword', '天路')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      done()
    })
}

var seqtester = require('./seqtester')

beforeAll(async done => {
  seqtester.load(done)
})

afterAll(async done => {
  seqtester.drop(done)
})

test('Testing search: ', async done => {
  seqtester.testSequently([reg, login, post, search], done)
})
