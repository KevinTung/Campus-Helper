var globalConfig = require('./global_config')

function queryAsync (sql, values) {
  return new Promise(function (resolve, reject) {
    globalConfig.database.query(sql, values, function (err, res) {
      if (err) {
        console.error(err)
        resolve(null)
      } else {
        resolve(res)
      }
    })
  })
}

async function queryAsyncFirstrow (sql, values) {
  var res = await queryAsync(sql, values)
  if (res && res.length > 0) {
    return res[0]
  } else {
    return null
  }
}

function query (sql, values, success) {
  globalConfig.database.query(sql, values, function (err, res) {
    if (err) {
      console.error(err)
    } else {
      if (success) success(res)
    }
  })
}

exports.query = query
exports.queryAsync = queryAsync
exports.queryAsyncFirstrow = queryAsyncFirstrow
