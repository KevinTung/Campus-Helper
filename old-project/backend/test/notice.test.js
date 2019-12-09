var server = require('../router').app
var request = require('supertest')
var utils = require('./utils')

var user1 = {
  name: '09dfs349-testuser',
  pwd: '748932jkldsf'
}

var user2 = {
  name: '683974urewiofsj-testuser-5y42',
  pwd: '7932dsnk`=&'
}

function reg (done) {
  utils.registerValid(user1.name, user1.pwd, function () {
    utils.registerValid(user2.name, user2.pwd, done)
  })
}

function login (done) {
  utils.loginValid(user1.name, user1.pwd, user1, function () {
    utils.loginValid(user2.name, user2.pwd, user2, done)
  })
}

function publish (done) {
  utils.publishSucc(user1.name, user1.token, '大噶早上好，英特纳雄耐尔今天实现了吗', new Date().getTime(), 0, 'test.png', done)
}

function comment1 (done) {
  utils.commentSucc(user2.name, user2.token, 1, '没有实现，因为要上早八', 0, new Date().getTime(), done)
}

function comment2 (done) {
  utils.commentSucc(user1.name, user1.token, 1, '实现了', 1, new Date().getTime(), done)
}

function upvote (done) {
  request(server)
    .post('/poster/upvote')
    .field('username', user2.name)
    .field('token', user2.token)
    .field('pid', 1)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      done()
    })
}

function checkNtCnt (done) {
  request(server)
    .post('/user/notification/count')
    .field('username', user1.name)
    .field('token', user1.token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.count).toBe(3)
      done()
    })
}

function checkNtContent (done) {
  request(server)
    .post('/user/notification/list')
    .field('username', user1.name)
    .field('token', user1.token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      const notiList = res.body.list
      expect(notiList.length).toBe(2)
      utils.expectObj(notiList[0], {
        type: 'comment_pic',
        nickname: user2.name,
        pid: 1,
        commentid: 1
      })
      utils.expectObj(notiList[1], {
        type: 'upvote',
        nickname: user2.name,
        pid: 1,
        commentid: 0
      })
      done()
    })
}

function checkNtContent2 (done) {
  request(server)
    .post('/user/notification/list')
    .field('username', user2.name)
    .field('token', user2.token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      const notiList = res.body.list
      expect(notiList.length).toBe(1)
      utils.expectObj(notiList[0], {
        type: 'comment_comment',
        nickname: user1.name,
        pid: 1,
        commentid: 2
      })
      done()
    })
}

function clear1 (done) {
  request(server)
    .post('/user/notification/clear')
    .field('username', user1.name)
    .field('token', user1.token)
    .field('type', 'comment_comment')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      done()
    })
}

function clear2 (done) {
  request(server)
    .post('/user/notification/clear')
    .field('username', user1.name)
    .field('token', user1.token)
    .field('type', 'comment_pic')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      done()
    })
}

function checkAfterClear (done) {
  request(server)
    .post('/user/notification/list')
    .field('username', user1.name)
    .field('token', user1.token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      const notiList = res.body.list
      expect(notiList.length).toBe(1)
      utils.expectObj(notiList[0], {
        type: 'upvote',
        nickname: user2.name,
        pid: 1,
        commentid: 0
      })
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

test('testing notification', async done => {
  seqtester.testSequently([reg, login, publish, comment1, comment2, upvote, checkNtCnt, checkNtContent, checkNtContent2, clear1, clear2,
    checkAfterClear], done)
})
