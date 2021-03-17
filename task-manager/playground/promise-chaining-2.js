require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

Task.findByIdAndDelete('604ad35e86a20242d0807b64').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})