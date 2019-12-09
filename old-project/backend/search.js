var globalConfig = require('./global_config')

async function add (id, body) {
  // add index into elastic-search
  await globalConfig.esClient.index({
    index: globalConfig.esIndex,
    id: id,
    body: body
  })
}

async function remove (id) {
  // delete from elastic-search
  await globalConfig.esClient.delete({
    index: globalConfig.esIndex,
    id: id
  })
}

async function search (keyword) {
  var res = await globalConfig.esClient.search({
    index: globalConfig.esIndex,
    body: { query: { match: { content: keyword } } }
  })
  var ret = []
  for (var resPoster of res.hits.hits) ret.push(resPoster._source.pid)
  return ret
}

exports.add = add
exports.remove = remove
exports.search = search
