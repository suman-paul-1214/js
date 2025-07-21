const score=1209
console.log(score);

const balance = new Number(1403)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum=123.9878

console.log(otherNum.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));


// ----------------<Maths>----------------

// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(5.5))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(3.9))
// console.log(Math.min(1,2,3,45))

console.log(Math.random)
console.log(Math.random())
// random()  returns a random value between 0-1
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min)
// to get a particular number with some min value