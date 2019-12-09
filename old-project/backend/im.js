// Handle IM operations

var sqlquery = require('./sqlquery')

const imTable = 'im_message'

async function addMsg (message) {
  // someone sent a message to another one
  await sqlquery.queryAsync('insert into ?? set ?', [imTable, message])
}

async function getMsg (username) {
  // user 'username' get all his messages
  var retList = await sqlquery.queryAsync('select * from ?? where _from=? or _to=? order by time asc', [imTable, username, username])
  if (retList) return retList
  else return []
}

async function chatWith (selfUsername, tarUsername) {
  // user 'selfUsername' read all messages sent from user 'tarUsername'
  await sqlquery.queryAsync('update ?? set _read=1 where _from=? and _to=?', [imTable, tarUsername, selfUsername]) // set read
  var retList = await sqlquery.queryAsync('select * from ?? where (_from=? and _to=?) or (_from=? and _to=?) order by time asc',
    [imTable, selfUsername, tarUsername, tarUsername, selfUsername])
  return retList
}

exports.addMsg = addMsg
exports.getMsg = getMsg
exports.chatWith = chatWith
