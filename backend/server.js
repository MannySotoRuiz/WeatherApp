require("dotenv").config();

const express = require("express");

// express app
const app = express();

// middleware (its just logging the requests as they come in)
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get("/", (req, res) => {
    res.json({mssg: "Welcome to the app"});
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("listening on port", process.env.PORT);
});

process.env;