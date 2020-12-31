// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x;
// };

// const square = (x) => x * x;

// const square = x => x * x;

// console.log(square(3));

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    //concise method syntax for object methods
    printGuestList() {
        console.log('Guest list for ' + this.name);
        
        // doesn't work, this.name is undefined
        // this.guestList.forEach(function (guest) {
        //     console.log(guest + ' is attending ' + this.name);
        // });

        //this works because arrow functions don't bind their OWN this keyword, they do it in the context of where they're created.
        //this is why you don't want to use an arrow syntax in place of the shortened object method syntax above, as the first log would print undefined
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}

event.printGuestList();