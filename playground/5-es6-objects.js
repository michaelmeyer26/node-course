//Object property syntax
//when declaring properties of an object, you can just list the variable name if they share names
//i.e. name instead of name: name

const name = "Andrew";
const userAge = 27;

const user = {
    name,
    //cannot use quick syntax because names are different
    age: userAge,
    location: 'Philadelphia'
}

console.log(user);

//Object destructuring
//Take attributes out of an object and turn them into variables

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

//Old way of doing things, if working with big or complex objects can result in a lot of code
// const label = product.label
// const stock = product.stock

//Object destructuring, turning the attributes into cariables of the same name
// const {label, stock, rating} = product

//Different syntax, allowing for the renaming of the variables pulled from attributes
// const {label:productLabel, stock, rating} = product
// console.log(productLabel + ' ' + stock)
//undefined
// console.log(rating)

//Uses the default value for rating
//Rating becomes 5 since there is no rating property on product
// const {label:productLabel, stock, rating = 5} = product


//Slower way to destructure variables being passed in to a function
// const transaction = (type, myProduct) => {
//     const {label, stock} = myProduct;

// }

//Destructures the variables inside the arguments, quicker to type and cleaner
const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}


transaction('order', product)