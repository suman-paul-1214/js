const user={
  username: "Rudra Anisha",
  password: "password123",
  framePrice: 10000,

  welcomeMessage: function() {
    //console.log(this)
    return `Welcome, ${this.username}! Your frame price is ${this.framePrice}.`;

    //this keyword refers to the current object/context
  }


}

// console.log(user.welcomeMessage()); // "Welcome, Rudra Anisha! Your frame price is 10000."

// user.framePrice = 12000; // Update frame price

// console.log(user.welcomeMessage()); // "Welcome, Rudra Anisha! Your frame price is 12000."

//console.log(this);

// {} coz abhi ham log node environment mein hain to empty object return kar raha hai
// In a browser, this would refer to the global window object


// function fun(){
//   let username = "John Doe";
//   console.log(this);

//   console.log(this.username); // undefined because 'username' is not defined in the global context
//   //aise this keyword ko use nahi kar sakte hai


//   // In Node.js, this would refer to the module.exports object
// }

//fun(); 

const fun2 = () => {
  let username = "John Doe";
  
}

//explicit return
const addTwo = (num1, num2) => {
  return num1 + num2;
}

//implicit return 
const addThree = (num1, num2, num3) => num1 + num2 +num3;

//or

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);

const ObjReturn = (name, age) => ({ username: name, age:25});

const myArray = [1, true, 3, "suman", 5];

myArray.forEach(function () {})

myArray.forEach((element) => {
  console.log(element);
});

myArray.forEach(() => (0));
