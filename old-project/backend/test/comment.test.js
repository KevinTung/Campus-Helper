var server = require('../router').app
var request = require('supertest')
var utils = require('./utils')

var user1 = {
  name: 'test-userj74f',
  pwd: 'test-pwde56y'
}
var user2 = {
  name: 'test-userasfe',
  pwd: '15./test-pwd cvfd'
}
function register (done) {
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
  utils.publishSucc(user1.name, user1.token, '大噶好', new Date().getTime(), 0, 'test.png', done)
}
var targetPoster = {}
function checkPub (done) {
  request(server)
    .post('/user/publish/list')
    .field('username', user2.name)
    .field('token', user2.token)
    .field('targetuser', user1.name)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result.length).toBe(1)
      expect(res.body.result[0].content).toBe('大噶好')
      targetPoster.pid = res.body.result[0].pid
      done()
    })
}
function commentFail (done) {
  request(server)
    .post('/poster/comment')
    .field('username', user2.name)
    .field('token', user2.token)
    .field('pid', 894365398)
    .field('content', '啊啊啊啊啊啊啊啊')
    .field('replyto', 0)
    .field('time', new Date().getTime())
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('fail')
      done()
    })
}
function comment0 (done) {
  utils.commentSucc(user2.name, user2.token, targetPoster.pid, '电子学', 0, new Date().getTime(), done)
}
function comment1 (done) {
  utils.commentSucc(user1.name, user1.token, targetPoster.pid, '我觉得电子学不需要学', 1, new Date().getTime(), done)
}
function checkComment (done) {
  request(server)
    .post('/poster/comment/list')
    .field('username', user2.name)
    .field('token', user2.token)
    .field('pid', targetPoster.pid)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      var comments = res.body.comments
      expect(comments.length).toBe(2)
      expect(comments[0].nickname).toBe(user2.name)
      expect(comments[0].avatar).toBeTruthy()
      expect(comments[0].id).toBe(1)
      expect(comments[0].username).toBe(user2.name)
      expect(comments[0].content).toBe('电子学')
      expect(comments[0].replyto).toBe(0)
      expect(comments[0].time).toBeTruthy()
      expect(comments[1].nickname).toBe(user1.name)
      expect(comments[1].avatar).toBeTruthy()
      expect(comments[1].id).toBe(2)
      expect(comments[1].username).toBe(user1.name)
      expect(comments[1].content).toBe('我觉得电子学不需要学')
      expect(comments[1].replyto).toBe(1)
      expect(comments[1].time).toBeTruthy()
      done()
    })
}
function checkFollowComment (done) {
  request(server)
    .post('/user/follow')
    .field('username', user2.name)
    .field('token', user2.token)
    .field('targetuser', user1.name)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      request(server)
        .post('/poster/list-following')
        .field('username', user2.name)
        .field('token', user2.token)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          expect(res.body.list.length).toBe(1)
          expect(res.body.list[0].firstComment.nickname).toBe(user2.name)
          expect(res.body.list[0].firstComment.content).toBe('电子学')
          done()
        })
    })
}

var seqtester = require('./seqtester')

beforeAll(async done => {
  seqtester.load(done)
})

afterAll(async done => {
  seqtester.drop(done)
})
test('test publish comment', async done => {
  seqtester.testSequently([register, login, publish, checkPub, commentFail, comment0, comment1, checkComment, checkFollowComment], done)
})
