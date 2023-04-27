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
        ref: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    // flashCard: [{}],
    
    //     toJSON: {
    //     virtuals: true,
    // },
    // id: false,
});

flashSchema.virtual('cardCount').get(function () {
    return this.flashCard.length;
});

const Flash = model('flash', flashSchema);

module.exports = Flash;