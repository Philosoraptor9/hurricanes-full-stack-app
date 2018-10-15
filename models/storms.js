const mongoose = require('mongoose');

const hurricaneSchema = new mongoose.Schema({
    name: {type: String, required: true},
    strength: {type: String, required: true},
    madeLandfall: Boolean
});

module.exports = mongoose.model('Hurricane', hurricaneSchema);