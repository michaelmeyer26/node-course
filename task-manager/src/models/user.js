const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    }, email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }, age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }, password: {
        type: String,
        trim: true,
        required: true,
        validate(value) {
            if(value.includes('password')) {
                throw new Error('Cannot contain the word "password"')
            } else if (value.length < 6) {
                throw new Error('Password must be 7 or more characters')
            }
        }
    }
})

module.exports = User