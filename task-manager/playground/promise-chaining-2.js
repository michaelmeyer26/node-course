require('../src/db/mongoose.js')
const Task = require('../src/models/task.js')

// Task.findByIdAndDelete('604ad35e86a20242d0807b64').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})

    return count
}

deleteTaskAndCount('604ad31357a0544278560f36').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})