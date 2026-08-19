const express = require('express') // Import express, the three dots under "require" is just VS Code telling you that you can mouse over(Not Important)
const app = express() // Create a server and named it as "app" using express

// Middleware function
app.use((req, res, next) => {
    console.log(`Request method: ${req.method}, Request URL: ${req.url}`)
    next()
})

// req: Request (Access whatever is put in the server)
// res: Responce (That sends out "Hello World")
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.get('/info', (req, res) => {
    res.send("Information Page")
})

app.get('/profile', (req, res) => {
    res.send("Profile Page")
})

// Declare the PORT as the server number
const PORT = 5000
app.listen(PORT, () => { // Use the PORT
    // Console.logs after the server starts listening
    console.log(`This server is running at http://localhost:${PORT}`)
    // write "node index" in the intergrated terminal to activate the server
    // HOWEVER using "node index" means you will have to keep "Killing the App to import the changes into the app"
    // BUT with "nodemon index" the app automatically restarts for you for every change you made
})