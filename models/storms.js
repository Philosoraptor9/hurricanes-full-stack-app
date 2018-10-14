const mongoose = require('mongoose');

const stormSchema = new mongoose.Schema({
    name: {type: String, required: true},
    strength: {type: String, required: true},
    madeLandfall: Boolean
});

module.exports = mongoose.model('Storms', stormSchema);