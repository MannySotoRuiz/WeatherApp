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
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('listening on port', process.env.PORT, ' and connected to mongo')
        })
    })
    .catch((error) => {
        console.log(error)
    })

//listen for requests


////////////////////

// require("dotenv").config();

// const express = require("express");

// // express app
// const app = express();

// // middleware (its just logging the requests as they come in)
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// });

// // routes
// app.get("/", (req, res) => {
//     res.json({mssg: "Welcome to the app"});
// });

// // listen for requests
// app.listen(process.env.PORT, () => {
//     console.log("listening on port", process.env.PORT);
// });

// process.env;
// ///////////
// require("dotenv").config();

// const express = require("express");

// // express app
// const app = express();

// // listen for requests
// app.listen(process.env.PORT, () => {
//     console.log("listening on port", process.env.PORT);
// });

// // middleware (its just logging the requests as they come in)
// app.use((req, res, next) => {
//     console.log(req.path, req.method);
//     next();
// });

// app.use(express.static('views'));
// console.log('dirname: ' + __dirname);
// // routes
// app.get("/", (req, res) => {
//     //res.json({mssg: "Welcome to the app"});
//     console.log('dirname: ' + __dirname);
//     res.sendFile('./Home.js', { root: 'C:\\Users\\mdeod\\OneDrive\\Desktop\\project\\src\\pages' });
// });

// // app.set('view engine', 'ejs');
// // app.set('views', __dirname)

// // app.get('/', (req, res) => {
// //     res.render('homepage');
// // })

// process.env;