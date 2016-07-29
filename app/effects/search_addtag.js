const uniq = require('lodash/uniq')

module.exports = (data, state, send, done) => {
  const oldsearch = state.currentsearch || {}

  var update = {
    query: oldsearch.query,
    tags: uniq(oldsearch.tags.concat([data.tag]))
  }

  send('search_update', update, done)
}
