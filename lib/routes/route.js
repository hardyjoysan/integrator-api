const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const EventController = require('../controllers/EventController');
const RegistrationController = require('../controllers/RegistrationController');
const AdminController = require('../controllers/AdminController');

const AdminMiddle = require('../middleware/AdminValidate');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/test', AdminMiddle.validateUser, function(req, res) {
    res.sendStatus(204);
});

// Admin
router.post('/admin/register', AdminController.create);
router.post('/admin/authenticate', AdminController.authenticate);


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