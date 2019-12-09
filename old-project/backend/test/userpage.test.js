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
      done()
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

var testuid
function getUser (done) {
  request(server)
    .get('/user-info-pub')
    .query('username=test-user')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.username).toBe('test-user')
      expect(res.body.password).toBeFalsy() // no password should be passed
      expect(res.body.nickname).toBe('test-user') // before change
      testuid = res.body.uid
      done()
    })
}

function getUserbyUID (done) {
  request(server)
    .get('/user-info-pub')
    .query('uid=' + testuid.toString())
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.username).toBe('test-user')
      expect(res.body.password).toBeFalsy() // no password should be passed
      expect(res.body.nickname).toBe('test-user') // before change
      done()
    })
}

function getUserPriValid (done) {
  request(server)
    .post('/user-info-pri')
    .send({
      username: 'test-user',
      token: token
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.userinfo.username).toBe('test-user')
      expect(res.body.userinfo.password).toBeFalsy() // no password should be passed
      expect(res.body.userinfo.nickname).toBe('john')
      expect(res.body.userinfo.birthday).toBe('2000-10-16')
      expect(res.body.userinfo.zodiac).toBe('天秤座')
      expect(res.body.userinfo.age).toBeTruthy() // cannot make sure of the exact age. changed by time.
      expect(res.body.userinfo.briefintro).toBe('This is a test message. 这是一条测试信息。これは一つのテストメッセージ。')
      expect(res.body.userinfo.email).toBe('test@example.com')
      done()
    })
}

function editUserValid (done) {
  request(server)
    .post('/user-edit')
    .send({
      username: 'test-user',
      token: token,
      userinfo: {
        username: 'john',
        nickname: 'john',
        uid: 100,
        birthday: '2000-10-16',
        briefintro: 'This is a test message. 这是一条测试信息。これは一つのテストメッセージ。',
        email: 'test@example.com'
      }
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('修改成功！')
      done()
    })
}

function checkEdit (done) {
  request(server)
    .get('/user-info-pub')
    .query('username=test-user')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.username).toBe('test-user') // username cannot be changed
      expect(res.body.uid).toBe(1) // uid cannot be changed
      expect(res.body.password).toBeFalsy() // no password should be passed
      expect(res.body.nickname).toBe('john') // after change
      expect(res.body.birthday).toBe('2000-10-16')
      expect(res.body.zodiac).toBe('天秤座')
      expect(res.body.age).toBeTruthy() // cannot make sure of the exact age. changed by time.
      expect(res.body.briefintro).toBe('This is a test message. 这是一条测试信息。これは一つのテストメッセージ。')
      expect(res.body.email).toBe('test@example.com')
      done()
    })
}

function emptyNickname (done) {
  request(server)
    .post('/user-edit')
    .send({
      username: 'test-user',
      token: token,
      userinfo: {
        nickname: ''
      }
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('修改成功！')
      done()
    })
}

function checkEmptyNickname (done) {
  request(server)
    .get('/user-info-pub')
    .query('username=test-user')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.username).toBe('test-user') // username cannot be changed
      expect(res.body.nickname).toBe('test-user') // nickname cannot be empty
      done()
    })
}

function changePWDwrongPWD (done) {
  request(server)
    .post('/user-edit-pwd')
    .send({
      username: 'test-user',
      token: token,
      password: 'test-password-wrong',
      newPWD: 'test-password-new'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('fail')
      expect(res.body.info).toBe('原密码错误！')
      done()
    })
}

function changePWDvalid (done) {
  request(server)
    .post('/user-edit-pwd')
    .send({
      username: 'test-user',
      token: token,
      password: 'test-password-correct',
      newPWD: 'test-password-new'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      expect(res.body.info).toBe('密码修改成功！')
      done()
    })
}

function loginWithOldPWD (done) {
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
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('密码错误！')
      done()
    })
}

function loginWithNewPWD (done) {
  request(server)
    .post('/login')
    .send({
      username: 'test-user',
      password: 'test-password-new'
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('登录成功！')
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

test('Test userpage, user-info and user-edit', async done => {
  seqtester.testSequently([register, login, getUser, getUserbyUID, editUserValid, checkEdit, getUserPriValid,
    emptyNickname, checkEmptyNickname, changePWDwrongPWD, changePWDvalid, loginWithOldPWD, loginWithNewPWD], done)
})
