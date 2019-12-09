var server = require('../router').app
var request = require('supertest')

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

function follow (done) {
  request(server)
    .post('/user/follow')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-2'
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

function checkFollowing (done) {
  request(server)
    .post('/user/isfollowing')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-2'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('yes')
      request(server)
        .get('/user-info-pub')
        .query('username=test-user-2')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          expect(res.body.cnt_follower).toBe(1)
          done()
        })
    })
}

function followNone (done) {
  request(server)
    .post('/user/follow')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-none'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('fail')
      done()
    })
}

function followDuplicate (done) {
  request(server)
    .post('/user/follow')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-2'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('success')
      done()
    })
}

function unfollow (done) {
  request(server)
    .post('/user/unfollow')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-2'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('success')
      expect(res.body.info).toBe('取消关注成功！')
      done()
    })
}

function checkUnfollow (done) {
  request(server)
    .post('/user/isfollowing')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-2'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('no')
      request(server)
        .get('/user-info-pub')
        .query('username=test-user-2')
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          expect(res.body.cnt_follower).toBe(0)
          done()
        })
    })
}

function unfollowNone (done) {
  request(server)
    .post('/user/unfollow')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-none'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('fail')
      done()
    })
}

function unfollowDuplicate (done) {
  request(server)
    .post('/user/unfollow')
    .send({
      username: 'test-user',
      token: token,
      targetuser: 'test-user-2'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('success')
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

test('Test following', async done => {
  seqtester.testSequently([register, login, follow, checkFollowing, followNone, followDuplicate, unfollow, checkUnfollow,
    unfollowNone, unfollowDuplicate], done)
})
