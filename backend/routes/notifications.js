const express = require("express");

// controller functions
const { createNotification, getNotifications, deleteNotification } = require("../controllers/notificationsController");

const router = express.Router();

// POST a new notification
router.post('/', createNotification)

// GET all notifications
router.get('/', getNotifications);

// DELETE a notification
router.delete('/:id', deleteNotification)

module.exports = router;