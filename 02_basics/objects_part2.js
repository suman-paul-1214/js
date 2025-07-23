// Object Literal Syntax
// Singleton Object
const tinderUser=new Object();
//console.log(tinderUser); // {}

//non singleton object
const tinderUser2= {}
//console.log(tinderUser2); // {}

tinderUser.id="123abc";
tinderUser.name="John Doe";
tinderUser.age=30
//console.log(tinderUser); // { id: '123abc', name: 'John Doe', age: 30 }


const regularUser = {
  email: "jane@example.com",
  fullname :{
    userfullname:{
      firstName: "Jane",
      lastName: "Smith"
    },
    userAddress: {
      city: "Los Angeles",
      country: "USA"
    }
  }
    };
//console.log(regularUser.fullname.userfullname.firstName // Jane);

//api se data aata hai tab pata nahi hota ki woh chiz aayi ya nahi, isko handle karne ke liye hum optional chaining ka use karte hain

//console.log(regularUser.fullname?.userfullname?.firstName); // Jane

const obj1 = { name1: "Alice", age1: 30 };
const obj2 = { name2: "Bob", age2: 25 };




const obj3 = {obj1, obj2}; // Object Shorthand Syntax

//console.log(obj3); // { obj1: { name1: 'Alice', age1: 30 }, obj2: { name2: 'Bob', age2: 25 } }

const mergedObject = Object.assign(obj1, obj2); // Merging obj2 into obj1

//console.log(mergedObject); 
// { name1: 'Alice', age1: 30, name2: 'Bob', age2: 25 }


// Object.assign()// Object.assign() is a method that copies properties from one or more source objects to a target object
// It is used to merge objects or create a shallow copy of an object
// It does not create a new object but modifies the target object in place

// Here's what Object.assign(obj1, obj2) really does:

// It copies properties from obj2 into obj1

// If both objects have the same keys (name, age, email), then obj2’s values overwrite obj1’s values

const obj = Object.assign({}, obj1, obj2); // {} act as a target object and obj1, obj2 are source objects agr yeh nahi doge toh obj1 me merge ho jayega


const obj4 = { ...obj1, ...obj2 }; // Using Spread Operator
//console.log(obj4); // { name1: 'Alice', age1: 30, name2: 'Bob', age2: 25 }


const users = [
  { id: "123abc", name: "Alice", age: 30 },
  { id: "456def", name: "Bob", age: 25 }
];

users[1].email = "bob@example.com";

//console.log(users); // [ { id: '123abc', name: 'Alice', age: 30 }, { id: '456def', name: 'Bob', age: 25, email: 'bob@example.com' } ] 

console.log(Object.keys(users)); // ['0', '1'] - Returns an array of keys (indices in this case) of the users array
console.log(Object.values(users)); // Returns an array of values (user objects) in the users array
console.log(Object.entries(users)); // Returns an array of key-value pairs (indices and user objects) in the users array    

console.log(tinderUser.hasOwnProperty("id")); // true - Checks if the property 'id' exists in tinderUser
console.log(tinderUser.hasOwnProperty("email")); // false - Checks if the property 'email' exists in tinderUser