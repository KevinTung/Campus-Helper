var server = require('../router').app
var request = require('supertest')
var path = require('path')

function register (done) {
  // register is needed for login
  request(server)
    .post('/register')
    .send({
      username: 'test-user',
      password: 'test-password-correct'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      request(server)
        .post('/register')
        .send({
          username: 'test-user-2',
          password: 'test-password-correct'
        })
        .set('content-type', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          done()
        })
    })
}

var token
function login (done) {
  // login is needed for token
  request(server)
    .post('/login')
    .send({
      username: 'test-user',
      password: 'test-password-correct'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      token = res.body.token // save token
      done()
    })
}

function post (done) {
  request(server)
    .post('/upload-poster')
    .field('username', 'test-user')
    .field('token', token)
    .field('content', 'This is a public poster.')
    .field('time', new Date().getTime())
    .field('privacy', 0)
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      done()
    })
}

var pid
function getPosterListSingle (done) {
  request(server)
    .post('/frontpage')
    .field('username', 'test-user')
    .field('token', token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.list[0].content).toBe('This is a public poster.')
      pid = res.body.list[0].pid
      done()
    })
}

function upvoteMyself (done) {
  request(server)
    .post('/poster/upvote')
    .send({
      username: 'test-user',
      token: token,
      pid: pid
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      done()
    })
}

function upvoteNone (done) {
  request(server)
    .post('/poster/upvote')
    .send({
      username: 'test-user',
      token: token,
      pid: 123
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('fail')
      done()
    })
}

function login2 (done) { // login for test-user-2
  request(server)
    .post('/login')
    .send({
      username: 'test-user-2',
      password: 'test-password-correct'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      token = res.body.token // save token
      done()
    })
}

function getPosterListSingle2 (done) {
  request(server)
    .post('/frontpage')
    .field('username', 'test-user-2')
    .field('token', token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.list[0].content).toBe('This is a public poster.')
      pid = res.body.list[0].pid
      done()
    })
}

function upvote (done) {
  request(server)
    .post('/poster/upvote')
    .send({
      username: 'test-user-2',
      token: token,
      pid: pid
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      done()
    })
}

function checkUpvoted (done) {
  request(server)
    .post('/poster/isupvoted')
    .send({
      username: 'test-user-2',
      token: token,
      pid: pid
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('yes')
      done()
    })
}

function checkUpvoteCnt (done) {
  request(server)
    .get('/poster-info')
    .query('pid=' + pid)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.cnt_upvote).toBe(2)
      request(server)
        .get('/user-info-pub')
        .query('username=test-user')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          expect(res.body.cnt_upvoted).toBe(2)
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

test('Test posterpage, upvote', async done => {
  seqtester.testSequently([register, login, post, getPosterListSingle, upvoteMyself, upvoteNone, login2, getPosterListSingle2,
    upvote, checkUpvoted, checkUpvoteCnt, upvote, checkUpvoteCnt], done)
})
