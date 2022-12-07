const express = require("express");

// controller functions
const { loginUser, signupUser, updateValue } = require("../controllers/userController");

const router = express.Router();

// login route
router.post('/login', loginUser);

// signup route
router.post('/signup', signupUser);

//update slider value
router.post('/updatevalue', updateValue);

module.exports = router;