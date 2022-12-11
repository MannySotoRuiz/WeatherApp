const mongoose = require("mongoose")

const Schema = mongoose.Schema

const notificationSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    recommendedfit: {
        type: String,
        required: true
    },
    hightemp: {
        type: Number,
        required: true
    },
    lowtemp: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Notifications', notificationSchema)