var verifier = require('../verify')
var server = require('../router').app
var request = require('supertest')

function emptyRegister (done) {
  // empty POST
  request(server)
    .post('/register')
    .send({})
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('请求失败')
      done()
    })
}

function validRegister (done) {
  // register test-user
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
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('注册成功！')
      done()
    })
}

function duplicatedRegister (done) {
  // register test-user again
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
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('用户名已存在！')
      done()
    })
}

function emptyLogin (done) {
  // empty POST
  request(server)
    .post('/login')
    .send({})
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('请求失败')
      done()
    })
}

function nonExistingLogin (done) {
  // login not-existed-user
  request(server)
    .post('/login')
    .send({
      username: 'not-existed-user',
      password: 'test-password-correct'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('用户名不存在！')
      done()
    })
}

function wrongLogin (done) {
  // login test-user, wrong password
  request(server)
    .post('/login')
    .send({
      username: 'test-user',
      password: 'test-password-wrong'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('密码错误！')
      done()
    })
}

var token
function validLogin (done) {
  // login test-user, should be admitted
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
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('登录成功！')
      token = res.body.token // save token
      done()
    })
}

function verifyToken (done) {
  // verify non-existed-user
  var res = {}
  expect(verifier.verify('non-existed-user', token, res)).toBeFalsy()
  // verify test-user with wrong token
  expect(verifier.verify('test-user', '', res)).toBeFalsy()
  // verify test-user, should be admitted
  expect(verifier.verify('test-user', token, res)).toBeTruthy()
  done()
}

function regInfo (done) {
  request(server)
    .post('/register/withinfo')
    .send({
      username: 'test-user-2',
      password: 'test-p7dsahi',
      avatar: 'https://abcdef.bc/defg.png',
      nickname: 'user2',
      gender: 'female'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('注册成功！')
      done()
    })
}

function checkInfo (done) {
  request(server)
    .get('/user-info-pub')
    .query('username=test-user-2')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.username).toBe('test-user-2')
      expect(res.body.avatar).toBe('https://abcdef.bc/defg.png')
      expect(res.body.nickname).toBe('user2')
      expect(res.body.gender).toBe('female')
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

test('Test register, login and session verification', async done => {
  seqtester.testSequently([emptyRegister, validRegister, duplicatedRegister, emptyLogin, nonExistingLogin, wrongLogin,
    validLogin, verifyToken], done)
})

test('Test register with info', async done => {
  seqtester.testSequently([regInfo, checkInfo], done)
})
