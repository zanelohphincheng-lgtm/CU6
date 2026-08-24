const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Bookstore = require('./models/Bookstore')



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});