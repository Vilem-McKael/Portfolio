// routes/send-message.js

const express = require('express')
const router = express.Router()
const messagesCtrl = require('../controllers/messages')

// POST /send-message

router.post('/messages', messagesCtrl.sendMessage);

module.exports = router;