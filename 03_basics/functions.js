function sayMyName(name) { // name is a parameter
  console.log(`My name is ${name}`);
}
// sayMyName("Rudra Anisha") // My name is Rudra Anisha

//Rudra Anisha is an argument passed to the function sayMyName

function printNumbers(a, b) {
  console.log(a + b);
}
// const result = printNumbers(5, 10); // 15
// result is undefined because printNumbers does not return a value

function addNumbers(a, b) {
  return a + b; // returns the sum of a and b
}
//console.log(addNumbers(5, 10)); // 15


function loginUserMessage(username, password) {
  if (username && password) {
    return `User ${username} logged in successfully!`;
  } else {
    //return "Please provide both username and password.";
  }
}
console.log(loginUserMessage("Rudra Anisha", "password123")); // User Rudra Anisha logged in successfully!
console.log(loginUserMessage("Rudra Anisha")); // Please provide both username and password.
console.log(loginUserMessage()); // Please provide both username and password.

function loginMessage(username="Guest") {
  if(!username) {
    console.log("Please provide a username.");
    return;
  }
  console.log(`Welcome, ${username}!`);
}
console.log(loginMessage()); // Welcome, Guest!

function calculateCartPrice(...cartItems) {
  return cartItems;
}
// ... operatror allows you to pass a variable number of arguments to a function 
// it is known as rest operator as well as spread operator depending on the context/useCase

console.log(calculateCartPrice(100, 200, 300)); // [100, 200, 300] 
// bundles all arguments into an array

function calculateTotalPrice(val1, val2, ...prices) {
  return prices;
}

console.log(calculateTotalPrice(10, 20, 30, 40, 50)); // [30, 40, 50]

const user={
  username: "Rudra Anisha",
  password: "password123" 
}
function handleObject(anyObject) {
  console.log(`Username: ${anyObject.username}, Password: ${anyObject.password}`);
}

// handleObject(user)

handleObject({
  username: "Rudra Anisha",
  password: "password1209"
})

const myNewArray=[200,400,600,800];
function handleArray(array) {
  return array[0] + array[1] + array[2] + array[3];
}
 //console.log(handleArray(myNewArray)); // 2000

 console.log(handleArray([100, 200, 300, 400])); // 1000
 
 