const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    username: {
        type: String,
        trim: true,  
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

// hash user password before saving into database
AdminSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});

module.exports = mongoose.model('Admin', AdminSchema);