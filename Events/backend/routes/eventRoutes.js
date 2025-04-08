const express = require('express');
const { getEvents, addEvent } = require('../controllers/eventController'); 
const router = express.Router();


router.post('/', addEvent);


router.get('/', getEvents);

module.exports = router;
