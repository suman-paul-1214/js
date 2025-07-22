const marvelCharacters = ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow"];
const dcCharacters = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"];

// marvelCharacters.push(dcCharacters)

// console.log(marvelCharacters);

// Output: ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow", ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]]

// console.log(marvelCharacters[5][2]);

// Output: "Wonder Woman"

// const allHeroes = marvelCharacters.concat(dcCharacters);
// console.log(allHeroes); // Output: ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]


// spread operator : kanch ka glass tha gir gaya toh sab kuch spread ho gaya (widely used in React)

const spreadAllHeroes = [...marvelCharacters, ...dcCharacters];
console.log(spreadAllHeroes); // Output: ["Spider-Man", "Iron Man", "Thor", "Hulk", "Black Widow", "Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern"]

anotherArray =[1,2,3,[4,5,6],7,8,9,[10,11,12,[13,14]]];
const flattenedArray = anotherArray.flat(2); // Flattens the array to a depth of 2

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

console.log(Array.isArray(flattenedArray)); // true

console.log(Array.from("Hello")); // Output: ["H", "e", "l", "l", "o"]

console.log(Array.from({name:"Anisha"})); //interesting 

let score1=100
let score2=200
let score3=300  

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]