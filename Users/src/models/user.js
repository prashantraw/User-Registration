const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name must be present']
    },
    username: {
        type: String,
        required: [true, 'please provide a user name']
    },

    password: {
        type: String,
        required: [true, 'please write a password'],
        min: 8,
        max: 20
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            // This only works on CREATE and SAVE!!!
            validator: function (el) {
                return el === this.password;
            },
            message: 'Passwords are not same!'
        }
    },
    zipCode: {
        type: Number,
        required: [true, 'please provide a zip code']
    },
    profileImage: {
        type: mongoose.Schema.ObjectId,
        ref: 'image'
    }

})
const User = mongoose.model('User', userSchema)
module.exports = User