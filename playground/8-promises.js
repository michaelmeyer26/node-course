const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 3, 2, 6])
        reject('Things went wrong!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('Success!', result)
}).catch((error) => {
    console.log('Error!', error)
})

//                        fulfilled
//                      /
// Promise -> pending -
//                      \
//                        rejected