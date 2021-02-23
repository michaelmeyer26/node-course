//establish a default for the name variable
const greeter = (name = 'user', age) => {
    console.log('Hello, ' + name)
}

greeter('Autumn')

//Hello, user
greeter()