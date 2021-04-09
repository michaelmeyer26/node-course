const express = require('express')
require('./db/mongoose')
const User = require("./models/user")
const Task = require("./models/task")
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const main = async () => {
    // const task = await Task.findById('606fc51c9379c326e3fde0f6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('606fc43302c35626b617093a')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()