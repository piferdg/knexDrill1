const database = require('./database-connection')

module.exports = {
  list() {
    return database('resolutions')
  },
  read(id) {
    return database('resolutions').select('*').where('id', id)
  },
  create(singleResolution) {
    return database('resolutions').insert(singleResolution).returning('*')
    .then(record => record[0])
  }

  // },
  // update(id, resolution) {

  // },
  // delete(id) {

  // }
  
}