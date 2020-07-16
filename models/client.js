const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName:{
        type: String
    }
})

module.exports = Client = mongoose.model('client', ClientSchema);
