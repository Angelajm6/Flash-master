const { Schema, model } =require('mongoose');
// const bcrypt = require('bcrypt');


// Schema to set role as either 'Student' or 'Teacher' so we can give the teachers an admin-like role.
// May need to fix roleSchema
// const roleSchema = new Schema({
//     name: String,
//     owner: [{
//         type: Schema.Types.ObjectId,
//         ref: 'user'
//     }]
// });

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
    flashCards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'flash',
        },
    ],
    role:
        {
            type: String,
            required: true
        }
    
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });
 userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
const User = model('user', userSchema);


module.exports = User;