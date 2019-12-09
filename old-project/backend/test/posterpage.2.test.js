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
      request(server)
        .post('/upload-poster')
        .field('username', 'test-user')
        .field('token', token)
        .field('content', 'This is a only-friends-can-see poster.')
        .field('time', new Date().getTime())
        .field('privacy', 1)
        .attach('images', path.join(__dirname, 'test.png'))
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          request(server)
            .post('/upload-poster')
            .field('username', 'test-user')
            .field('token', token)
            .field('content', 'This is a private poster.')
            .field('time', new Date().getTime())
            .field('privacy', 2)
            .attach('images', path.join(__dirname, 'test.png'))
            .expect(200)
            .end(function (err, res) {
              if (err) throw err
              done()
            })
        })
    })
}

function checkForMyself (done) {
  request(server)
    .post('/user/publish/list')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user'
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result.length).toBe(3)
      expect(res.body.result[0].content).toBe('This is a private poster.')
      expect(res.body.result[1].content).toBe('This is a only-friends-can-see poster.')
      expect(res.body.result[2].content).toBe('This is a public poster.')
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

function checkForPublic (done) {
  request(server)
    .post('/user/publish/list')
    .send({
      username: 'test-user-2',
      token: token,
      targetuser: 'test-user'
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result.length).toBe(1)
      expect(res.body.result[0].content).toBe('This is a public poster.')
      done()
    })
}

function follow (done) {
  request(server)
    .post('/user/follow')
    .send({
      username: 'test-user-2',
      token: token,
      targetuser: 'test-user'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('success')
      expect(res.body.info).toBe('关注成功！')
      done()
    })
}

function checkForFriend (done) {
  request(server)
    .post('/user/publish/list')
    .send({
      username: 'test-user-2',
      token: token,
      targetuser: 'test-user'
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result.length).toBe(2)
      expect(res.body.result[0].content).toBe('This is a only-friends-can-see poster.')
      expect(res.body.result[1].content).toBe('This is a public poster.')
      done()
    })
}

function checkForCount (done) {
  request(server)
    .get('/user-info-pub')
    .query('username=test-user')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.cnt_poster).toBe(3)
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

test('Test posterpage, privacy setting', async done => {
  seqtester.testSequently([register, login, post, checkForMyself, login2, checkForPublic, follow, checkForFriend, checkForCount], done)
})
