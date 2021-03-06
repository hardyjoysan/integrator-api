const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    event_id: {
        type: String,
        required: 'Enter event ID to register'
    },
    firstname: {
        type: String,
        trim: true,
        required: 'Enter first name'
    },
    lastname: {
        type: String,
        required: 'Enter last name'
    },
    email: {
        type: String,
        required: 'Enter your email'
    },
    phone: {
        type: Number
    },
    company: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Registration', RegistrationSchema);