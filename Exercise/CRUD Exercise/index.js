const express = require('express')
const app = express()
const router = require('./routes/products')

app.use('/', router)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})