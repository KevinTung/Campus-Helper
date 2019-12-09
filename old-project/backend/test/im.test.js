var server = require('../router').app
var request = require('supertest')
var utils = require('./utils')
var user1 = {
  name: 'u45trtest935',
  password: 'u90twsoi'
}
var user2 = {
  name: 't09oweifng;gds',
  password: 't4wupe9 i309,>'
}

var user3 = {
  name: 'awfe.%*gf',
  password: '903;03(/'
}

function reg (done) {
  utils.registerValid(user1.name, user1.password, function () {
    utils.registerValid(user2.name, user2.password, function () {
      utils.registerValid(user3.name, user3.password, done)
    })
  })
}

function login (done) {
  utils.loginValid(user1.name, user1.password, user1, function () {
    utils.loginValid(user2.name, user2.password, user2, function () {
      utils.loginValid(user3.name, user3.password, user3, done)
    })
  })
}

function send (userfrom, userto, content, timestamp, done) {
  request(server)
    .post('/im/send')
    .field('username', userfrom.name)
    .field('token', userfrom.token)
    .field('_to', userto.name)
    .field('content', content)
    .field('time', timestamp)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      done()
    })
}

function sendAct (done) {
  var timestamp = new Date().getTime()
  send(user1, user2, '测试test测试', timestamp, function () {
    send(user1, user2, '测试第2条', timestamp + 5, function () {
      send(user2, user1, '测试第3条', timestamp + 8, function () {
        send(user3, user2, 'test4', timestamp + 28, done)
      })
    })
  })
}

function get1 (done) {
  request(server)
    .post('/im/get')
    .field('username', user2.name)
    .field('token', user2.token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.list.length).toBe(2)
      utils.expectObj(res.body.list[0].message, {
        _from: user3.name,
        _to: user2.name,
        content: 'test4',
        _read: 0
      })
      expect(res.body.list[0].unread).toBe(1)
      utils.expectObj(res.body.list[1].message, {
        _from: user2.name,
        _to: user1.name,
        content: '测试第3条',
        _read: 0
      })
      expect(res.body.list[1].unread).toBe(2)
      done()
    })
}
function withAct (done) {
  request(server)
    .post('/im/with')
    .field('username', user2.name)
    .field('token', user2.token)
    .field('targetuser', user1.name)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      const record = res.body.list
      expect(record.length).toBe(3)
      utils.expectObj(record[0], {
        content: '测试test测试',
        _from: user1.name,
        _to: user2.name,
        _read: 1
      })
      utils.expectObj(record[1], {
        content: '测试第2条',
        _from: user1.name,
        _to: user2.name,
        _read: 1
      })
      utils.expectObj(record[2], {
        content: '测试第3条',
        _from: user2.name,
        _to: user1.name,
        _read: 0
      })
      done()
    })
}

function get2 (done) {
  request(server)
    .post('/im/get')
    .field('username', user2.name)
    .field('token', user2.token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.list.length).toBe(2)
      utils.expectObj(res.body.list[0].message, {
        _from: user3.name,
        _to: user2.name,
        content: 'test4',
        _read: 0
      })
      expect(res.body.list[0].unread).toBe(1)
      utils.expectObj(res.body.list[1].message, {
        _from: user2.name,
        _to: user1.name,
        content: '测试第3条',
        _read: 0
      })
      expect(res.body.list[1].unread).toBe(0)
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

test('testing IM', async done => {
  seqtester.testSequently([reg, login, sendAct, get1, withAct, get2], done)
})
