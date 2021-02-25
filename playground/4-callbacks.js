// // Promises Example, compare to code in 8-promises.js
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // error
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }

    console.log(result)
})

// ----------------
// Original Callback Notes

// setTimeout(() => {
//     console.log('Two seconds are up!')
// }, 2000);

// const names =['Andrew', 'Jen', 'Jess'];
// const shortNames = names.filter((name) => {
//     return name.length <= 4;
// });


// //Synchronus functions can just call return and use the data when it gets it
// //but asynchronous programs will result in 'undefined' values being returned as the program hasn't gotten them
// //To get around this, use callback functions as a way to properly recieve data and work with it even asynchronusly
// const geocode = (address, callback) => {
//     //Simulates an async call to get lat/long
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         //if this was a simple return statement, it would return undefined
//         callback(data)
//     }, 2000)
// }

// //Relies on a callback function (second argument after Austin, difficult to tell) rather than directly passing a returned value and printing it
// //i.e. const data = geocode('Austin');console.log(data); would print undefined.
// geocode('Austin', (data) => {
//     console.log(data)
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (x, y, callback) => {
//     setTimeout(() => {
//         const sum = x + y;
//         callback(sum);
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })