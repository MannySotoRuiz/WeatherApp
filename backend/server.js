require("dotenv").config();

const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const accountRoutes = require('./routes/accounts')

const CONNECTION_URL = 'mongodb+srv://weatherapp:weatherapp@cluster0.z08pecz.mongodb.net/test?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 4000;
// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }
const corsOptions ={
  origin:'https://endearing-arithmetic-daddd7.netlify.app', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

// express app
const app = express();

// middleware (its just logging the requests as they come in)
app.use(express.json())

app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//routes
app.get('/', (req, res) => {
    res.send('APP IS RUNNING')
})

app.use('/api/accounts', accountRoutes)

//connect to mongo
// mongoose.connect(process.env.MONGO_URI)
//     .then(console.log("Connected to MongoDB"))
//     .catch((error) => {
//         console.log(error)
//     })
mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// app.listen(process.env.PORT || 5000, () => {
//     console.log("Backend is running")
// })