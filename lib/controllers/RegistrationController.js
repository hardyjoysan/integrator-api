const Registraion = require('../models/RegistrationModel');

module.exports = {
    getRegistrations: function(req, res, next) {
        Registraion.find({}, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    addNewRegistration: function(req, res, next) {
        let newReg = new Registraion(req.body);

        newReg.save((err, result) => {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(result);
        })
    },
    getEventWithID: function(req, res, next) {
        Registraion.findById(req.params.registrationId, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    updateEvent: function(req, res, next) {
        Registraion.findOneAndUpdate({ _id: req.params.registrationId }, req.body, { new: true }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    },
    deleteEvent: function(req, res, next) {
        Registraion.deleteOne({ _id: req.params.registrationId }, (err, result) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted registration!'});
        });
    },
}