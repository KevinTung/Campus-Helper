var server = require('../router').app
var request = require('supertest')
var path = require('path')

var fs = require('fs')
var globalConfig = require('../global_config')

function checkDeleted (done) {
  var files = fs.readdirSync(path.join(globalConfig.dataDir, 'uploads'))
  expect(Object.keys(files).length).toBe(0) // no file remains in 'data/uploads/'
  done()
}

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

// 2019-10-23 12:00:00
var timeStamp = new Date(2019, 9, 23, 12, 0, 0, 0).getTime()
function uploadPosterSingle (done) {
  request(server)
    .post('/upload-poster')
    .field('username', 'test-user')
    .field('token', token)
    .field('content', 'This is content text.')
    .field('time', timeStamp)
    .field('privacy', 0)
    .field('tags', '["tag1", "tag2", "中文"]')
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      expect(res.body.info).toBe('动态发布成功！')
      done()
    })
}

function uploadInvalid (done) {
  request(server)
    .post('/upload-poster')
    .field('username', 'test-user')
    .field('token', '')
    .field('content', 'This is content text.')
    .field('time', timeStamp)
    .field('privacy', 0)
    .field('tags', '["tag1", "tag2", "中文"]')
    .attach('images', path.join(__dirname, 'test.png'))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('rejected')
      done()
    })
}

var pics
var pid
function getPosterListSingle (done) {
  request(server)
    .post('/frontpage')
    .field('username', 'test-user')
    .field('token', token)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      var list = res.body.list
      expect(list[0].content).toBe('This is content text.')
      expect(list[0].time).toBe(timeStamp)
      pics = list[0].pics
      pid = list[0].pid
      done()
    })
}

function checkPosterSingle (done) {
  request(server)
    .get('/poster-info')
    .query('pid=' + pid)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.pid).toBe(pid)
      expect(res.body.content).toBe('This is content text.')
      expect(res.body.time).toBe(timeStamp)
      var tags = JSON.parse(res.body.tags)
      expect(tags.length).toBe(3)
      expect(tags[0]).toBe('tag1')
      expect(tags[1]).toBe('tag2')
      expect(tags[2]).toBe('中文')
      done()
    })
}

function checkNonExistedPoster (done) {
  request(server)
    .get('/poster-info')
    .query('pid=' + '123')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body).toBeFalsy()
      done()
    })
}

function checkPicSingle (done) {
  request(server)
    .get(pics[0].uri)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      var size = fs.statSync(path.join(__dirname, 'test.png')).size
      expect(res.header['content-type']).toBe('image/png') // is a png image
      expect(res.header['content-length']).toBe(size.toString()) // is the image uploaded
      done()
    })
}

function checkPicSizeSingle (done) {
  var imgSize = require('image-size')(path.join(__dirname, 'test.png'))
  expect(pics[0].width).toBe(imgSize.width)
  expect(pics[0].height).toBe(imgSize.height)
  done()
}

function deletePoster (done) {
  request(server)
    .post('/delete-poster')
    .send({
      username: 'test-user',
      token: token,
      pid: pid
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('success')
      expect(res.body.info).toBe('动态删除成功！')
      done()
    })
}

function checkPosterDeleted (done) {
  request(server)
    .get('/poster-info')
    .query('pid=' + pid)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body).toBeFalsy()
      request(server)
        .post('/frontpage')
        .field('username', 'test-user')
        .field('token', token)
        .expect(200)
        .end(function (err, res) {
          if (err) throw err
          expect(res.body.list.length).toBe(0)
          done()
        })
    })
}

function deleteNone (done) {
  request(server)
    .post('/delete-poster')
    .send({
      username: 'test-user',
      token: token,
      pid: pid
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('fail')
      done()
    })
}

var utils = require('./utils')

function register2 (done) {
  utils.registerValid('test-user-2', 'any', done)
}

var env = {}
function login2 (done) {
  utils.loginValid('test-user-2', 'any', env, done)
}

function fakeDelete (done) {
  request(server)
    .post('/delete-poster')
    .send({
      username: 'test-user-2',
      token: env.token,
      pid: pid
    })
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.result).toBe('fail')
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

test('Test posterpage, poster upload and remove', async done => {
  seqtester.testSequently([register, login, uploadPosterSingle, checkDeleted, uploadInvalid, checkDeleted, getPosterListSingle,
    checkNonExistedPoster, checkPosterSingle, checkPicSingle, checkPicSizeSingle, register2, login2, fakeDelete, login, deletePoster,
    checkPosterDeleted, deleteNone], done)
})
