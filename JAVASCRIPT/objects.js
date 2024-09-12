let product = {  // product is an object
    name : "iphone",
    company : "Apple",
    price : 125000,
    warranty : "1 year",
    color : "Black"
}

console.log(Object.keys(product)) // returns array of string, where each string represents an unique key

console.log(Object.values(product)) // returns array of string, where each string represents the values of corresponding keys

console.log(Object.entries(product)) // returns a 2d array where length of each array is 2 (keys and value)




// MUTABILITY AND IMMUTABILITY OF OBJECTS

const prod = { 
    name : "Iqoo",
    company : "VIVO",
    price : 25000,
    warranty : "1 year",
    color : "Blue"
}

prod.price = 2700 // this is possible
console.log(Object.entries(prod))

// const prod = {   // this is not possible
//     name : "Iqoo",
//     company : "VIVO",
//     price : 25000,
// }
// console.log(Object.entries(prod))


// Suppose my datatype of Object is const, still we can manipulate the key value pairs. but if we try to reassign the same object into a new key value pair, this is not possible..This is becuase const keyword does not allow re assignment.. we we are not able to achieve complete mutability in objects

// Due to this reason we have two methods -> seal and freeze

// OBJECTS.SEAL
// This does not allow us to add or delete new key-value pairs to the Object. But we can update existing key-value pairs.

const example1 = { 
    name : "Mech Keyboard",
    company : "Razer",
    price : 5000,
    warranty : "1 year",
    color : "White"
}
Object.seal(example1)
example1.layout = "60%" // new addition not allowed
console.log(example1)
delete example1.color // deletion not allowed
console.log(example1) 
example1.price = 6000 // updation is allowed
console.log(example1)


// OBJECTS.FREEZE  (highest level of immutability)
// This does not allow us to add or delete new key-value pairs to the Object nor we can update existing key-value pairs.

const example2 = { 
    name : "Membrane Keyboard",
    company : "Logitech",
    price : 500,
    warranty : "1 year",
    color : "Blac2"
}
Object.freeze(example2)
example2.layout = "60%" // new addition not allowed
console.log(example2)
delete example2.color // deletion not allowed
console.log(example2) 
example2.price = 6000 // updation is not allowed
console.log(example2)











