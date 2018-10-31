const mongoose = require('mongoose');
const mongoDB = 'mongodb://entirosdev:dev987654@ds029640.mlab.com:29640/integrator-api';

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true });

module.exports = mongoose;