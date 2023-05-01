const { Schema, model }= require('mongoose');
const dateFormat = require('../utils/dateFormat');

const flashSchema = new Schema({
    topic: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        ref: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    flashCard: [{
        question: {type: String, required: true},
        answer: {type: String, required: true}
    }],
    
    //     toJSON: {
    //     virtuals: true,
    // },
    // id: false,
});

// flashSchema.virtual('cardCount').get(function () {
//     return this.flashCard.length;
// });

const Flash = model('flash', flashSchema);

module.exports = Flash;