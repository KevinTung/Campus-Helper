// Handle uploaded files
// Move files in 'data/uploads/' to its destination path
// Remove unauthenticated uploaded files

var fs = require('fs')
var path = require('path')
var globalConfig = require('./global_config')

// move uploaded file to desPath
function moveUpFile (oriFile, desPath) {
  var oriPath = path.join(globalConfig.dataDir, 'uploads', oriFile.filename)
  fs.renameSync(oriPath, desPath)
}

// remove uploaded file
function remUpFile (oriFile) {
  var oriPath = path.join(globalConfig.dataDir, 'uploads', oriFile.filename)
  fs.unlinkSync(oriPath)
}

exports.moveUpFile = moveUpFile
exports.remUpFile = remUpFile
