const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const validator = require('validator')
const { json } = require("express")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    slidervalue: {
        type: Number,
        default: 60
    },
    location: {
        type: String,
        default: "New York, USA"
    }
})
  
// static signup method
userSchema.statics.signup = async function(email, password) {

    // validation
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash })

    return user
}

// static login method
userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ email })
    if (!user) {
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        throw Error('Incorrect password')
    }

    return user
}

// static update slider method 
userSchema.statics.updatevalue = async function(email, slidervalue) {
    // validation
    if (!email || !slidervalue) {
        throw Error('Missing email or value')
    }

    this.updateOne({email, email}, {$set:{ slidervalue:slidervalue }}, (err, doc) => {
        if (err) {
            throw Error('Error trying to update value')
        }

        // User was updated successfully
        return json(doc)
    })
}

// static update user location
userSchema.statics.updatelocation = async function(email, location) {
    // validation
    if (!email || !location) {
        throw Error("Missing email or location")
    }

    this.updateOne({email, email}, {$set:{ location:location }}, (err, doc) => {
        if (err) {
            throw Error('Error trying to update location')
        }

        return json(doc)
    })
}

module.exports = mongoose.model('User', userSchema)
