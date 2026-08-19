const express = require('express')
const app = express()
const router = require('./routes/routes')
const mathRouter = require('./routes/math')
const jsonRouter = require('./routes/json')

app.use('/', router)
app.use('/math', mathRouter)
app.use('/json', jsonRouter)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`)
})

// What's MVC?
// MVC : Modal(Data) View(Routes) Controller(Controller lah :D)

// And today we'll learn mostly about View and Controller
// View : Whatever the users can see or interact with
// Controller : Managing business logic, or in other words (Your code processes)