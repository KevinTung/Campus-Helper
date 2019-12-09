var server = require('../router').app
var request = require('supertest')
var path = require('path')

function registerValid (username, password, done) {
  request(server)
    .post('/register')
    .send({
      username: username,
      password: password
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      done()
    })
}

function loginValid (username, password, env, done) {
  request(server)
    .post('/login')
    .send({
      username: username,
      password: password
    })
    .set('content-type', 'application/json')
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      env.token = res.body.token // save token
      done()
    })
}

function publishSucc (username, token, content, timeStamp, privacy, imagename, done) {
  request(server)
    .post('/upload-poster')
    .field('username', username)
    .field('token', token)
    .field('content', content)
    .field('time', timeStamp)
    .field('privacy', privacy)
    .attach('images', path.join(__dirname, imagename))
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      expect(res.body.info).toBe('动态发布成功！')
      done()
    })
}
function commentSucc (username, token, pid, content, replyto, time, done) {
  request(server)
    .post('/poster/comment')
    .field('username', username)
    .field('token', token)
    .field('pid', pid)
    .field('content', content)
    .field('replyto', replyto)
    .field('time', time)
    .expect(200)
    .end(function (err, res) {
      if (err) throw err
      expect(res.body.status).toBe('admitted')
      expect(res.body.result).toBe('success')
      done()
    })
}

function expectObj (value, target) {
  for (var key in target) expect(value[key]).toBe(target[key])
}

exports.registerValid = registerValid
exports.loginValid = loginValid
exports.publishSucc = publishSucc
exports.commentSucc = commentSucc
exports.expectObj = expectObj
