// IIEF - Immediately Invoked Function Expression
// aapne function likha and wosko immediately execute karwana hai

//global scope se data polute hoti kayi baar toh isse bachne ke liye IIEF banate hai


//named IIFE
(function fun1(){
  console.log(`db connected`);  
}) (); // ; 2 IIFE eak sath execute karne ke liye lagana compulsary hai 

// () ()
// 1st () me function likhenge and 2nd () me wosko execute karwaenge

//IIFE with arrow function

(() =>{
  console.log("inside IIFE with arrow function");
  
})();

((name) =>{
  console.log(`inside IIFE with arrow function ${name}`);
  
})('hello ji')