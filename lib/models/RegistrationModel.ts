import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RegistrationSchema =  new Schema({
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
})