const express = require("express");

// controller functions
const { createNotification, getNotifications } = require("../controllers/notificationsController");

const router = express.Router();

// POST a new notification
router.post('/', createNotification)

// GET all notifications
router.get('/', getNotifications);

module.exports = router;