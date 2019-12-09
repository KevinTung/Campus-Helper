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
          request(server)
            .post('/register')
            .send({
              username: 'test-user-3',
              password: 'test-password-correct'
            })
            .set('content-type', 'application/json')
            .expect(200)
            .end(function (err, res) {
              if (err) throw err
              done()
            })
        })
    })
}

var token
function login (done) { // login for test-user
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
    .field('content', 'This is a only-friends-can-see poster. I am test-user.')
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
        .field('content', 'This is a public poster. I am test-user.')
        .field('time', new Date().getTime())
        .field('privacy', 0)
        .attach('images', path.join(__dirname, 'test.png'))
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          done()
        })
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

function post2 (done) {
  request(server)
    .post('/upload-poster')
    .field('username', 'test-user-2')
    .field('token', token)
    .field('content', 'This is a public poster. I am test-user-2.')
    .field('time', new Date().getTime())
    .field('privacy', 0)
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      request(server)
        .post('/upload-poster')
        .field('username', 'test-user-2')
        .field('token', token)
        .field('content', 'This is a only-friends-can-see poster. I am test-user-2.')
        .field('time', new Date().getTime())
        .field('privacy', 1)
        .attach('images', path.join(__dirname, 'test.png'))
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          done()
        })
    })
}

function login3 (done) { // login for test-user-3
  request(server)
    .post('/login')
    .send({
      username: 'test-user-3',
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

function follow (done) {
  request(server)
    .post('/user/follow')
    .send({
      username: 'test-user-3',
      token: token,
      targetuser: 'test-user'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      request(server)
        .post('/user/follow')
        .send({
          username: 'test-user-3',
          token: token,
          targetuser: 'test-user-2'
        })
        .set('content-type', 'application/json')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          done()
        })
    })
}

function getList (done) {
  request(server)
    .post('/poster/list-following')
    .send({
      username: 'test-user-3',
      token: token
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      var list = res.body.list
      expect(list.length).toBe(4)
      expect(list[0].content).toBe('This is a only-friends-can-see poster. I am test-user-2.')
      expect(list[1].content).toBe('This is a public poster. I am test-user-2.')
      expect(list[2].content).toBe('This is a public poster. I am test-user.')
      expect(list[3].content).toBe('This is a only-friends-can-see poster. I am test-user.')
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
  seqtester.testSequently([register, login, post, login2, post2, login3, follow, getList], done)
})
