const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const donationSchema = new Schema({
    _id: {
        type: ID,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },

});

const Donation = model('donation', donationSchema);

module.exports = Donation;