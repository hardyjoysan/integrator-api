const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const EventController = require('../controllers/EventController');
const RegistrationController = require('../controllers/RegistrationController');
const AdminController = require('../controllers/AdminController');

const AdminMiddle = require('../middleware/AdminValidate');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Admin
router.post('/admin/register', AdminController.create);
router.post('/admin/letmein', AdminController.authenticate);

// Events
router.get('/events', EventController.getEvents);
router.post('/event', AdminMiddle.validate, EventController.addNewEvent);

router.get('/event/:eventId', EventController.getEventWithID);
router.put('/event/:eventId', AdminMiddle.validate, EventController.updateEvent);
router.delete('/event/:eventId', AdminMiddle.validate, EventController.deleteEvent);

// Registrations
router.get('/registrations', AdminMiddle.validate, RegistrationController.getRegistrations);
router.post('/registration', AdminMiddle.validate, RegistrationController.addNewEvent);

router.get('/registration/:registrationId', AdminMiddle.validate, RegistrationController.getEventWithID);
router.put('/registration/:registrationId', AdminMiddle.validate, RegistrationController.updateEvent);
router.delete('/registration/:registrationId', AdminMiddle.validate, RegistrationController.deleteEvent);

module.exports = router;