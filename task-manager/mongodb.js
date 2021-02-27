// CRUD

// // Syntax without destructuring
// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// // Syntax using destructuring (aka getting multple variables off of a single object if they share a name? Can't remember exactly but there's a video for it)
const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// // Generating an Object Idea and checking the timestamp
// const id = new ObjectID()
// console.log(id)
// console.log(id.id)
// console.log(id.getTimestamp())
// console.log(id.id.length + " " + id.toHexString().length)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then ((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // const updatePromsie = db.collection('users').updateOne({ 
    //     _id: new ObjectID("6031903906b11280aea763af") 
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromsie.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("6031948321b4e28388d03246")}, (error, task) => {
    //     if (error) {
    //         console.log("Unable to fetch.")
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if (error) {
    //         console.log('Unable to fetch.')
    //     }
        
    //     console.log(tasks)
    // })

    // // find and findOne
    // db.collection('users').findOne({ _id: new ObjectID("60346960fe0d5765b68d2dbd") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find( { age: 26 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find( { age: 26 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('users').insertOne({
    //     name: 'Autumn',
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: "Applied to jobs",
    //         completed: false
    //     },
    //     {
    //         description: "Learned more Node.JS",
    //         completed: true
    //     },
    //     {
    //         description: "Studied for interview",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.ops)
    // })


})