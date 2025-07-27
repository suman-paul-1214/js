addOne(5);

function addOne(num) {
  return num + 1;
}


// console.log(addTwo(5)); 
//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
  return num + 2;
}

addTwo(5);