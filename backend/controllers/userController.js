const User = require('../models/AccountModel')
const jwt = require('jsonwebtoken')
require("dotenv").config();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        const userSliderValue = user.slidervalue
        const userLocation = user.location

        const current = new Date();
        const currentMonth = current.getMonth() + 1;
        const currentDate = current.getDate();
        const currentYear = current.getFullYear();
        const date = `${currentMonth}/${currentDate}/${currentYear}`;

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token, userSliderValue, userLocation, date })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        const userSliderValue = user.slidervalue
        const userLocation = user.location

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token, userSliderValue, userLocation, date})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// update value
const updateValue = async(req, res) => {
    const {email, value} = req.body

    try { // will try to update the slider value for the user
        const user = await User.updatevalue(email, value)

        res.status(200).json({email, value})
    } catch (error) { // we got an erorr when trying to update the slider value for the user
        res.status(400).json({error: error.message})
    }

}

const updateLocation = async(req, res) => {
    const {email, location} = req.body
    try {
        const user = await User.updatelocation(email, location)

        res.status(200).json({email, location})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser, updateValue, updateLocation }