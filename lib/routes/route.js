const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const EventController = require('../controllers/EventController');
const RegistrationController = require('../controllers/RegistrationController');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Events
router.get('/events', EventController.getEvents);
router.post('/event', EventController.addNewEvent);

router.get('/event/:eventId', EventController.getEventWithID);
router.put('/event/:eventId', EventController.updateEvent);
router.delete('/event/:eventId', EventController.deleteEvent);

// Registrations
router.get('/registrations', RegistrationController.getRegistrations);
router.post('/registration', RegistrationController.addNewEvent);

router.get('/registration/:registrationId', RegistrationController.getEventWithID);
router.put('/registration/:registrationId', RegistrationController.updateEvent);
router.delete('/registration/:registrationId', RegistrationController.deleteEvent);

module.exports = router;