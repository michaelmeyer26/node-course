require('../src/db/mongoose')
const { Model } = require('mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('604acde7bdbdac3dcfea6af7', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})