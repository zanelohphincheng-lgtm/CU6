const express = require('express')
const multer = require('multer') // Multer stands for multipart, and the point is that it can break huge files across the server and network which is why form-data has file as an options
const app = express()

// Built-in Middleware for JSON Request
// app.use(express.json())

// Built-in Middleware for URL-Encoded Requests
app.use(express.urlencoded({ extended: true }))

// Multer for Form-Data
const upload = multer()

// app.post('/api', (req, res) => {
//     console.log(req.body) // Data will be in JSON format
//     console.log(typeof(req.body))
//     console.log(req.body.id)
//     res.send(`Received JSON data`)
// })

app.post('/api', upload.none(), (req, res) => {
    console.log(req.body) // Data will be in JSON format
    console.log(typeof(req.body))
    console.log(req.body.id)
    res.send(`Received JSON data`)
})

const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})