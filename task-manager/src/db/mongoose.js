const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    }, age: {
        type: Number
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

const task =  new Task({
    description: 'Let out the puppies',
    completed: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

// const me = new User({
//     name: 'Michael',
//     age: 'Mike'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('ERROR!', error)
// })