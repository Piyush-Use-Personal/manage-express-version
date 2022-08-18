const express = require('express')
const app = express()
const port = 3002
const routes = require('./routes')
const inFileRoutes = require('./inFileRoutes')
const queryStringRoutes = require('./queryStringRoutes')

app.use('/api', routes)
app.use('/file/api', inFileRoutes)
app.use('/qs/api', queryStringRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})