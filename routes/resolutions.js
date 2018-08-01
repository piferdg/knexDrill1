// const express = require('express')
// const router = express.Router()

// const queries = require('../queries')

// router.get('/', (request, response, next) => {
//   queries.list()
//       .then(resolutions => { 
//         response.json({ resolutions })
//       })
// })

// router.get('/:id', (request, response, next) => {
//   queries.read(request.params.id)
//       .then(resolution => {
//         resolution
//         ? response.json({ resolution })
//         : response.sendStatus(404)
//       })
// })

// module.exports = router