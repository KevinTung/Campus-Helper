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

function uploadAvatarWrongToken (done) {
  request(server)
    .post('/user-upload-avatar')
    .field('username', 'test-user')
    .field('token', '')
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('rejected')
      expect(res.body.info).toBe('验证失败，请重新登录！')
      done()
    })
}

var fs = require('fs')
var globalConfig = require('../global_config')
function checkDeleted (done) {
  var files = fs.readdirSync(path.join(globalConfig.dataDir, 'uploads'))
  expect(Object.keys(files).length).toBe(0) // no file remains in 'data/uploads/'
  done()
}

function uploadAvatarValid (done) {
  request(server)
    .post('/user-upload-avatar')
    .field('username', 'test-user')
    .field('token', token)
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('头像上传成功！')
      done()
    })
}

function uploadAvatarValid2 (done) {
  request(server)
    .post('/user-upload-avatar')
    .field('username', 'test-user')
    .field('token', token)
    .attach('images', path.join(__dirname, 'test2.jpg'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.info).toBe('头像上传成功！')
      done()
    })
}

var avatarPath
function getAvatar (done) {
  request(server)
    .get('/user-info-pub')
    .query('username=test-user')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.username).toBe('test-user') // check correct username
      avatarPath = res.body.avatar
      done()
    })
}

function checkAvatar (done) {
  request(server)
    .get(avatarPath)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      var size = fs.statSync(path.join(__dirname, 'test.png')).size
      expect(res.header['content-type']).toBe('image/png') // is a png image
      expect(res.header['content-length']).toBe(size.toString()) // is the image uploaded
      done()
    })
}

function checkAvatar2 (done) {
  request(server)
    .get(avatarPath)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      var size = fs.statSync(path.join(__dirname, 'test2.jpg')).size
      expect(res.header['content-type']).toBe('image/jpeg') // is a jpg image
      expect(res.header['content-length']).toBe(size.toString()) // is the image uploaded
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

test('Test avatar uploading', async done => {
  seqtester.testSequently([register, login, uploadAvatarWrongToken, checkDeleted, uploadAvatarValid, checkDeleted, getAvatar,
    checkAvatar, uploadAvatarValid2, getAvatar, checkAvatar2], done)
})
