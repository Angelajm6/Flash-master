const { Schema, model } =require('mongoose');
// const bcrypt = require('bcrypt');

const roleSchema = new Schema({
    name: String,
    owner: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        minlength: 2,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment',
        },
    ],
    flashDecks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'flash',
        },
    ],
    roles: [
        {
            type: Schema.Types.ObjectId,
            ref: "role",
        },
    ],
});

const User = model('user', userSchema);
const Role = model('role', roleSchema);

module.exports = User,Role;