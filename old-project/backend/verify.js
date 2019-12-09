// Handle login request (verify, and generate token)
// Verify with token and preserve token.
// Handle register request (add a user)

// Instruction: response.status: 0 for rejected, 1 for adimitted

var logger = require('./console_log')
var user = require('./user')
var stringRandom = require('string-random')

// Pre-settings
const tokenLength = 16

var tokens = {} // All tokens should be deleted when the server is down. Re-login is required after restart.

// generate and save new token for user 'username'
function newToken (username) {
  var token = stringRandom(tokenLength)
  tokens[username] = token // bind token and username
  return token
}

// verify the user. Return true if admitted; return false if rejected.
// fill in response.status (and possibly reponse.info) according to authentication result
function verify (username, token, response) {
  if (username && token && (username in tokens) && (token === tokens[username])) {
    console.log('    user ' + username + ' authentication admitted.\n')
    response.status = 'admitted'
    return true
  } else {
    console.log('    user ' + username + ' authentication rejected.\n')
    response.status = 'rejected'
    response.info = '验证失败，请重新登录！'
    return false
  }
}

async function onLogin (request, response) {
  logger.onRecieveRequest(request)

  var res = {
    status: '',
    info: '',
    token: ''
  }

  if (request.body.username && request.body.password) {
    var username = request.body.username
    var password = request.body.password
    var userinfo = await user.getUserByName(username)
    if (userinfo) {
      if (userinfo.password === password) {
        res.status = 'admitted'
        res.info = '登录成功！'
        res.token = newToken(username)
      } else {
        res.status = 'rejected'
        res.info = '密码错误！'
      }
    } else {
      res.status = 'rejected'
      res.info = '用户名不存在！'
    }
  } else {
    res.status = 'rejected'
    res.info = '请求失败'
  }

  response.json(res) // response sent here

  // print info in console
  console.log('    user ' + username + ' login request ' + res.status)
}

async function onRegister (request, response) {
  logger.onRecieveRequest(request)

  var res = {
    status: '',
    info: ''
  }

  if (request.body.username && request.body.password) {
    var username = request.body.username
    var password = request.body.password
    if (await user.getUserByName(username)) {
      res.status = 'rejected'
      res.info = '用户名已存在！'
    } else {
      await user.newUser({
        username: username,
        password: password
      })
      res.status = 'admitted'
      res.info = '注册成功！'
    }
  } else {
    res.status = 'rejected'
    res.info = '请求失败'
  }

  response.json(res) // response sent here

  // print info in console
  console.log('    user ' + username + ' register request ' + res.status)
}

async function registerInfo (request, response) {
  logger.onRecieveRequest(request)

  var res = {}
  if (request.body.username && request.body.password) {
    if (await user.getUserByName(request.body.username)) {
      res.status = 'rejected'
      res.info = '用户名已存在！'
    } else {
      var userinfo = {
        username: request.body.username,
        password: request.body.password
      }
      if ('avatar' in request.body) userinfo.avatar = request.body.avatar
      if ('nickname' in request.body) userinfo.nickname = request.body.nickname
      if ('gender' in request.body) userinfo.gender = request.body.gender
      await user.newUser(userinfo)
      res.status = 'admitted'
      res.info = '注册成功！'
    }
  } else {
    res.status = 'rejected'
    res.info = '请求不合法'
  }
  response.json(res)

  console.log('    user ' + request.body.username + ' register request ' + res.status)
}
exports.onLogin = onLogin
exports.onRegister = onRegister
exports.verify = verify
// for unit-test
exports.newToken = newToken
exports.registerInfo = registerInfo
