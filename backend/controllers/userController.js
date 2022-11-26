const User = require('../models/AccountModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// // signup user
// const signupUser = async (req, res) => {

//     const {first_name, last_name, username, password} = req.body

//     try {
//         const user = await User.signup(first_name, last_name, username, password)

//         res.status(200).json({ username, user })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }

//     res.json({ mssg: "signup user" })
// }
// signup a user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = { loginUser, signupUser }