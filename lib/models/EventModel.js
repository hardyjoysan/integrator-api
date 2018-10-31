const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    date: {
        type: String,
        required: 'Enter event date'
    },
    start_time: {
        type: String,
        required: 'Enter start time'
    },
    end_time: {
        type: String,
        required: 'Enter end time'
    },
    title: {
        type: String,
        trim: true,
        required: 'Enter event title'
    },
    description: {
        type: String,
        trim: true,
    },
    fee: {
        type: Number,
        required: 'Event fee required'
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

module.exports = mongoose.model('Event', EventSchema);