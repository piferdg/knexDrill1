const express = require("express")
const bodyParser = require("body-parser")
const port = parseInt(process.env.PORT || 8000)
const queries = require('./queries')

const app = express()

app.use(bodyParser.json())

app.get('/', (request, response, next) => {
    queries.list()
        .then(resolutions =>
            response.json({ resolutions }))
})

app.get('/:id', (request, response, next) => {
    queries.read(request.params.id)
        .then(resolution => response.json({ resolution }))
})

app.post('/', (request, response, next) => {
    queries.create(request.body)
    .then(singleResolution => response.json({singleResolution}))
})

//catch 404 and forward to error handler
app.use((request, response, next) => {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.json({
        message: err.message,
        error: req.app.get("env") === "development" ? err.stack : {}
    })
})

app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})


