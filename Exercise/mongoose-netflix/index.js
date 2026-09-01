const express = require('express')
const app = express()
const tvShowRoutes = require('./routes/TVShowRoutes')
const mongoose = require('mongoose')

mongoose
    .connect(`mongodb://localhost:27017/netflix`)
    .then(() => {
        console.log("MongoDB Connected")
    })
    .catch((err) => console.log(err))

app.use('/shows', tvShowRoutes)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})