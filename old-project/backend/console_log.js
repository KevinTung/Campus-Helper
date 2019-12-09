// Print info in console

// print starting info
function startInfo (port) {
  console.log('Server starts running. The listening port is ' + port + '\n')
}

// print request info
function onRecieveRequest (request) {
  var myDate = Date()
  console.log('Request recieved: ' + request.originalUrl)
  console.log('    at: ' + myDate.toLocaleString()) // get time
  console.log('    IP: ' + request.ip) // get ip
}

exports.onRecieveRequest = onRecieveRequest
exports.startInfo = startInfo
