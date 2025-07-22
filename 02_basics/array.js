const myArray = [1,true, 3, "suman", 5];
// console.log(myArray.length); // Output: 5
// console.log(myArray[3]);

const myArr2 = new Array(1, 2, 3, 4, 5);


// myArray.push(6);
// myArray.pop();

// myArray.unshift(0); // Adds 0 at the beginning
// myArray.shift(); // Removes the first element

// console.log(myArray.includes(3)); // Output: true
// console.log(myArray.indexOf("suman")); // Output: 3

// const newArr=myArr2.join()

// console.log(newArr); // Output: "1,2,3,4,5"
// console.log(typeof newArr); // Output: "string"

// console.log(myArr2);

// console.log(typeof myArr2); // Output: "object"

//slice , splice
console.log("A",myArr2);


const myn1 = myArr2.slice(1, 3); // Output: [2, 3]
console.log(myn1); // Output: [2, 3]

console.log("B",myArr2);

const myn2 = myArr2.splice(1, 3); //modifies myArr2 and returns the removed elements

console.log("C",myArr2);
console.log(myn2); // Output: [true, 3]


