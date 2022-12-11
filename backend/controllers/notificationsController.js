const Notification = require('../models/NotificationModel')
const mongoose = require('mongoose')

// create notification
const createNotification = async(req, res) => {
    const { userEmail, fit, highTemp, lowTemp, desc } = req.body

    let emptyFields = []

    if (!userEmail) {
        emptyFields.push("email")
    }
    if (!fit) {
        emptyFields.push("recommendedfit")
    }
    if (!highTemp) {
        emptyFields.push("hightemp")
    }
    if (!lowTemp) {
        emptyFields.push("lowtemp")
    }
    if (!desc) {
        emptyFields.push("description")
    }
    if (emptyFields.length > 0) {
        console.log("details are missing")
        return res.status(400).json({error: 'Please fill in all the fieldss', emptyFields})
    }

    // const exists = await Notification.find({ date })
    // const temp = JSON.parse(exists)
    // if (exists.length === 1) {
    //     console.log(temp)
    //     console.log(userEmail)
    //     return res.status(400).json({error: 'Notification already exists for this date!', date})
    // }

    // add doc to db
    try {
        const noti = await Notification.create({ email: userEmail, recommendedfit: fit, hightemp: highTemp, lowtemp: lowTemp, description: desc })
        res.status(200).json(noti)
    } catch (error) {
        console.log("something went wrong when creating notification")
        res.status(400).json({error: error.message})
    }
}

// get all notifications
const getNotifications = async (req, res) => {
    const param1 = req.query.param1;
    const notifications = await Notification.find({email:param1}).sort({createdAt: -1})
    res.status(200).json(notifications)
}

module.exports = { createNotification, getNotifications }