const { Schema, model }= require('mongoose');
const dateFormat = require('../utils/dateFormat');

const flashSchema = new Schema({
    flashName: {
        type: String,
        required: true,
        trim: true,
    },
    flashAuthor: {
        type: String,
        required: true,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Flash = model('Flash', flashSchema);

module.exports = Flash;