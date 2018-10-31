const Event = require('../models/EventModel');

module.exports = {
    getEvents: function(req, res, next) {
        Event.find({}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    addNewEvent: function(req, res, next) {
        let newEvent = new Event(req.body);

        newEvent.save((err, result) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(result);
        })
    },
    getEventWithID: function(req, res, next) {
        Event.findById(req.params.eventId, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    updateEvent: function(req, res, next) {
        Event.findOneAndUpdate({ _id: req.params.eventId }, req.body, { new: true }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    deleteEvent: function(req, res, next) {
        Event.deleteOne({ _id: req.params.eventId }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted event!'});
        });
    },
}