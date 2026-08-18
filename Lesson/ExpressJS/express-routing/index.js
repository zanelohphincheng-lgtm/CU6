const express = require("express");
const api = require("./api")
const app = express();

app.get("/", (req, res) => {
    res.send(`Home Page Route`);
});

// // Normal Routing
// // Users Routing
// app.get('/users', (req, res) => {
//     res.send(`Reach User Route`)
// })

// // Routes with parameters
// app.get('/users/:userId', (req, res) => {
//     res.send(`User ID: ${req.params.userId}`)
// })

app.use('/api', api)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`This server is running at http://localhost:${PORT}`);
});
