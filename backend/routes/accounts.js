const express = require("express");

// controller functions
const { loginUser, signupUser, updateValue, updateLocation } = require("../controllers/userController");

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

//update slider value
router.post('/updatevalue', updateValue);

//update user location
router.post('/updatelocation', updateLocation);

module.exports = router;