require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const accountRoutes = require('./routes/accounts')

// express app
const app = express();

// middleware (its just logging the requests as they come in)
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'welcome to my app'})
})

app.use('/api/accounts', accountRoutes)

//connect to mongo
mongoose.connect(process.env.MONGO_URI)
    .then(console.log("Connected to MongoDB"))
    .catch((error) => {
        console.log(error)
    })

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running")
})