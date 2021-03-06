const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

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
                throw new Error('Password must be 6 or more characters')
            }
        }
    }

})

//new model for tasks
//descripotion, completed
//new instance, save it
//test

const Task = mongoose.model('Task', {
    description: {
        type: String
    }, completed: {
        type: Boolean
    }
})

// const task =  new Task({
//     description: 'Let out the puppies',
//     completed: true
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })

const me = new User({
   name: '    Autumn  ',
   email: '  MYEMAIL@GMAIL.COM  ',
   password: 'hello'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('ERROR!', error)
})