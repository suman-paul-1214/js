// singleton : koi v constructor se aap banate hai to singleton object hi banta hai
// yani ki yeh apne trh ka eak hi object hai
// isliye isko singleton object kehte hai

//lekin jab aap dusre tarike se banate hai to woske multiple instances ban jate hai

// jab v literals ki trh declare karte hain to singleton nahi banta hai ,jab constructor se banta hai to singleton hi banta hai

// singleton object
// Object.create()

//symbol : unique identifier
const uniqueID = Symbol("id");

//object literal
let user = {
  //key(string): value
    name: "John",
    age: 30,
    'full name': "John Doe", //cant be accessed with dot notation
    city: "New York",
    [uniqueID]: 12345, //using symbol as key (syntax )
    email:"john@example.com",
    isActive: true,
    lastLogin :["Monday", "Tuesday", "Wednesday"],
};
console.log(user.email);
//or
console.log(user["age"]);

console.log(user['full name']); //accessing with bracket notation

console.log(user[uniqueID]); //accessing symbol key
console.log(typeof uniqueID); // "symbol"


user.isActive = false; //updating property
console.log(user.isActive); // false

//Object.freeze(user); //freezing the object to prevent further modifications
user.age = 31; // this will not work as the object is frozen
console.log(user); // { name: 'John', age: 30, 'full name': 'John Doe', city: 'New York', [Symbol(id)]: 12345, email: 'john@example.com', isActive: false, lastLogin: [ 'Monday', 'Tuesday', 'Wednesday' ] }

// Object.freeze() makes the object immutable, meaning you cannot add, delete, or modify properties
// If you try to change any property, it will not have any effect


// Object.seal() allows you to modify existing properties but prevents adding or deleting properties

user.greetingtwo =function() {
    console.log("Hello, my name is " + this.name);
};
user.greeting =function() {
    console.log(`Hello, my name is ${this.name}`);
};
console.log(user.greeting()); // Hello, my name is John
console.log(user.greetingtwo()); // Hello, my name is John

console.log(user.greeting); // [Function: greeting]
