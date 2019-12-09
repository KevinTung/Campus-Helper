// Used in testing process
// Generate temporary files
// Delete temporary files

var fs = require('fs')
var path = require('path')

// clear dir and delete dir
function rmdir (dir) {
  var files = fs.readdirSync(dir)
  files.forEach(function (file) {
    var stats = fs.statSync(path.join(dir, file))
    if (stats.isDirectory()) {
      rmdir(path.join(dir, file)) // recursively rmdir
    } else {
      fs.unlinkSync(path.join(dir, file))
    }
  })
  fs.rmdirSync(dir)
}

// if dir doesn't exist, create dir
function mkdir (dirPath) {
  try {
    fs.mkdirSync(dirPath, 511) // 511 = 0777
    return true
  } catch (err) {
    try {
      var stats = fs.statSync(dirPath)
      return stats.isDirectory()
    } catch (err2) {
      return false
    }
  }
}

exports.rmdir = rmdir
exports.mkdir = mkdir
