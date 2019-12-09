// Router for server
// Processing GET and POST requests

// Attention: call back functions are included in other several js files

// Express framework
var express = require('express')
var bodyParser = require('body-parser')
var multer = require('multer')
var app = express()

function setupStatic () {
  // parser
  var jsonParser = bodyParser.json()
  app.use(jsonParser)

  var globalConfig = require('./global_config')
  var path = require('path')
  app.use('/imgs', express.static(path.join(globalConfig.dataDir, 'imgs'))) // static files
  app.use(multer({ dest: path.join(globalConfig.dataDir, 'uploads/') }).array('images')) // multer, parse form-data
  // attention: you need to move the file at path 'data/uploads' to your destination path

  // call back functions
  var verifier = require('./verify')
  var userpage = require('./userpage')
  var posterpage = require('./posterpage')
  var noticepage = require('./noticepage')
  var searchpage = require('./searchpage')
  var impage = require('./impage')

  // processing GET request
  app.get('/user-info-pub', userpage.getUserInfo)
  app.get('/poster-info', posterpage.getCertainPoster)

  // processing POST request
  app.post('/login', verifier.onLogin)
  app.post('/register', verifier.onRegister)
  app.post('/register/withinfo', verifier.registerInfo)

  app.post('/user-info-pri', userpage.getUserInfoPrivate)
  app.post('/user-edit', userpage.editUserInfo)
  app.post('/user-edit-pwd', userpage.editUserPWD)
  app.post('/user-upload-avatar', userpage.uploadAvatar)

  app.post('/user/follow', userpage.follow)
  app.post('/user/unfollow', userpage.unfollow)
  app.post('/user/isfollowing', userpage.isFollowing)

  app.post('/upload-poster', posterpage.uploadPoster)
  app.post('/delete-poster', posterpage.deletePoster)
  app.post('/poster/upvote', posterpage.upvotePoster)
  app.post('/poster/isupvoted', posterpage.hasUpvoted)
  app.post('/frontpage', posterpage.getGlobalLatestPosters)
  app.post('/user/publish/list', posterpage.getListofUser)
  app.post('/poster/list-following', posterpage.getListofFollowing)

  app.post('/poster/comment', posterpage.publishComment)
  app.post('/poster/comment/list', posterpage.getCommentList)

  app.post('/user/notification/count', noticepage.count)
  app.post('/user/notification/list', noticepage.getList)
  app.post('/user/notification/clear', noticepage.clear)

  app.post('/search', searchpage.searchQuery)

  app.post('/im/send', impage.sendMsg)
  app.post('/im/get', impage.getMsg)
  app.post('/im/with', impage.chatWith)
}

exports.app = app
exports.setupStatic = setupStatic
